// import { actionPostUrl, actionPostForm, actionPostJsonData, actionGet, actionPostFormData, actionPostJson, actionPut, actionDelete, actionPostSingle } from './restful'
import { actionPostFormData, actionGet, actionPostSingle, actionPostJson } from './restful'
import moment from 'moment'
/* global __APIHOST__:false */

export function getUserDetail (data) {
  return actionGet('http://192.168.137.1:8080/cboard_war_exploded/commons/getUserDetail.do', data)
}
export function getChartJson (data) {
  return actionGet('examples/data/asset/data/aqi-beijing.json', data)
}
export function postDemo (data) {
  let initData = {
    // approx: false,
    // axis_config: { isNormalize: false, left: [], right: [] },
    // bookmarkid: "1564",
    // by_fields: [],
    // detail_and_rollup: true,
    // filter: {},
    // from_date: "2019-05-15",
    // measures: [{ event_name: "payOrder", aggregator: "SUM", field: "event.payOrder.orderAmount" }],
    // ratio: "n",
    // sampling_factor: 64,
    // tType: "n",
    // to_date: "2019-05-15",
    // unit: "day",
    // use_cache: true
    // axis_config: { isNormalize: false, left: [], right: [] },
    // by_fields: [],
    // dashboard_id: 246,
    // detail_and_rollup: true,
    // filter: {},
    // from_date: "2019-05-15",
    // ignore_cache_expire: true,
    // measures: [{ event_name: "payOrder", aggregator: "SUM", field: "event.payOrder.orderAmount" }],
    // ratio: "n",
    // tType: "n",
    // to_date: "2019-05-15",
    // unit: "day",
    // use_cache: true
  }
  let now = new Date().getTime()
  let requestData = data || initData
  requestData.from_date = moment(now).format('YYYY-MM-DD')
  requestData.to_date = moment(now).format('YYYY-MM-DD')
  return actionPostJson(`http://shence.taojiji.com/api/events/report?token=9921c41f106c545acb7ef1a7a57cba59ac3e5c74ee6358ff6e23c2946ab8929e&project=production&${now}`, requestData)
}
export function postDemoRate (data) {
  let initData = {
    // approx: false,
    // axis_config: { isNormalize: false, left: [], right: [] },
    // bookmarkid: "1564",
    // by_fields: [],
    // detail_and_rollup: true,
    // filter: {},
    // from_date: "2019-05-15",
    // measures: [{ event_name: "payOrder", aggregator: "SUM", field: "event.payOrder.orderAmount" }],
    // ratio: "n",
    // sampling_factor: 64,
    // tType: "n",
    // to_date: "2019-05-15",
    // unit: "day",
    // use_cache: true
    // axis_config: { isNormalize: false, left: [], right: [] },
    // by_fields: [],
    // dashboard_id: 246,
    // detail_and_rollup: true,
    // filter: {},
    // from_date: "2019-05-15",
    // ignore_cache_expire: true,
    // measures: [{ event_name: "payOrder", aggregator: "SUM", field: "event.payOrder.orderAmount" }],
    // ratio: "n",
    // tType: "n",
    // to_date: "2019-05-15",
    // unit: "day",
    // use_cache: true
  }

  let now = new Date().getTime()
  let requestData = data || initData
  requestData.from_date = moment(now).format('YYYY-MM-DD')
  requestData.to_date = moment(now).format('YYYY-MM-DD')
  return actionPostJson(`http://shence.taojiji.com/api/events/compare/report?token=9921c41f106c545acb7ef1a7a57cba59ac3e5c74ee6358ff6e23c2946ab8929e&project=production&${now}`, requestData)
}
export function sqlDemo (data) {
  let now = new Date().getTime()
  return actionPostSingle('https://shence.taojiji.com/api/sql/query?token=80746d2e3dcffaeb59daade2d835c7d738e6fc727b861524b9b913b2a69ad53' + now, data)
}
// commons/getUserDetail.do
export function getContext (data) {
  // let now = new Date().getTime()
  return actionGet(`${__APIHOST__}/context/getContext/${data}`)
}
export function getAgentList (data) {
  // let now = new Date().getTime()
  return actionGet(`${__APIHOST__}/tenant/tenants/1/20?unionId=&shopName=&platformId=${data}`)
}
export function getHistory (data) {
  let now = new Date().getTime()
  return actionGet(`${__APIHOST__}/history/getHistory/${data.name}/${data.agent}/${data.curPage * 10}/${now}`)
}
// /history/getHistory/1145555/lihaotian/20/1558526013090 HTTP/1.1
export function uploadImg (obj) {
  return actionPostFormData(`${__APIHOST__}/upload/webUpload`, obj)
}
// /monitor/index/addSatisficing/
export function addSatisficing (data) {
  return actionPostFormData(`${__APIHOST__}/monitor/index/addSatisficing/`, data)
}
