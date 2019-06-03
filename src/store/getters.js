const getters = {
  admins: state => state.user.admins,
  cruds: state => state.user.crud,
  mode: state => state.app.mode,
  sideShow: state => state.app.sideShow,
  list_Active: state => state.app.list_Active,
  curUser: state => state.user.curUser,
  curAgent: state => state.user.curAgent,
  selected_Link: state => state.app.selected_Link,
  selected_Nav: state => state.app.selected_Nav,
  echarts: state => state.app.echarts,
  pageLoaded: state => state.app.pageLoaded,
  MessageList: state => state.user.MessageList,
  curPath: state => state.app.curPath,
  messageUpdate: state => state.app.messageUpdate,
  socketStatus: state => state.app.socketStatus,
  satisfiedContent:state => state.user.satisfiedContent,
  localMessage:state => state.user.localMessage
}
export default getters
