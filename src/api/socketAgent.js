import store from 'store';
import { getContext } from '@/api'
import socketMsg from '@/mock/socketMessage'
// setTimeout(flash_title(), 2000); //2秒之后调用一次
var windowBlur=false;
var unread=0;
var flashInterval=null;
function newMsgCount() {
  var flag = false;
  window.clearInterval(flashInterval);
  ++unread;
  flashInterval=window.setInterval(() => {
    if (flag) {
      flag = false;
      document.title = '【'+unread+'条新消息】';
    } else {
      flag = true;
      document.title = '【　　　】';
    }
  }, 300);
}
document.addEventListener("webkitvisibilitychange", ()=>{
  windowBlur=true;
}, false);

window.onfocus=()=>{
  windowBlur=false;
  unread=0;
  document.title='客服系统调试web端'
  window.clearInterval(flashInterval);
}
export default function actionStartSocket() {
  let getUuid = () => {
    let S4 = function() {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1)
    }
    let uuid = S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4()
    let timeStamp = new Date().getTime()
    return (uuid + timeStamp)
  }
  this.socket = null;
  this.rendered = false,
    this.init = (data) => {
      let socket = null;
      const io = require('socket.io-client');
      this.rendered = true;
      socket = io(`${__SOCKETHOST__}/im/user?id=${data.id}&deviceId=43C2F574-616F-4242-B0DA-A&token=54a6ef843792e92_&channel=web&ip=192.168.232.2&nickname=${data.nickname}&avatar=https://img.awesomes.cn/ts/c6/179864583.jpg&os=Android`);
      socket._newChat = true;
      socket.on('connect', () => {
        console.log(data, "连接成功")
        let MessageList = {};
        store.getters.curUser ? store.getters.curUser.contextList.forEach((e, num) => {
          MessageList[e.contextId] = store.getters.messageUpdate && store.getters.messageUpdate[e.contextId] ? store.getters.messageUpdate[e.contextId] : 0
        }) : '';
        store.commit('SET_MESSAGE_UPDATE', MessageList);
      }).
      on('disconnect', (data) => {
        console.log(data, "连接断开");
        this.rendered = false
      }).
      on('chat_end', function(data) { // 用户挂断事件
        socket._newChat = true;
        store.commit('SET_AGENT', {
          tenantId: store.getters.curAgent.tenantId,
          contextId: '',
          status: 0
        })
        console.log(data, 'chat_end')
        if (data.satisfiedContent) {
          let satisfield = {
            agentId: store.getters.curAgent.tenantId,
            chatType: "AGENT",
            content: "",
            contextId: data.contextId,
            direction: "OUT",
            senderDevice: "43C2F574-616F-4242-B0DA-A",
            senderSeq: "c17e42df-fd6d-c85d-4847-121a6246c52f1559118926984",
            serverSeq: "190529163528000001",
            tenantId: data.tenantId,
            time: data.time,
            type: "SATISFIED",
            userId: store.getters.curUser.userId
          }
          store.commit('APPEND_MESSAGE_LIST', satisfield)
          store.commit('APPEND_LOCAL_MESSAGE', satisfield)
          store.commit('SET_SATISFIED', data.satisfiedContent)
          store.commit('SET_SOCKET_STATUS', { message: `${data.satisfiedMsg}`, show: true })
          socket.chatbot({
            "userId": store.getters.curUser.userId,
            "tenantId": store.getters.curAgent.tenantId,
            "channel": 'APP'
          })
        }
      }).
      on('response', function(data) { // 用户离线事件
        // data.status == 'error' ? store.commit('SET_SOCKET_STATUS', { message: socketMsg[data.code], show: true }) : ''
        data.status == 'error' ? store.commit('SET_SOCKET_STATUS', { message: ((data.msg||data.workTimeMsg) ? (data.msg||data.workTimeMsg) : socketMsg[data.code]), show: true }) : ''
        data.connectSuccessMsg ? store.commit('SET_AGENT', {
          tenantId: data.tenantId,
          contextId: data.contextId,
          status: (data.chatType == 'CHATBOT' ? 0 : 1)
        }) : ''
      }).on('offline', function(data) { // 用户离线事件
        console.log(data, 'offline')
      }).on('chat_new', function(data) { // 监听新用户接入
        console.log(data, 'chat_new')
      }).on('queue_data', function(data) { // 监听新用户接入
        // console.log(data, 'chat_new')
        store.commit('SET_SOCKET_STATUS', { message: data.content, show: true })
      }).on('message', function(data, ack) { // 监听接收消息
        ack.call();
        void(socket._newChat ? (() => {
          store.commit('SET_AGENT', {
            tenantId: data.tenantId,
            contextId: data.contextId,
            status: (data.chatType == 'CHATBOT' ? 0 : 1)
          })
          socket._newChat = false;
        })() : '')
        let MessageList = store.getters.messageUpdate;
        !MessageList[data.contextId] ? MessageList[data.contextId] = 0 : '';
        store.commit('SET_MESSAGE_UPDATE', MessageList)
        if (store.getters.curPath != '/chatPanel' || data.contextId != store.getters.curAgent.contextId) {
          ++MessageList[data.contextId];
          void(store.getters.curPath == '/chatList' ? getContext(store.getters.curUser.userId).then(res => {
            if (res.object.length > 0) {
              let ctxtList = res.object;
              // store.getters.curUser.contextList;
              ctxtList.forEach((e) => {
                e.status == 0 ? e.time = store.getters.curUser.contextList.filter((item, i) => {
                  return item.contextId == e.contextId
                })[0].time : ''
              });
              store.commit('SET_USER', {
                nickname: store.getters.curUser.nickname,
                userId: store.getters.curUser.userId,
                contextList: ctxtList
              });
            }
          }) : '')
        }
        store.commit('SET_MESSAGE_UPDATE', MessageList)
        data.direction=="OUT"&&windowBlur?newMsgCount():'';
        if (store.getters.curAgent.contextId == data.contextId || store.getters.curAgent.tenantId == data.tenantId) {
          store.commit('APPEND_MESSAGE_LIST', data);
          data.chatType == 'CHATBOT' ? store.commit('APPEND_LOCAL_MESSAGE', data) : ''
        }
      }).on('home_data', function(data) { // 监听接收消息
        console.log(data, 'home_data')
      }).on('post_request', function(data) { // 监听首页发布公告
        console.log(data, 'post_request')
      }).on('leave_message', function(data) { // 监听首页发布公告
        console.log(data, 'leave_message')
      }).on('agent_status', function(data) { // 监听坐席状态
        console.log(data, 'agent_status')
      })
      socket.chatbot = (data) => {
        let obj = {
          userId: data.userId,
          tenantId: data.tenantId,
          channel: data.channel
        }
        socket.emit('chatbot', obj, (data) => {
          data.status == 'error' ? store.commit('SET_SOCKET_STATUS', { message: (data.msg ? data.msg : socketMsg[data.code]), show: true }) : ''
          console.log(data, 'resMsg')
        })
      }
      socket.submit = (message) => {
        let obj = {
          contextId: message.contextId,
          type: message.type,
          content: message.content,
          senderSeq: getUuid()
        }
        socket.emit('message', obj, (data) => {
          data.status == 'error' ? store.commit('SET_SOCKET_STATUS', { message: (data.msg ? data.msg : socketMsg[data.code]), show: true }) : ''
          console.log(data, 'resMsg')
        })
      };
      socket.request = (data) => {
        let obj = {
          userId: data.userId,
          tenantId: data.tenantId,
          ip: '192.168.232.2',
          channel: data.channel
        }
        socket.emit('request', obj, (data) => {
          data.status == 'error' ? store.commit('SET_SOCKET_STATUS', { message: (data.msg ? data.msg : socketMsg[data.code]), show: true }) : ''
        })
      };
      socket.chat_end = (data) => {
        let obj = {
          contextId: data.contextId
        }
        socket.emit('chat_end', obj, (data) => {
          console.log(data, 'requestChatend')
        })
      };
      // this.socket.emit('chat_end', {
      //     contextId: currentUser.contextId
      //   }
      // return socket;
      this.socket = socket;
    }

}
