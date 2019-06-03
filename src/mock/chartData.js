var echarts = require('echarts');
// let data = [{
//   "name": "1",
//   "value": 10
// }, {
//   "name": "2",
//   "value": 10
// }, {
//   "name": "3",
//   "value": 10
// }, {
//   "name": "4",
//   "value": 10
// }, {
//   "name": "5",
//   "value": 10
// }, {
//   "name": "6",
//   "value": 20
// }, {
//   "name": "7",
//   "value": 30
// }, ]
// let bubleData = [
//   [
//     [28604, 77, 17096869, 'Australia', 1990],
//     [31163, 77.4, 27662440, 'Canada', 1990],
//     [1516, 68, 1154605773, 'China', 1990],
//     [13670, 74.7, 10582082, 'Cuba', 1990],
//     [28599, 75, 4986705, 'Finland', 1990],
//     [29476, 77.1, 56943299, 'France', 1990],
//     [31476, 75.4, 78958237, 'Germany', 1990],
//     [28666, 78.1, 254830, 'Iceland', 1990],
//     [1777, 57.7, 870601776, 'India', 1990],
//     [29550, 79.1, 122249285, 'Japan', 1990],
//     [2076, 67.9, 20194354, 'North Korea', 1990],
//     [12087, 72, 42972254, 'South Korea', 1990],
//     [24021, 75.4, 3397534, 'New Zealand', 1990],
//     [43296, 76.8, 4240375, 'Norway', 1990],
//     [10088, 70.8, 38195258, 'Poland', 1990],
//     [19349, 69.6, 147568552, 'Russia', 1990],
//     [10670, 67.3, 53994605, 'Turkey', 1990],
//     [26424, 75.7, 57110117, 'United Kingdom', 1990],
//     [37062, 75.4, 252847810, 'United States', 1990]
//   ],
//   [
//     [44056, 81.8, 23968973, 'Australia', 2015],
//     [43294, 81.7, 35939927, 'Canada', 2015],
//     [13334, 76.9, 1376048943, 'China', 2015],
//     [21291, 78.5, 11389562, 'Cuba', 2015],
//     [38923, 80.8, 5503457, 'Finland', 2015],
//     [37599, 81.9, 64395345, 'France', 2015],
//     [44053, 81.1, 80688545, 'Germany', 2015],
//     [42182, 82.8, 329425, 'Iceland', 2015],
//     [5903, 66.8, 1311050527, 'India', 2015],
//     [36162, 83.5, 126573481, 'Japan', 2015],
//     [1390, 71.4, 25155317, 'North Korea', 2015],
//     [34644, 80.7, 50293439, 'South Korea', 2015],
//     [34186, 80.6, 4528526, 'New Zealand', 2015],
//     [64304, 81.6, 5210967, 'Norway', 2015],
//     [24787, 77.3, 38611794, 'Poland', 2015],
//     [23038, 73.13, 143456918, 'Russia', 2015],
//     [19360, 76.5, 78665830, 'Turkey', 2015],
//     [38225, 81.4, 64715810, 'United Kingdom', 2015],
//     [53354, 79.1, 321773631, 'United States', 2015]
//   ]
// ];
// let charts = {
//   unit: 'Kbps',
//   names: ['出口', '入口'],
//   lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
//   value: [
//     [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
//     [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
//   ]

// }
// var color = ['rgba(23, 255, 243', 'rgba(255,100,97']
// var lineY = []

// // for (var i = 0; i < charts.names.length; i++) {
// //   var x = i
// //   if (x > color.length - 1) {
// //     x = color.length - 1
// //   }

