import router from '../router'
import store from 'store'
import moment from 'moment'
const common = {
  methods: {
    linkUrl (url) {
      // console.log("1111");
      router.push(url)
      // console.log(this)
    },
    formatDate (dateTime, fmt = 'YYYY年M月DD日 HH:mm:ss') {
      if (!dateTime) {
        return ''
      }
      moment.locale('zh-CN')
      dateTime = moment(dateTime).format(fmt)
      return dateTime
    },
    parseDate (date) {
      if (!date) return null

      const [month, day, year] = date.split('/')
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    },
    activeHref (activeIndex, rootName) {
      store.commit('SET_SELECTED_LINK', [activeIndex])
      // this.selected.push(index)
      // }
      void (rootName ? this.linkUrl(rootName) : '')
    },
    chooseAgent (data) {
      void (this.$_.trim(data.tenantId) !== ''
        ? (() => {
          store.commit('SET_AGENT', {
            tenantId: data.tenantId,
            contextId: data.contextId,
            status: data.status
          })
          this.linkUrl('/chatPanel')
        })()
        : '')
      // this.selected.push(index)
      // }
    }
  }
}
export default common
