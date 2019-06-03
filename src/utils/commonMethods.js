import router from '../router';
import store from 'store';
import moment from 'moment';
var echarts = require('echarts');
const common = {
    methods: {
      linkUrl(url) {
        // console.log("1111");
        router.push(url)
        // console.log(this)
      },
      formatDate(dateTime, fmt = 'YYYY年M月DD日 HH:mm:ss') {
        if (!dateTime) {
          return ''
        }
        moment.locale('zh-CN')
        dateTime = moment(dateTime).format(fmt)
        return dateTime
      },
      parseDate(date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
      activeHref(activeIndex, rootName) {
        store.commit('SET_SELECTED_LINK', [activeIndex])
        // this.selected.push(index)
        // }
        rootName ? this.linkUrl(rootName) : ''
      },
      chooseAgent(data) {
        store.commit('SET_AGENT', {
          tenantId:data.tenantId,
          contextId:data.contextId,
          status:data.status
        })
        // this.selected.push(index)
        // }
        this.linkUrl('/chatPanel');
        }
      }
    }


    export default common