// //   let data = {
// //     name: charts.names[i],
// //     type: 'line',
// //     color: color[x] + ')',
// //     smooth: true,
// //     areaStyle: {
// //       normal: {
// //         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
// //           offset: 0,
// //           color: color[x] + ', 0.3)'
// //         }, {
// //           offset: 0.8,
// //           color: color[x] + ', 0)'
// //         }], false),
// //         shadowColor: 'rgba(0, 0, 0, 0.1)',
// //         shadowBlur: 10
// //       }
// //     },
// //     symbol: 'circle',
// //     symbolSize: 5,
// //     data: charts.value[i]
// //   }
// //   lineY.push(data)
// // }
// lineY = [{
//   name: '出口',
//   type: 'line',
//   smooth: true,
//   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//     offset: 0,
//     color: 'rgb(251, 118, 123)'
//   }, {
//     offset: 1,
//     color: 'rgb(204, 46, 72)'
//   }]),
//   areaStyle: {
//     normal: {
//       shadowBlur: 10,
//       shadowColor: 'rgba(120, 36, 50, 0.5)',
//       shadowOffsetY: 5,
//       color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//         offset: 0,
//         color: 'rgb(251, 118, 123)'
//       }, {
//         offset: 1,
//         color: 'rgb(204, 46, 72)'
//       }])
//     }
//   },
//   symbol: 'circle',
//   symbolSize: 5,
//   data: [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530]
// }, {
//   name: '入口',
//   type: 'line',
//   smooth: true,
//   color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//     offset: 0,
//     color: 'rgb(129, 227, 238)'
//   }, {
//     offset: 1,
//     color: 'rgb(25, 183, 207)'
//   }]),
//   areaStyle: {
//     normal: {
//       shadowBlur: 10,
//       shadowColor: 'rgba(25, 100, 150, 0.5)',
//       shadowOffsetY: 5,
//       color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//         offset: 0,
//         color: 'rgb(129, 227, 238)'
//       }, {
//         offset: 1,
//         color: 'rgb(25, 183, 207)'
//       }])
//     }
//   },
//   symbol: 'circle',
//   symbolSize: 5,
//   data: [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
// }];
// // lineY[0].markLine = {
// //   silent: true,
// //   data: [{
// //     yAxis: 5
// //   }, {
// //     yAxis: 100
// //   }, {
// //     yAxis: 200
// //   }, {
// //     yAxis: 300
// //   }, {
// //     yAxis: 400
// //   }]
// // }
// export default {

//   pieOption: {
//     color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//       offset: 0,
//       color: '#f7f8fa'
//     }, {
//       offset: 1,
//       color: '#cdd0d5'
//     }]),
//     title: {
//       text: 'total',
//       subtext: 7789,
//       textStyle: {
//         color: '#fff',
//         fontSize: 40,
//         // align: 'center'
//       },
//       subtextStyle: {
//         fontSize: 30,
//         color: ['#fff']
//       },
//       x: 'center',
//       y: 'center',
//     },
//     grid: {
//       bottom: 150,
//       left: 100,
//       right: '10%'
//     },
//     legend: {
//       orient: 'vertical',
//       top: "middle",
//       right: "5%",
//       textStyle: {
//         color: '#f2f2f2',
//         fontSize: 25,

//       },
//       icon: 'roundRect',
//       data: data,
//     },
//     series: [
//       // 主要展示层的
//       {
//         radius: ['30%', '61%'],
//         center: ['50%', '50%'],
//         type: 'pie',
//         label: {
//           normal: {
//             show: true,
//             formatter: "{c}%",
//             textStyle: {
//               fontSize: 30,

//             },
//             position: 'outside'
//           },
//           emphasis: {
//             show: true
//           }
//         },
//         labelLine: {
//           normal: {
//             show: true,
//             length: 30,
//             length2: 55
//           },
//           emphasis: {
//             show: true
//           }
//         },
//         name: "民警训练总量",
//         data: data,

