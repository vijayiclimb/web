import React from 'react'
import {Bar} from 'react-chartjs-2'
import { Graph} from './styles/subscriberUsageStyles'
import {useSelector} from 'react-redux'
// import {ReactApexChart} from 'apexcharts'


const SubscriberUsageGraph = () => {
  const one=[];
  const two=[];
  const three=[];
  const four=[];
  const five=[];
  const six=[];

  

  const DataList =  useSelector(state => state.subscriberAnalytics);
  // console.log(DataList && DataList.subscriberUsageDataList? DataList.subscriberUsageDataList : 0);
   
  DataList.subscriberUsageDataList && DataList.subscriberUsageDataList.map((item,index)=>{
    console.log(item);
    one.push(item.wk15);
    two.push(item.wk16);
    three.push(item.wk17);
    four.push(item.wk18);
    five.push(item.wk19);
    six.push(item.wk20);
    
    
  })


  

  
const data = {
  labels: ['LOW USER','MEDIUM USER','HIGH USER','INACTIVE USER'],
  datasets: [
    {
      label: 'wk15',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#008080',
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
      data: one
    },

    {
      label: 'wk16',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#009999',
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
      data: two
    },

    {
      label: 'wk17',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#00cccc',
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
      data: three
    },

    {
      label: 'wk18',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#669999',
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
      data: four
    },
    {
      label: 'wk19',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#b3cccc',
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
      data: five
    },
    {
      label: 'wk20',
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#f0f5f5',
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
      data: six
    }
  ]
};


    return (
       <> 
       <Graph>
           <Bar data={data} />
           {/* <ReactApexChart options={data.options} series={data.series} type="bar" height={430} /> */}
       </Graph>
       </>
    )
}

export default SubscriberUsageGraph
