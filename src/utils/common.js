import router from '../router';
var echarts = require('echarts');

export default {
  linkUrl(url) {
    // console.log("1111");
    router.push(url)
    // console.log(this)
  },
  renderEcharts(el, options) {
	// let myChart = echarts.init((options.elType?document.getElementsByClassName(el)[0]:document.getElementById(el)));
	let myChart = echarts.init(document.getElementById(el));
    myChart.setOption(options)
  }
}