//       },
//       // 边框的设置
//       {
//         radius: ['30%', '34%'],
//         center: ['50%', '50%'],
//         type: 'pie',
//         label: {
//           normal: {
//             show: false
//           },
//           emphasis: {
//             show: false
//           }
//         },
//         labelLine: {
//           normal: {
//             show: false
//           },
//           emphasis: {
//             show: false
//           }
//         },
//         animation: false,
//         tooltip: {
//           show: false
//         },
//         data: [{
//           value: 1,
//           itemStyle: {
//             color: "rgba(250,250,250,0.3)",
//           },
//         }],
//       }, {
//         name: '外边框',
//         type: 'pie',
//         clockWise: false, //顺时加载
//         hoverAnimation: false, //鼠标移入变大
//         center: ['50%', '50%'],
//         radius: ['65%', '65%'],
//         label: {
//           normal: {
//             show: false
//           }
//         },
//         data: [{
//           value: 9,
//           name: '',
//           itemStyle: {
//             normal: {
//               borderWidth: 2,
//               borderColor: '#0b5263'
//             }
//           }
//         }]
//       },
//     ]
//   },

//   lineOption: {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//       offset: 0,
//       color: '#f7f8fa'
//     }, {
//       offset: 1,
//       color: '#cdd0d5'
//     }]),
//     tooltip: {
//       trigger: 'axis'
//     },
//     legend: {
//       data: charts.names,
//       textStyle: {
//         fontSize: 12,
//         color: '#fff'
//       },
//       right: '4%'
//     },
//     grid: {
//       top: '14%',
//       left: '4%',
//       right: '4%',
//       bottom: '12%',
//       containLabel: true
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       data: charts.lineX,
//       axisLabel: {
//         textStyle: {
//           // color: 'rgb(0,253,255,0.6)'
//           color: '#fff'
//         },
//         formatter: function(params) {
//           return params.split(' ')[0] + '\n' + params.split(' ')[1]
//         }
//       },
//       splitLine: {
//         lineStyle: {
//           // color: 'rgb(23,255,243,0.3)'
//           color: '#fff'
//         }
//       },
//       axisLine: {
//         lineStyle: {
//           // color: 'rgb(0,253,255,0.6)'
//           color: '#fff'
//         }
//       }
//     },
//     yAxis: {
//       name: charts.unit,
//       type: 'value',
//       axisLabel: {
//         formatter: '{value}',
//         textStyle: {
//           // color: 'rgb(0,253,255,0.6)'
//           color: '#fff'
//         }
//       },
//       splitLine: {
//         lineStyle: {
//           // color: 'rgb(23,255,243,0.3)'
//           color: '#fff'
//         }
//       },
//       axisLine: {
//         lineStyle: {
//           // color: 'rgb(0,253,255,0.6)'
//           color: '#fff'
//         }
//       }
//     },
//     series: lineY
//   },

//   barOption: {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//       offset: 0,
//       color: '#f7f8fa'
//     }, {
//       offset: 1,
//       color: '#cdd0d5'
//     }]),
//     tooltip: {},
//     grid: {
//       top: '5%',
//     },
//     legend: {
//       data: ['威胁值'],
//       right: '10%',
//       top: '5%',
//       textStyle: {
//         color: '#fff',
//         fontSize: 24,
//       }
//     },
//     xAxis: {
//       data: ["swc-sdhgq", "swc-sdh1q", "swc-sdh2gq", "swc-sdhg3", "swc-sdhg4"], //横坐标
//       axisTick: {
//         show: false,
//       },
//       axisLabel: {
//         interval: 0,
//         rotate: 25,
//         textStyle: {
//           color: '#fff',
//           fontSize: 14,
//         }
//       },
//       axisLine: {
//         lineStyle: {
//           type: 'solid',
//           color: '#fff',
//           width: '1  ', //坐标线的宽度

