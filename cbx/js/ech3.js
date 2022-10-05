function echart03(){

    var myChart3 = echarts.init(document.getElementById('main3'));
    myChart3.showLoading();
    let datas = [
        {month: "2011", nums: 57.3},
     {month: "2012", nums: 63.5},
     {month: "2013", nums: 59.3},
     {month: "2014", nums: 64.1},
     {month: "2015", nums: 64.1},
     {month: "2016", nums: 63.9},
     {month: "2017", nums: 67.3},
     {month: "2018", nums: 67.3},
     {month: "2020", nums: 68.4},
    
        ]
    option = {
      backgroundColor:'',
      
      
      title:{
        text:"辽宁省近10年生态环境指数(EI)变化情况",
         X:'center',
                  left:"15%",
         textStyle: {//主标题文本样式{"fontSize": 18,"fontWeight": "bolder","color": "#333"}
                    fontSize: nowSize(0.6),
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    color:"#0C2950",
                    padding:nowSize(0.5)
                },
      },
              grid: {
                left: "10%",
                right: "10%",
                bottom: "10%",
                top: "10%"
              },
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  // 坐标轴指示器，坐标轴触发有效
                  type: "line" // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              xAxis: {
                type: "category",
                data: datas.map(e => {
                  return e.month;
                }),
                // axisLine: {
                //   show: true //隐藏X轴轴线
                // },
                axisLine: {
                  lineStyle: {
                    color: "#0C2950"
                  }
                },
                splitLine: {
                  //网格线
                  show: true,
                  lineStyle: {
                    color: "#0C2950"
                  },
                  interval:0
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: nowSize(0.5),
                    color: "#0C2950" //X轴文字颜色
                  }
                }
              },
              yAxis: {
                type: "value",
                name:"EI指数",
                min:55,
                max:70,
                nameTextStyle:{
                textAlign:'right',
                  color:"#0C2950",
                  fontSize: nowSize(0.5),
                    width:nowSize(3),
                    lineHeight:nowSize(1)
                },
                
                axisLine: {
                  lineStyle: {
                    color: "#0C2950"
                  }
                },
                axisTick: {
                  show: false
                },
                splitLine: {
                  //网格线
                  show: false
                },
                axisLabel: {
                  show: true,
                  textStyle: {
                    fontSize: nowSize(0.5),
                    color: "#0C2950", //X轴文字颜色
                  }
                }
              },
              series: [
                {
                  data: datas.map(e => {
                    return e.nums;
                  }),
    
                  type: "line",
                  // symbol: "circle", //折线点设置为实心点
                  symbolSize: nowSize(0.3), //折线点的大小
                  itemStyle: {
                    normal: {
                      color: "#00DF4C",
                      width: nowSize(6),
                      lineStyle: {
                        color: "#00DF4C",
                        width: nowSize(0.1)
                      }
                    }
                  }
                }
              ],
              dataZoom: [
                // 前面显示
                {
                  textStyle: false,
                  show: true,
                  startValue: 0, //数据窗口范围的起始数值
                  endValue: 100,
                  fillerColor: "rgba(207, 220, 247,0.3)", //选中背景颜色
                  backgroundColor: "rgba(242, 244, 248,0.3)", //没选中背景颜色
                  height: nowSize(0.6),
                  bottom: nowSize(0.3),
                  left: nowSize(0.4),
                  width: "93%",
                  borderColor: "#314D70",
                  handleIcon:
                    "M-292,322.2c-3.2,0-6.4-0.6-9.3-1.9c-2.9-1.2-5.4-2.9-7.6-5.1s-3.9-4.8-5.1-7.6c-1.3-3-1.9-6.1-1.9-9.3c0-3.2,0.6-6.4,1.9-9.3c1.2-2.9,2.9-5.4,5.1-7.6s4.8-3.9,7.6-5.1c3-1.3,6.1-1.9,9.3-1.9c3.2,0,6.4,0.6,9.3,1.9c2.9,1.2,5.4,2.9,7.6,5.1s3.9,4.8,5.1,7.6c1.3,3,1.9,6.1,1.9,9.3c0,3.2-0.6,6.4-1.9,9.3c-1.2,2.9-2.9,5.4-5.1,7.6s-4.8,3.9-7.6,5.1C-285.6,321.5-288.8,322.2-292,322.2z",
                  handleStyle: {
                    color: "rgb(211,222,229)",
                    shadowBlur: 2,
                  },
                  handleSize: '110%',
                  dataBackground: {
                    lineStyle: {
                      opacity: 0
                    },
                    areaStyle: {
                      opacity: 0
                    }
                  }
                }
              ]
              
            };

            
            myChart3.hideLoading();
            myChart3.setOption(option);
}
echart03();