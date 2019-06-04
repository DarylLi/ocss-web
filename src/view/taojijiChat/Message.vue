<template>
  <v-app class="MessagePannel" id="MessagePannel" v-scroll:#MessagePannel="onScroll">
    <v-card class="mx-auto" style="width: 100%;" text-xs-center>
      <!--       <v-toolbar color="#ff6632" cards dark flat>
        <v-card-title class="title font-weight-regular">与{{curAgent.tenantId}}聊天中</v-card-title>
      </v-toolbar> -->
      <v-dialog v-model="dialog">
        <v-card>
          <v-card-text>
            <v-img :src="curImg" style="max-width:800px;margin:auto" :lazy-src="curImg" aspect-ratio="1" class="grey lighten-2">
              <template v-slot:placeholder>
                <v-layout fill-height align-center justify-center ma-0>
                  <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                </v-layout>
              </template>
            </v-img>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-card>
    <v-form v-model="valid">
      <v-container id='msgContainer'>
        <v-flex xs12 sm10 md8>
          <!-- 對話:{{offsetTop}} -->
          {{sorted[0]?formatDate(sorted[0].time):''}}
          <v-card v-if="tasks.length > 0" class='mainPanel'>
            <v-scale-transition class="py-0" group tag="v-list">
              <v-list v-for='(item,index) in sorted' v-bind:key='item.time+index' :class="{'list-complete-item':true,'right-ctxt':item.direction=='IN','left-ctxt':item.direction!='IN'}" v-if='item.type!="SATISFIED"||item.type=="SATISFIED"&&satisfiedContent&&(index==sorted.length-3||index==sorted.length-1)'>
                <!-- <v-btn color="warning">
              Reset Validation
            </v-btn> -->
                <!--                 <img :src="item.direction=='IN'?require('@/assets/in.png'):require('@/assets/out.png')" width="80" class='headerImg'> -->
                <v-img :src="item.direction=='IN'?require('@/assets/in.png'):require('@/assets/out.png')" width="80" class='headerImg' aspect-ratio="1">
                  <template v-slot:placeholder>
                    <v-layout fill-height align-center justify-center ma-0>
                      <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                    </v-layout>
                  </template>
                </v-img>
                <div class='componentCtxt'>
                  <v-list-tile-content>
                    <v-list-tile-title>
                      <span class='time'>{{formatDate(item.time)}}</span>
                      {{item.direction=='IN'?item.userId:item.agentId}}
                    </v-list-tile-title>
                  </v-list-tile-content>
                  <v-card>
                    <!-- <v-card-title class="headline">{{item.direction=='IN'?item.userId:item.agentId}}</v-card-title> -->
                    <v-card-text v-if='item.type=="TEXT"||item.type=="MANUAL"'>
                      {{item.content}}
                    </v-card-text>
                    <v-card-text v-if='item.type=="QA"'>
                      {{JSON.parse(item.content)[0]}}
                    </v-card-text>
                    <v-card-text class="faqCtxt" v-if='item.type=="FAQ"'>
                      <v-list-group sub-group no-action>
                        <template v-slot:activator>
                          <v-list-tile>
                            <v-list-tile-title>常见问题</v-list-tile-title>
                          </v-list-tile>
                        </template>
                        <v-list-tile @click="sendFaq({content:ctxt.faqId})" v-bind:key='ctxt.faqId' v-for='ctxt in JSON.parse(item.content)'>
                          <v-list-tile-title>{{ctxt.chatbotMessage}}</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="request">
                          <v-list-tile-title>咨询人工客服</v-list-tile-title>
                        </v-list-tile>
                      </v-list-group>
                    </v-card-text>
                    <v-card-text v-if='item.type=="IMAGE"'>
                      <!-- <img :src="JSON.parse(item.content).originFile.url" style="max-width:220px;width:100%;"> -->
                      <v-img @click="showImg(JSON.parse(item.content).originFile.url)" :src="JSON.parse(item.content).originFile.url" style="max-width:200px;width:100%;" :lazy-src="JSON.parse(item.content).originFile.url" aspect-ratio="1" class="grey lighten-2">
                        <template v-slot:placeholder>
                          <v-layout fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </template>
                      </v-img>
                    </v-card-text>
                    <v-card-text v-if='item.type=="SATISFIED"&&satisfiedContent'>
                      <div class="text-xs-center">
                        <v-rating v-model="rating" color="rgb(255, 102, 50)"></v-rating>
                        {{parseRate(rating)}}
                        <div class="text-xs-center">
                          <v-btn round color="rgb(255, 102, 50)" @click='getRating(item.contextId)' dark>评分</v-btn>
                        </div>
                      </div>
                    </v-card-text>
                  </v-card>
                </div>
              </v-list>
            </v-scale-transition>
          </v-card>
        </v-flex>
      </v-container>
    </v-form>
    <v-fade-transition>
      <chattingForm v-if='panelShow' @sendMessage='sendMessage' @requestAgent='request' @closeChat='closeChat'></chattingForm>
    </v-fade-transition>
    <v-snackbar v-model="socketStatus.show" :color="'rgb(255, 102, 50)'" right multi-line :timeout="3000">
      {{socketStatus.message}}</v-snackbar>
  </v-app>
