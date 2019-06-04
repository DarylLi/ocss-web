const user = {
  state: {
    admins: ['one', 'two', 'three', 'four'],
    crud: ['one', 'two', 'three', 'four'],
    curUser: localStorage.getItem('curUser') ? JSON.parse(localStorage.getItem('curUser')) : {},
    curAgent: localStorage.getItem('curAgent') ? JSON.parse(localStorage.getItem('curAgent')) : {},
    MessageList: localStorage.getItem('MessageList') ? JSON.parse(localStorage.getItem('MessageList')) : [],
    satisfiedContent: localStorage.getItem('satisfiedContent') ? JSON.parse(localStorage.getItem('satisfiedContent')) : null,
    localMessage: localStorage.getItem('localMessage') ? JSON.parse(localStorage.getItem('localMessage')) : []
  },
  mutations: {
    SET_AGENT (state, value) {
      state.curAgent = value
      localStorage.setItem('curAgent', JSON.stringify(value))
    },
    SET_USER (state, value) {
      state.curUser = value
      localStorage.setItem('curUser', JSON.stringify(value))
    },
    SET_MESSAGE_LIST (state, value) {
      state.MessageList = value
      localStorage.setItem('MessageList', JSON.stringify(state.MessageList))
    },
    APPEND_MESSAGE_LIST (state, value) {
      state.MessageList.push(value)
      localStorage.setItem('MessageList', JSON.stringify(state.MessageList))
    },
    SET_SATISFIED (state, value) {
      state.satisfiedContent = value
      localStorage.setItem('satisfiedContent', JSON.stringify(state.satisfiedContent))
    },
    APPEND_LOCAL_MESSAGE (state, value) {
      state.localMessage.push(value)
      localStorage.setItem('localMessage', JSON.stringify(state.localMessage))
    },
    DELETE_MESSAGE_LIST (state) {
      state.localMessage = []
      localStorage.setItem('localMessage', JSON.stringify(state.localMessage))
    }
  },
  actions: {
    setMessageList ({
      commit
    }, data) {
      commit('SET_MESSAGE_LIST', data)
    }
  }
}
export default user