//         }
//       },
//     },
//     yAxis: {
//       splitLine: {
//         show: true,
//         lineStyle: {
//           color: '#40A1EA', //网格横线颜色
//           width: 1,
//           type: 'solid'
//         }
//       },
//       axisLabel: {
//         textStyle: {
//           color: '#fff',
//           fontSize: 24, //坐标值得具体的颜色
//         }
//       },
//       axisLine: {
//         show: false,
//       },
//     },
//     series: [{
//       name: '威胁值',
//       type: 'bar',
//       barWidth: 70,
//       data: [30, 49, 26, 60, 26], //数据
//       itemStyle: {
//         normal: {
//           shadowBlur: 10,
//           shadowColor: 'rgba(25, 100, 150, 0.5)',
//           shadowOffsetY: 5,
//           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//             offset: 0,
//             color: 'rgb(129, 227, 238)'
//           }, {
//             offset: 1,
//             color: 'rgb(25, 183, 207)'
//           }])
//         },
//         // normal: {
//         //   color: new echarts.graphic.LinearGradient(
//         //     0, 0, 0, 1,
//         //     [
//         //       { offset: 0, color: '#06B5D7' }, //柱图渐变色
//         //       { offset: 0.5, color: '#44C0C1' }, //柱图渐变色
//         //       { offset: 1, color: '#71C8B1' }, //柱图渐变色
//         //     ]
//         //   )
//         // },
//         emphasis: {
//           shadowBlur: 10,
//           shadowColor: 'rgba(120, 36, 50, 0.5)',
//           shadowOffsetY: 5,
//           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//             offset: 0,
//             color: 'rgb(251, 118, 123)'
//           }, {
//             offset: 1,
//             color: 'rgb(204, 46, 72)'
//           }])
//         }
//         // emphasis: {
//         //   color: new echarts.graphic.LinearGradient(
//         //     0, 0, 0, 1,
//         //     [
//         //       { offset: 0, color: '#71C8B1' }, //柱图高亮渐变色
//         //       { offset: 0.7, color: '#44C0C1' }, //柱图高亮渐变色
//         //       { offset: 1, color: '#06B5D7' } //柱图高亮渐变色
//         //     ]
//         //   )
//         // }
//       },
//     }]
//   },

