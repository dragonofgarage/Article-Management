import * as echarts from 'echarts';
import { useEffect, useRef } from 'react';

const Bar = ( {style, xData, yData, title} ) => {
  const domRef = useRef()
  const chartInit = () => {
    const myChart = echarts.init(domRef.current);
    
    myChart.setOption({
      title: {
        text: title
      },
      tooltip: {},
      xAxis: {
        data: xData
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: yData 
        }
      ]
    });
  }

  useEffect(() => {
    chartInit()
  }, [])

  
  return(
    <div ref={domRef} style={style} ></div>
  )
}

export default Bar;