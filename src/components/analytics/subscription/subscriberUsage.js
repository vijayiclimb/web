import React from 'react'
import { Container, SubscriberUsageContainer,Bar,GraphContainer,CircularContainer,ProgressTitle,TransactionValue,ProgressSubtitle, Title, UsageCards, UsageCard } from './styles/subscriberUsageStyles'
import './styles/subscriberusage.scss'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import {Line} from 'react-chartjs-2'
import SubscriberUsageGraph from './subscriberUsageGraph';
import {useSelector} from 'react-redux'
import {HashLink as  Link } from 'react-router-hash-link';

const SubscriberUsage = () => {

    const SubscriberCount = useSelector(state => state.subscriberAnalytics)
    
    const total= parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.low : 0) + parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.medium : 0) + parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.high: 0) + parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.inactive:0);
    
    console.log(total)

    const lowpercent = 100*(parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.low : 0)/total);
    const mediumpercent = 100*(parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.medium: 0)/total);
    const highpercent = 100*(parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.high : 0)/total);
    const veryhighpercent = 100*(parseInt(SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.inactive :0)/total);

    // console.log(lowpercent)
    // console.log(mediumpercent)
    // console.log(highpercent)
    // console.log(veryhighpercent)

    const progress=[
        {value:`${SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.low : 0}`,percent:`${lowpercent}`,title: "Low",transaction: "Less than 3"},
        {value:`${SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.medium: 0}`,percent:`${mediumpercent}`,title: "Medium",transaction: "3 To 6"},
        {value:`${SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.high:0}`,percent:`${highpercent}`,title: "High",transaction: "Greater than 7"},
        {value:`${SubscriberCount && SubscriberCount.subscriberUsageList? SubscriberCount.subscriberUsageList.inactive:0}`,percent:`${veryhighpercent}`,title: "Inactive",transaction: "0"},
    ]



     

    return (
        <Container>
            <SubscriberUsageContainer>
            <CircularContainer>
                <Title>Subscriber Usage</Title>
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
                   <ProgressTitle><Link smooth to='#subscriptionuser'>{item.title}</Link></ProgressTitle>
                  
                    <TransactionValue>{item.transaction}</TransactionValue>
                    </UsageCard>
                ))}
                  
                
                </UsageCards>
                </CircularContainer>
                
                <GraphContainer>
          <SubscriberUsageGraph/>
        
        </GraphContainer>
                
            </SubscriberUsageContainer>
        </Container>
    )
}

export default SubscriberUsage
