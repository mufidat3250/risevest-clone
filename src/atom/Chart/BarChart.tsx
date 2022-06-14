import React, { useState } from 'react'
import Chart from "react-apexcharts";

// const BarChart = () => {
//     let initialOption: any = {
//         options:{
//         xaxis:{
//             categories:[1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 1380, 1380, 1380,1380, 1380, 1380, 1380, 1380]
//         },
//         plotOptions:{
//             bar:{
//                 borderRadius:4,
//                 // horizontal:true
//             }
//         }
        
//         },
//         series:[{
//             data:[1380, 1380, 1380,1380, 1380, 1380, 1380, 1380,]
//         }]
//     }
//   return (
//     <div>
//         <Chart  type='bar' options={initialOption.options} series={initialOption.series}/>
//     </div>
//   )
// }

// export default BarChart

const LineChart = () => {

    const initialOption:any = {
  
      series: [{
        data: [30, 100, 135, 65, 180, 360, 562, 435, 530, 710, 375, 175]
      }],
      options: {
        colors: ['#F2994A'],
        chart: {
          chartTopMargin: 70,
          type: 'area',
          height: 350,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
        },
        grid: {
          strokeDashArray: 5,
          padding: {
            top: 25,
            left: 27,
            right: 50
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
  
        xaxis: {
          categories: ['2023', '2026', '2029', "2030", '2032', '2034', '2036', '2038', '2040', '2042', '2044', '2046'],
          axisTicks: {
            show: false
          },
          max: 12.4
        },
  
        yaxis: {
          opposite: false,
          axisBorder: {
            show: true,
            color: '#EDEFF5',
            offsetX: 15,
            offsetY: -5
        },
          labels: {
            formatter: (val: any) => {
              return `${val}`
            }
          },
        },
      },
  
  
    };
  
    const [chartOption, setchartOption] = useState(initialOption)
  
    return (
  
  
      <div>
        <Chart options={chartOption.options} series={chartOption.series} type="area" height={325} />
      </div>
    )
  }
  
  export default LineChart