import React from 'react'
import {Container,GraphContainer,Graph,Title} from './styles/retailergraphstyles';
import {Line} from 'react-chartjs-2'
import {useSelector} from 'react-redux'

  

const RetailerGraph = () => {

  const weeklydata = useSelector(state => state.subscriberAnalytics)

  // console.log(weeklydata.weeklyDataList)
  const active=[];
  const All=[];
  const week=[];


  weeklydata.weeklyDataList && weeklydata.weeklyDataList.map((item,index)=>{
    
      active.push(item.activeUsers);
      All.push(item.allUsers);
      week.push(`wk${item.wk}`);
    
  })

  

  

  const data = {
    labels: week,
    datasets: [
      {
        label: 'Retailer Count',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
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
        data: All,
        
      },
      {
        label: 'Active Users',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
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
        data: active,
      }
    ]
  };

    return (
        <Container>
        <Title>Retailer Graph</Title>
            <GraphContainer>
                <Graph>
                  <Line data={data}/>
                </Graph>
            </GraphContainer>
        </Container>
    )
}

export default RetailerGraph
