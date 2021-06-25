import React,{useState,useEffect} from 'react'
import Count from './count'
import RetailerGraph from './retailerGraph'
import {Container,Containergraph,PageLoader} from './styles/subscriptionStyles.js'
// import RetailerGraph from './retailerGraph'
import SubscriberAverageValue from './subscriberAverageValue'
import SubscriberUsage from './subscriberUsage'
import SubscriptionUser from './subscriptionUser'
import {useDispatch} from 'react-redux'
import { getData, getSubs } from '../../../actions/analytics/subscription'
import axios from 'axios'
import {baseUrl} from '../../../util.js'
import {useSelector} from 'react-redux'
import Spinner from './loader'
import {ERROR} from '../../../constants/analytics/subscription'
import {CircularProgress} from '@material-ui/core'


const Subscription = ({place,job}) => {
const dispatch = useDispatch();
const loading = useSelector(state => state.subscriberAnalytics)




useEffect(()=>{
    dispatch({type: ERROR});
      dispatch(getData(place,job));
      dispatch(getSubs(place,job));
  
},[place,job])


    return (

        loading.loading? 
        (  
            <PageLoader> <CircularProgress /></PageLoader>
           
        ) :(
       <>
       <Container>
       <Count/>
        <RetailerGraph/>
       <SubscriberUsage/>
       <SubscriberAverageValue/>
       <SubscriptionUser place={place} job={job}/>
       </Container>
       </>
        )
    )
}

export default Subscription
