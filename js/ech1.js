
function echart01(){
  var myChart1 = echarts.init(document.getElementById('main1'));
  myChart1.showLoading();
var option = {

    // height:1000,
    
    backgroundColor: '',
    title: {
      text: '黑龙江近10年数字产业发展指数',
      textStyle: {
        align: 'center',
        color: '#0C2950',
        fontSize: nowSize(0.6),
      },
      top: '0%',
      left: 'center',
    },
    graphic: [
          {
            type: 'group',
            left: 'center',
            bottom: nowSize(0.2),
            children: [
                  
                {
                    type: 'text',
                    z: 100,
                    left: 'center',
                    top: 'middle',
                    style: {
                        fill: '#0C2950',
                        text: [
                            '数据来源：刘芙嘉,王丰效,张哲.黑龙江省数字经济发展水平综合研究[J].边疆经济与文化,2022(07):4-9.',
                        ].join('\n'),
                        font: 'Microsoft YaHei',
                        fontSize: nowSize(0.3),
                    }
                }
            ]
        }
    ],  
      
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      },
      confine: true,
      padding:nowSize(0.3),
      backgroundColor: '',
      textStyle: {
        height: nowSize(12),
        color: '#0C2950',     // 文字的颜色
        fontStyle: 'normal',    // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体） 
        fontWeight: 'normal',    // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
        fontSize: nowSize(0.5),    // 文字字体大小
        lineHeight: nowSize(0.1),    // 行高 
    },
    formatter:'{b}<br/>{a0}: {c0}<br/>{a1}: {c1}<br/>{a2}: {c2}<br/>{a3}: {c3}<br/>{a4}: {c4}'


    },
    grid: {
      left: '2%',
      right: '4%',
      bottom: '14%',
      top: '16%',
      containLabel: true
    },
    legend: {
      data: ['综合指数', '数字基础设施建设指数', '数字产业化应用指数','产业数字化结合指数','发展环境评价指数'],
      right: '2%',
      top: '5%',
      textStyle: {
        color: "#0C2950",
        fontSize: nowSize(0.5),
      },
      itemWidth: nowSize(0.4),
      itemHeight: nowSize(0.4),
      // itemGap: 35
    },
    xAxis: {
      type: 'category',
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019','2020','2021'],
      axisLine: {
        lineStyle: {
          color: '#0C2950'
  
        }
      },
      axisLabel: {
        // interval: 0,
        // rotate: 40,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: nowSize(0.5)
        }
      },
    },
  
    yAxis: {
      type: 'value',
      max: '11',
      axisLine: {
        show: false,
        lineStyle: {
          color: '#0C2950'
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#0C2950'
        },
        interval: 0
      },
      axisLabel: {
        
      }
    },
    "dataZoom": [{
      "show": true,
      "height": nowSize(0.5),
      "xAxisIndex": [
        0
      ],
      bottom: '8%',
      "start": 10,
      "end": 90,
      handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
      handleSize: '110%',
      handleStyle: {
        color: "#d3dee5",
  
      },
      textStyle: {
        color: "#fff"
      },
      borderColor: "#90979c"
    }, {
      "type": "inside",
      "show": true,
      "height": nowSize(2),
      "start": 1,
      "end": 35
    }],
    series: [{
      name: '综合指数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#fccb05'
          }, {
            offset: 1,
            color: '#f5804d'
          }]),
          barBorderRadius: 12,
        },
      },
      data: [1, 1.2063, 2.5607, 3.7025, 4.1094, 5.8931, 6.2514, 7.3805, 8.2104, 9.0132]
    },
    {
      name: '数字基础设施建设指数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#8bd46e'
          }, {
            offset: 1,
            color: '#09bcb7'
          }]),
          barBorderRadius: 11,
        }
  
      },
      data: [1, 1.3305, 2.3966, 3.5693, 5.5892, 6.7754, 8.2045, 9.9715, 10.2535,11.0265]
    },
    {
      name: '数字产业化应用指数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#248ff7'
          }, {
            offset: 1,
            color: '#6851f1'
          }]),
          barBorderRadius: 11,
        }
      },
      data: [1, 1.1610, 1.2107, 1.2974, 1.3107, 1.9481, 2.1872, 2.7326, 2.9635,3.2546]
    },
    {
      name: '产业数字化结合指数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#ea5a22'
          }, {
            offset: 1,
            color: '#705247'
          }]),
          barBorderRadius: 11,
        }
      },
      data: [1, 1.9280, 1.6073, 2.1067, 1.8188, 2.4128, 2.3518, 2.6466, 3.3652,4.2789]
    },
    {
      name: '发展环境评价指数',
      type: 'bar',
      barWidth: '15%',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
            offset: 0,
            color: '#E021FD'
          }, {
            offset: 1,
            color: '#7416F7'
          }]),
          barBorderRadius: 11,
        }
      },
      data: [1, 1.1954, 1.2910, 1.4346, 1.4514, 1.5025, 1.5249, 1.6966, 1.7035,1.7613]
    }]
  };
  myChart1.hideLoading()
myChart1.setOption(option);

}

echart01();