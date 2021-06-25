import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Graph} from './styles/subscriberUsageStyles'
import {useSelector} from 'react-redux'





const SubscriberAverageValueGraph = () => {
  const DataList =  useSelector(state => state.subscriberAnalytics);
  const week=[];
  const Low=[];
  const Medium=[];
  const High=[];
  const VeryHigh=[];


  DataList.avgValuePerTransactionDataList && DataList.avgValuePerTransactionDataList.map((item,index)=>{
    
    // active.push(item.activeUsers);
    // All.push(item.allUsers);
    Low.push(item.low);
    Medium.push(item.medium);
    High.push(item.high);
    VeryHigh.push(item.veryhigh);
    week.push(`wk${item.wk}`);
  
})


const data = {
  labels:week,
  datasets: [
    {
      label: 'Low User',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#d1d1e0',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Low
    },

    {
      label: 'Medium User',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#4d79ff',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: Medium
    },
    {
      label: 'High User',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#1a53ff',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: High
    },
    {
      label: 'Very High',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#001a66',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: VeryHigh
    }
  ]
};


    return (
       <> 
       <Graph>
           <Bar data={data}  />
       </Graph>
       </>
    )
}

export default SubscriberAverageValueGraph