//   bubbleOption: {
//     backgroundColor: new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
//       offset: 0,
//       color: '#f7f8fa'
//     }, {
//       offset: 1,
//       color: '#cdd0d5'
//     }]),
//     title: {
//       text: 'Life&GDP'
//     },
//     legend: {
//       right: 10,
//       data: ['1990', '2015']
//     },
//     xAxis: {
//       axisLabel: {
//         textStyle: {
//           // color: 'rgb(0,253,255,0.6)'
//           color: '#fff'
//         }
//       },
//       splitLine: {
//         lineStyle: {
//           type: 'dashed'
//         }
//       }
//     },
//     yAxis: {
//       splitLine: {
//         lineStyle: {
//           type: 'dashed'
//         }
//       },
//       scale: true
//     },
//     series: [{
//       name: '1990',
//       data: bubleData[0],
//       type: 'scatter',
//       symbolSize: function(data) {
//         return Math.sqrt(data[2]) / 5e2;
//       },
//       label: {
//         emphasis: {
//           show: true,
//           formatter: function(param) {
//             return param.data[3];
//           },
//           position: 'top'
//         }
//       },
//       itemStyle: {
//         normal: {
//           shadowBlur: 10,
//           shadowColor: 'rgba(120, 36, 50, 0.5)',
//           shadowOffsetY: 5,
//           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//             offset: 0,
//             color: 'rgb(251, 118, 123)'
//           }, {
//             offset: 1,
//             color: 'rgb(204, 46, 72)'
//           }])
//         }
//       }
//     }, {
//       name: '2015',
//       data: bubleData[1],
//       type: 'scatter',
//       symbolSize: function(data) {
//         return Math.sqrt(data[2]) / 5e2;
//       },
//       label: {
//         emphasis: {
//           show: true,
//           formatter: function(param) {
//             return param.data[3];
//           },
//           position: 'top'
//         }
//       },
//       itemStyle: {
//         normal: {
//           shadowBlur: 10,
//           shadowColor: 'rgba(25, 100, 150, 0.5)',
//           shadowOffsetY: 5,
//           color: new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
//             offset: 0,
//             color: 'rgb(129, 227, 238)'
//           }, {
//             offset: 1,
//             color: 'rgb(25, 183, 207)'
//           }])
//         }
//       }
//     }]
//   }
// }
let data = [{
  "name": "1",
  "value": 10
}, {
  "name": "2",
  "value": 10
}, {
  "name": "3",
  "value": 10
}, {
  "name": "4",
  "value": 10
}, {
  "name": "5",
  "value": 10
}, {
  "name": "6",
  "value": 20
}, {
  "name": "7",
  "value": 30
}, ]
let bubleData = [
  [
    [28604, 77, 17096869, 'Australia', 1990],
    [31163, 77.4, 27662440, 'Canada', 1990],
    [1516, 68, 1154605773, 'China', 1990],
    [13670, 74.7, 10582082, 'Cuba', 1990],
    [28599, 75, 4986705, 'Finland', 1990],
    [29476, 77.1, 56943299, 'France', 1990],
    [31476, 75.4, 78958237, 'Germany', 1990],
    [28666, 78.1, 254830, 'Iceland', 1990],
    [1777, 57.7, 870601776, 'India', 1990],
    [29550, 79.1, 122249285, 'Japan', 1990],
    [2076, 67.9, 20194354, 'North Korea', 1990],
    [12087, 72, 42972254, 'South Korea', 1990],
    [24021, 75.4, 3397534, 'New Zealand', 1990],
    [43296, 76.8, 4240375, 'Norway', 1990],
    [10088, 70.8, 38195258, 'Poland', 1990],
    [19349, 69.6, 147568552, 'Russia', 1990],
    [10670, 67.3, 53994605, 'Turkey', 1990],
    [26424, 75.7, 57110117, 'United Kingdom', 1990],
    [37062, 75.4, 252847810, 'United States', 1990]
  ],
  [
    [44056, 81.8, 23968973, 'Australia', 2015],
    [43294, 81.7, 35939927, 'Canada', 2015],
    [13334, 76.9, 1376048943, 'China', 2015],
    [21291, 78.5, 11389562, 'Cuba', 2015],
    [38923, 80.8, 5503457, 'Finland', 2015],
    [37599, 81.9, 64395345, 'France', 2015],
    [44053, 81.1, 80688545, 'Germany', 2015],
    [42182, 82.8, 329425, 'Iceland', 2015],
    [5903, 66.8, 1311050527, 'India', 2015],
    [36162, 83.5, 126573481, 'Japan', 2015],
    [1390, 71.4, 25155317, 'North Korea', 2015],
    [34644, 80.7, 50293439, 'South Korea', 2015],
    [34186, 80.6, 4528526, 'New Zealand', 2015],
    [64304, 81.6, 5210967, 'Norway', 2015],
    [24787, 77.3, 38611794, 'Poland', 2015],
    [23038, 73.13, 143456918, 'Russia', 2015],
    [19360, 76.5, 78665830, 'Turkey', 2015],
    [38225, 81.4, 64715810, 'United Kingdom', 2015],
    [53354, 79.1, 321773631, 'United States', 2015]
  ]
];
let charts = {
  unit: 'Kbps',
  names: ['出口', '入口'],
  lineX: ['2018-11-11 17:01', '2018-11-11 17:02', '2018-11-11 17:03', '2018-11-11 17:04', '2018-11-11 17:05', '2018-11-11 17:06', '2018-11-11 17:07', '2018-11-11 17:08', '2018-11-11 17:09', '2018-11-11 17:10', '2018-11-11 17:11', '2018-11-11 17:12', '2018-11-11 17:13', '2018-11-11 17:14', '2018-11-11 17:15', '2018-11-11 17:16', '2018-11-11 17:17', '2018-11-11 17:18', '2018-11-11 17:19', '2018-11-11 17:20'],
  value: [
    [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530],
    [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
  ]

}
var color = ['rgba(23, 255, 243', 'rgba(255,100,97']
var lineY = []

// for (var i = 0; i < charts.names.length; i++) {
//   var x = i
//   if (x > color.length - 1) {
//     x = color.length - 1
//   }

//   let data = {
//     name: charts.names[i],
//     type: 'line',
//     color: color[x] + ')',
//     smooth: true,
//     areaStyle: {
//       normal: {
//         color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
//           offset: 0,
//           color: color[x] + ', 0.3)'
//         }, {
//           offset: 0.8,
//           color: color[x] + ', 0)'
//         }], false),
//         shadowColor: 'rgba(0, 0, 0, 0.1)',
//         shadowBlur: 10
//       }
//     },
//     symbol: 'circle',
//     symbolSize: 5,
//     data: charts.value[i]
//   }
//   lineY.push(data)
// }
lineY = [{
  name: '出口',
  type: 'line',
  smooth: true,
  color: '#26c6da'
    // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //   offset: 0,
    //   color: 'rgb(251, 118, 123)'
    // }, {
    //   offset: 1,
    //   color: 'rgb(204, 46, 72)'
    // }])
    ,
  areaStyle: {
    normal: {
      shadowBlur: 10,
      shadowColor: 'rgba(120, 36, 50, 0.5)',
      shadowOffsetY: 5,
      color: '#26c6da'
      // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
      //   offset: 0,
      //   color: 'rgb(251, 118, 123)'
      // }, {
      //   offset: 1,
      //   color: 'rgb(204, 46, 72)'
      // }])
    }
  },
  symbol: 'circle',
  symbolSize: 5,
  data: [451, 352, 303, 534, 95, 236, 217, 328, 159, 151, 231, 192, 453, 524, 165, 236, 527, 328, 129, 530]
}, {
  name: '入口',
  type: 'line',
  smooth: true,
  color: '#1e88e5'
    // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
    //   offset: 0,
    //   color: 'rgb(129, 227, 238)'
    // }, {
    //   offset: 1,
    //   color: 'rgb(25, 183, 207)'
    // }])
    ,
  areaStyle: {
    normal: {
      shadowBlur: 10,
      shadowColor: 'rgba(25, 100, 150, 0.5)',
      shadowOffsetY: 5,
      color: '#1e88e5'
      // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
      //   offset: 0,
      //   color: 'rgb(129, 227, 238)'
      // }, {
      //   offset: 1,
      //   color: 'rgb(25, 183, 207)'
      // }])
    }
  },
  symbol: 'circle',
  symbolSize: 5,
  data: [360, 545, 80, 192, 330, 580, 192, 80, 250, 453, 352, 28, 625, 345, 65, 325, 468, 108, 253, 98]
}];
// lineY[0].markLine = {
//   silent: true,
//   data: [{
//     yAxis: 5
//   }, {
//     yAxis: 100
//   }, {
//     yAxis: 200
//   }, {
//     yAxis: 300
//   }, {
//     yAxis: 400
//   }]
// }
export default {

  pieOption: {
    // color: ['#A0CE3A', '#31C5C0', '#1E9BD1', '#0F347B', '#585247', '#7F6AAD', '#009D85', "rgba(250,250,250,0.3)"],
    color: ['#99abb4', '#cfecfe', '#00897b', '#fc4b6c', '#ffb22b', '#7460ee', '#1e88e5', "#26c6da"],
    backgroundColor: '#fff'
      // new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
      //   offset: 0,
      //   color: '#f7f8fa'
      // }, {
      //   offset: 1,
      //   color: '#cdd0d5'
      // }])
      ,
    title: {
      text: 'total',
      subtext: 7789,
      textStyle: {
        color: '#99abb4',
        fontSize: 40,
        // align: 'center'
      },
      subtextStyle: {
        fontSize: 30,
        color: ['#99abb4']
      },
      x: 'center',
      y: 'center',
    },
    grid: {
      bottom: 150,
      left: 100,
      right: '10%'
    },
    legend: {
      orient: 'vertical',
      top: "middle",
      right: "5%",
      textStyle: {
        color: '#000',
        fontSize: 25,

      },
      icon: 'roundRect',
      data: data,
    },
    series: [
      // 主要展示层的
      {
        radius: ['30%', '61%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: true,
            formatter: "{c}%",
            textStyle: {
              fontSize: 30,

            },
            position: 'outside'
          },
          emphasis: {
            show: true
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 30,
            length2: 55
          },
          emphasis: {
            show: true
          }
        },
        name: "民警训练总量",
        data: data,

      },
      // 边框的设置
      {
        radius: ['30%', '34%'],
        center: ['50%', '50%'],
        type: 'pie',
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        animation: true,
        tooltip: {
          show: false
        },
        data: [{
          value: 1,
          itemStyle: {
            color: "rgba(250,250,250,0.3)",
          },
        }],
      }, {
        name: '外边框',
        type: 'pie',
        clockWise: false, //顺时加载
        hoverAnimation: false, //鼠标移入变大
        center: ['50%', '50%'],
        radius: ['65%', '65%'],
        label: {
          normal: {
            show: false
          }
        },
        data: [{
          value: 9,
          name: '',
          itemStyle: {
            normal: {
              borderWidth: 2,
              borderColor: '#fff'
            }
          }
        }]
      },
    ]
  },

  lineOption: {
    backgroundColor: '#fff'
      // new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
      //   offset: 0,
      //   color: '#f7f8fa'
      // }, {
      //   offset: 1,
      //   color: '#cdd0d5'
      // }])
      ,
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: charts.names,
      textStyle: {
        fontSize: 12,
        color: '#99abb4'
      },
      right: '4%'
    },
    grid: {
      top: '14%',
      left: '4%',
      right: '4%',
      bottom: '12%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: charts.lineX,
      axisLabel: {
        textStyle: {
          // color: 'rgb(0,253,255,0.6)'
          color: '#99abb4'
        },
        formatter: function(params) {
          return params.split(' ')[0] + '\n' + params.split(' ')[1]
        }
      },
      splitLine: {
        lineStyle: {
          // color: 'rgb(23,255,243,0.3)'
          color: '#99abb4'
        }
      },
      axisLine: {
        lineStyle: {
          // color: 'rgb(0,253,255,0.6)'
          color: '#99abb4'
        }
      }
    },
    yAxis: {
      name: charts.unit,
      type: 'value',
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          // color: 'rgb(0,253,255,0.6)'
          color: '#99abb4'
        }
      },
      splitLine: {
        lineStyle: {
          // color: 'rgb(23,255,243,0.3)'
          color: '#99abb4',
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          // color: 'rgb(0,253,255,0.6)'
          color: '#99abb4',
          type: 'dashed'
        }
      }
    },
    series: lineY
  },

  barOption: {
    backgroundColor: '#fff'
      // new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
      //   offset: 0,
      //   color: '#f7f8fa'
      // }, {
      //   offset: 1,
      //   color: '#cdd0d5'
      // }])
      ,
    tooltip: {},
    grid: {
      top: '5%',
    },
    legend: {
      data: ['威胁值'],
      right: '10%',
      top: '5%',
      textStyle: {
        color: '#99abb4',
        fontSize: 24,
      }
    },
    xAxis: {
      data: ["swc-sdhgq", "swc-sdh1q", "swc-sdh2gq", "swc-sdhg3", "swc-sdhg4"], //横坐标
      axisTick: {
        show: false,
      },
      axisLabel: {
        interval: 0,
        rotate: 25,
        textStyle: {
          color: '#99abb4',
          fontSize: 14,
        }
      },
      // axisLine: {
      //   lineStyle: {
      //     type: 'solid',
      //     color: '#fff',
      //     width: '1  ', //坐标线的宽度

      //   }
      // },
      axisLine: {
        show: false,
      }
    },
    yAxis: {
      splitLine: {
        show: true,
        lineStyle: {
          color: '#40A1EA', //网格横线颜色
          width: 1,
          type: 'dashed'
        }
      },
      axisLabel: {
        textStyle: {
          color: '#99abb4',
          fontSize: 24, //坐标值得具体的颜色
        }
      },
      axisLine: {
        show: false,
      },
    },
    series: [{
      name: '威胁值',
      type: 'bar',
      barWidth: 70,
      data: [30, 49, 26, 60, 26], //数据
      itemStyle: {
        normal: {
          // shadowBlur: 10,
          // shadowColor: 'rgba(25, 100, 150, 0.5)',
          // shadowOffsetY: 5,
          color: '#cfecfe'
          // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          //   offset: 0,
          //   color: 'rgb(129, 227, 238)'
          // }, {
          //   offset: 1,
          //   color: 'rgb(25, 183, 207)'
          // }])
        },
        // normal: {
        //   color: new echarts.graphic.LinearGradient(
        //     0, 0, 0, 1,
        //     [
        //       { offset: 0, color: '#06B5D7' }, //柱图渐变色
        //       { offset: 0.5, color: '#44C0C1' }, //柱图渐变色
        //       { offset: 1, color: '#71C8B1' }, //柱图渐变色
        //     ]
        //   )
        // },
        emphasis: {
          // shadowBlur: 10,
          // shadowColor: 'rgba(120, 36, 50, 0.5)',
          // shadowOffsetY: 5,
          color: '#26c6da'
          // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          //   offset: 0,
          //   color: 'rgb(251, 118, 123)'
          // }, {
          //   offset: 1,
          //   color: 'rgb(204, 46, 72)'
          // }])
        }
        // emphasis: {
        //   color: new echarts.graphic.LinearGradient(
        //     0, 0, 0, 1,
        //     [
        //       { offset: 0, color: '#71C8B1' }, //柱图高亮渐变色
        //       { offset: 0.7, color: '#44C0C1' }, //柱图高亮渐变色
        //       { offset: 1, color: '#06B5D7' } //柱图高亮渐变色
        //     ]
        //   )
        // }
      },
    }]
  },

  bubbleOption: {
    backgroundColor: '#fff'
      // new echarts.graphic.RadialGradient(0.3, 0.3, 0.8, [{
      //   offset: 0,
      //   color: '#f7f8fa'
      // }, {
      //   offset: 1,
      //   color: '#cdd0d5'
      // }])
      ,
    title: {
      text: 'Life&GDP'
    },
    legend: {
      right: 10,
      data: ['1990', '2015']
    },
    xAxis: {
      axisLabel: {
        textStyle: {
          // color: 'rgb(0,253,255,0.6)'
          color: '#99abb4'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      }
    },
    yAxis: {
      axisLabel: {
        textStyle: {
          // color: 'rgb(0,253,255,0.6)'
          color: '#99abb4'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed'
        }
      },
      scale: true
    },
    series: [{
      name: '1990',
      data: bubleData[0],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          // shadowBlur: 10,
          // shadowColor: 'rgba(120, 36, 50, 0.5)',
          // shadowOffsetY: 5,
          color: '#26c6da'
          // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          //   offset: 0,
          //   color: 'rgb(251, 118, 123)'
          // }, {
          //   offset: 1,
          //   color: 'rgb(204, 46, 72)'
          // }])
        }
      }
    }, {
      name: '2015',
      data: bubleData[1],
      type: 'scatter',
      symbolSize: function(data) {
        return Math.sqrt(data[2]) / 5e2;
      },
      label: {
        emphasis: {
          show: true,
          formatter: function(param) {
            return param.data[3];
          },
          position: 'top'
        }
      },
      itemStyle: {
        normal: {
          // shadowBlur: 10,
          // shadowColor: 'rgba(25, 100, 150, 0.5)',
          // shadowOffsetY: 5,
          color: '#1e88e5'
          // new echarts.graphic.RadialGradient(0.4, 0.3, 1, [{
          //   offset: 0,
          //   color: 'rgb(129, 227, 238)'
          // }, {
          //   offset: 1,
          //   color: 'rgb(25, 183, 207)'
          // }])
        }
      }
    }]
  }
}
