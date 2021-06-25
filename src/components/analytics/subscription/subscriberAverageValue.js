import React from 'react'
import { Container, SubscriberUsageContainer,Bar,GraphContainer,CircularContainer,ProgressTitle,TransactionValue,ProgressSubtitle, Title, UsageCards, UsageCard } from './styles/subscriberAverageStyles'
import './styles/subscriberusage.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import {Line} from 'react-chartjs-2'
import SubscriberAverageValueGraph from './subscriberAverageValueGraph';
import {useSelector} from 'react-redux'
import {HashLink as  Link } from 'react-router-hash-link';

const SubscriberAverageValue = () => {

    const AverageCount = useSelector(state => state.subscriberAnalytics)
    console.log(AverageCount.avgValuePerTransactionList);

   
    
    const total= parseInt(AverageCount && AverageCount.avgValuePerTransactionList? AverageCount.avgValuePerTransactionList.low : 0) + parseInt(AverageCount && AverageCount.avgValuePerTransactionList? AverageCount.avgValuePerTransactionList.medium : 0) + parseInt(AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.high: 0) + parseInt(AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.veryhigh:0)
    

     const lowpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.low : 0)/total);
     const mediumpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.medium : 0)/total);
     const highpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.high : 0)/total);
     const veryhighpercent = 100*(parseInt(AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.veryhigh:0)/total);

    //  console.log(lowpercent)
    //  console.log(mediumpercent)
    //  console.log(highpercent)
    //  console.log(veryhighpercent)

     const progress=[
         {value:`${AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.low : 0}`,percent:`${lowpercent}`,title: "Low",transaction: "Less than 3"},
         {value:`${AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.medium: 0}`,percent:`${mediumpercent}`,title: "Medium",transaction: "3 To 6"},
         {value:`${AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.high:0}`,percent:`${highpercent}`,title: "High",transaction: "Greater than 7"},
         {value:`${AverageCount && AverageCount.avgValuePerTransactionList?AverageCount.avgValuePerTransactionList.veryhigh:0}`,percent:`${veryhighpercent}`,title: "Inactive",transaction: "0"},
     ]


     
     


    return (
        <Container>
            <SubscriberUsageContainer>
            <CircularContainer>
                <Title>Subscriber Average Value Transaction</Title>
                <UsageCards>
                {progress.map((item,index)=>(

                    <UsageCard key={index}>
                    <Bar>

       <CircularProgressbar  value={item.percent} text={item.value} styles={buildStyles({
                            rotation: 0,
                            textSize: '26px',
                            pathTransitionDuration: 0.5,
                            pathColor: '#adc2eb',
                            textColor: "#99b3e6",
                            trailColor: '#bfbfbf',
                            backgroundColor: "white",
        
                       

 })
} />


                    </Bar>
                   <ProgressTitle><Link smooth to="#subscriptionuser">{item.title}</Link></ProgressTitle>
                    <ProgressSubtitle>Average Value per Transaction</ProgressSubtitle>
                    <TransactionValue>{item.transaction}</TransactionValue>
                    </UsageCard>
                ))}
                  
                
                </UsageCards>
                </CircularContainer>
                
                <GraphContainer>
          <SubscriberAverageValueGraph/>
        
        </GraphContainer>
                
            </SubscriberUsageContainer>
        </Container>
    )
}

export default SubscriberAverageValue
