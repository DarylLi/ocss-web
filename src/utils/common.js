import router from '../router'
var echarts = require('echarts')

export default {
  linkUrl (url) {
    // console.log("1111");
    router.push(url)
    // console.log(this)
  },
  renderEcharts (el, options) {
    var myChart = echarts.init(document.getElementById(el))
    myChart.setOption(options)
  }
}