</template>
<script>
import { getHistory, addSatisficing } from '@/api'
import chattingForm from '@/components/taojijiChat/chattingForm'
import store from 'store'
import { mapGetters } from 'vuex'
export default {
  props: { socket: null },
  data () {
    return {
      agentid: '',
      nickname: '',
      valid: false,
      offsetTop: 0,
      msgPanel: null,
      msgContainer: null,
      contentHeight: 0,
      containerHeight: 0,
      curPage: 1,
      sorted: [],
      snackbar: false,
      panelShow: false,
      rating: 4,
      dialog: false,
      curImg: '',
      tasks: [{
        done: false,
        text: 'Foobar'
      },
      {
        done: false,
        text: 'Fizzbuzz'
      }
      ],
      loading: false,
      idRules: [
        v => !!v || 'id is required'
      ],
      nameRules: [
        v => !!v || 'Name is required'
      ]
      // socket: null
    }
  },
  components: {
    chattingForm
  },
  destroyed () {
    // this.socket.disconnect()
    store.commit('DELETE_MESSAGE_LIST')
  },
  created () {
    getHistory({ name: this.curUser.userId, curPage: 1, agent: this.curAgent.tenantId }).then(res => {
      let mergedMsg = [...res.object, ...store.getters.localMessage]
      this.sorted = this.$_.sortBy(mergedMsg, function (item) {
        return item.time
      })
      store.commit('SET_MESSAGE_LIST', this.sorted)
      this.msgPanel = document.getElementById('MessagePannel')
      this.$nextTick(() => {
        if (this.msgPanel) this.msgPanel.scrollTo(150, 10)
      })
    })
  },
  mounted () {
    let messageUpdate = store.getters.messageUpdate
    messageUpdate[this.curAgent.contextId] = 0
    store.commit('SET_MESSAGE_UPDATE', messageUpdate)
    setTimeout(() => {
      this.panelShow = true
      void (store.getters.curAgent.status === 0 ? this.requestBot() : '')
    }, 300)
    // this.socket = actionStartChating({
    //   id: this.curUser.userId,
    //   nickname: this.curUser.nickname,
    //   contextId: this.curAgent.contextId
    // });
    // setTimeout(()=>{
    // this.request()
    // },1000);
  },
  computed: {
    ...mapGetters(['curUser', 'curAgent', 'socketStatus', 'satisfiedContent']),
    MessageList () {
      return store.getters.MessageList
    }
  },
  watch: {
    MessageList (val) {
      this.$nextTick(() => {
        this.msgContainer = document.getElementById('msgContainer')
        this.containerHeight = this.msgContainer.offsetHeight
        if (this.msgPanel) this.msgPanel.scrollTo(150, this.containerHeight)
        // this.satisfiedList = this.MessageList.filter((e, i) => {
        //   return e.type = 'SATISFIED'
        // })
        // console.log(this.satisfiedList.length, 'wawawaa')
      })
      // this.satisfiedList = this.MessageList.filter((e, i) => {
      //   return e.type = 'SATISFIED'
      // })
      // console.log(this.satisfiedList.length, 'wawawaa')
    }
  },
  methods: {
    sendMessage (data) {
      let content = {
        'contextId': this.curAgent.contextId,
        'userId': this.curUser.userId,
        'tenantId': this.curAgent.tenantId,
        'type': data.type,
        'content': data.content
      }
      this.socketAgent.socket.submit(content)
      // this.$nextTick(() => {
      //   this.msgContainer = document.getElementById("msgContainer")
      //   this.containerHeight = this.msgContainer.offsetHeight;
      //   this.msgPanel.scrollTo(150, this.containerHeight);
      // })
    },
    request () {
      let data = {
        'userId': this.curUser.userId,
        'tenantId': this.curAgent.tenantId,
        'ip': '192.168.232.2',
        'channel': 'APP'
      }
      this.socketAgent.socket.request(data)
    },
    closeChat () {
      let data = {
        'contextId': this.curAgent.contextId
      }
      this.socketAgent.socket.chat_end(data)
    },
    // updated() {
    //   this.$nextTick(() => {
    //     this.msgContainer = document.getElementById("msgContainer")
    //     this.containerHeight = this.msgContainer.offsetHeight;
    //     this.msgPanel.scrollTo(150, this.containerHeight);
    //   })
    // },
    showImg (src) {
      this.curImg = src
      this.dialog = true
    },
    refreshList (scrollFlag) {
      var scroll = scrollFlag || 'on'
      getHistory({ name: this.curUser.userId, curPage: ++this.curPage, agent: this.curAgent.tenantId }).then(res => {
        let mergedMsg = [...res.object, ...store.getters.localMessage]
        this.sorted.length !== mergedMsg.length ? (() => {
          this.sorted = this.$_.sortBy(mergedMsg, function (item) {
            return item.time
          })
        })() : --this.curPage
        this.loading = false
        // store.commit('SET_MESSAGE_LIST', this.sorted)
        store.dispatch('setMessageList', this.sorted).then(() => {
          this.$nextTick(() => {
            void (scroll === 'on' ? this.msgPanel.scrollTo(150, 10) : '')
          })
        })
        // this.msgPanel = document.getElementById("MessagePannel")
        // this.msgPanel.scrollTo(50, 10)
      })
    },
    parseRate (num) {
      let result = {
        5: this.satisfiedContent[0],
        4: this.satisfiedContent[1],
        3: this.satisfiedContent[2],
        2: this.satisfiedContent[3],
        1: this.satisfiedContent[4]
      }
      return result[num]
    },
    requestBot () {
      this.socketAgent.socket.chatbot({
        'userId': this.curUser.userId,
        'tenantId': this.curAgent.tenantId,
        'channel': 'APP'
      })
    },
    sendFaq (data) {
      let content = {
        'contextId': this.curAgent.contextId,
        'userId': this.curUser.userId,
        'tenantId': this.curAgent.tenantId,
        'type': 'FAQ',
        'content': data.content
      }
      this.socketAgent.socket.submit(content)
    },
    onScroll (e) {
      this.offsetTop = e.target.scrollTop
      this.msgContainer = document.getElementById('msgContainer')
      this.contentHeight = this.msgPanel.offsetHeight - 10
      this.containerHeight = this.msgContainer.offsetHeight
      // console.log(this.loading)
      void (e.target.scrollTop === 0 && !this.loading ? (() => {
        this.loading = true
        // console.log(this.loading)
        this.refreshList()
      })() : '')
      // console.log(e.target.scrollTop, this.contentHeight, this.containerHeight)
    },
    getRating (contextId) {
      let formData = new FormData()
      formData.append('contextId', contextId)
      formData.append('score', this.rating)
      addSatisficing(formData).then(res => {
        store.commit('SET_SOCKET_STATUS', { message: `${this.socketStatus.message}`, show: false })
        setTimeout(() => {
          store.commit('SET_SOCKET_STATUS', { message: `您对本次服务评价为：${this.parseRate(this.rating)}。非常感谢！`, show: true })
          store.commit('SET_SATISFIED', null)
        }, 500)
        this.refreshList('off')
        setTimeout(() => {
          this.rating = 4
        }, 4000)
      })
    }
    // getContext(this.agentid).then(res=>{
    // })
  }
}

</script>
<style lang="scss">
@import "src/styles/mixin.scss";
@import "src/styles/component.scss";

#app {
  .MessagePannel {
    margin-top: 56px;
    margin-bottom: 100px;

    #msgContainer {
      width: 100%;
      max-width: 100%;
      display: flex;
      justify-content: center;
    }

    .componentCtxt {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: calc(100% - 120px);

      .v-card {
        overflow-wrap: break-word;
      }

      .time {
        font-size: 12px;
        color: rgb(51, 51, 51);
        margin-right: 10px;
      }

      .v-list__tile__title {
        color: #000;
        font-size: 14px;
      }
      .faqCtxt{
        .v-list__tile{
          height:35px;
        }
        .v-list__group__header__prepend-icon{
          min-width:15px;
          padding:0px 0 0 0px;
        }
        .v-list__group__items{
          .v-list__tile{
            padding-left:40px;
          }
        }
      }
    }

    .mainPanel {
      box-shadow: none !important;
    }

    width: 100%;
    text-align: -webkit-auto;

    .v-list {
      background: #fafafa;
    }

    .demoPanel {
      .v-list {
        display: block !important;
      }
    }

    .fadeIn-enter-active,
    .fadeIn-leave-active {
      transition: all 1s ease;
    }

    .fadeIn-enter-active,
    .fadeIn-leave {
      opacity: 1;
    }

    .fadeIn-enter,
    .fadeIn-leave-active {
      opacity: 0;
    }

    .application--wrap {
      width: 100%;

      .v-card {
        flex: 1;
      }

      .list-complete-item {
        display: flex !important;
        align-items: flex-end;

        .headerImg {
          border-radius: 50px;
          flex: unset;
        }
      }

      .left-ctxt {
        .v-card:before {
          right: 100%;
          content: '';
          position: absolute;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid #000;
          border-right-color: rgba(0, 0, 0, .12);
        }

        .v-image {
          margin-right: 20px;
        }
      }

      .left-ctxt {
        .v-card:after {
          right: 100%;
          content: '';
          position: absolute;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid #000;
          border-right-color: rgba(255, 255, 255, 0.99);
        }
      }

      .right-ctxt {
        flex-direction: row-reverse;

        .v-card:before {
          transform: rotate(180deg);
          left: 100%;
          content: '';
          position: absolute;
          border-top: 8px solid transparent;
          border-bottom: 8px solid transparent;
          border-right: 8px solid #000;
          border-right-color: rgba(0, 0, 0, .12);
        }

        .v-image {
          margin-left: 20px;
        }
      }

      .right-ctxt .v-card:after {
        transform: rotate(180deg);
        left: 100%;
        content: '';
        position: absolute;
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid #000;
        border-right-color: rgba(255, 255, 255, 0.99);
      }
    }

  }

  .v-list {
    .componentCtxt {
      .v-card:after {
        bottom: 10px;
      }

      .faqCtxt {

        :after,
        :before {
          display: none;
        }
      }

      .v-card:before {
        bottom: 8px;
      }

      .v-list__group__header:hover {
        background: #fff;
      }

      .v-list__group__items {
        .v-list__tile {
          background: #fff;
        }
      }

      .theme--light.v-toolbar {
        .v-list {
          background: #fff;
        }

        .v-list__tile {
          background: #fff;

          .v-list__tile__content {
            background: #fff;
          }
        }
      }
    }
  }
}

</style>
