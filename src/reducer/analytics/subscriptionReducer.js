import {GETANALYTICS,GETSUBS,ERROR, SUCCESS,PROFILEDETAILS, PROFSUCCESS, PROFERROR} from '../../constants/analytics/subscription'

const initialState={
   loading: true,
   profileLoader: true,


    SubscriberStateCount:{},
    weeklyDataList:[],
    increaseDecreasePercent:"",
    avgValuePerTransactionList:{},
    subscriberUsageList:{},
    subscriberUsageDataList:[],
    avgValuePerTransactionDataList:[],

    subscriberFilteredList:[],
    subscriberDetails:{},
}


export default (subscriberAnalytics=initialState,action)=>{
    switch(action.type){
        case GETANALYTICS:
            return {
                ...subscriberAnalytics,
                SubscriberStateCount: action.payload.subscriberStateCount,
                weeklyDataList: action.payload.weeklyDataList, 
                increaseDecreasePercent: action.payload.increase_decrease_Percent,
                avgValuePerTransactionList: action.payload.avgValuePerTransactionList,
                subscriberUsageList: action.payload.subscriberUsageList,
                subscriberUsageDataList:action.payload.subscriberUsageDataList,
                avgValuePerTransactionDataList: action.payload.avgValuePerTransactionDataList   
             }
        case GETSUBS: 
            return{
             ...subscriberAnalytics,
            
             subscriberFilteredList: action.payload.subscriberFilteredList,
             subscriberDetails: action.payload.subscriberDetails,
             profileLoader: false,
            }
        case  ERROR:
            return{
                ...subscriberAnalytics,
                loading: true,
            }
        case  SUCCESS:
                return{
                    ...subscriberAnalytics,
                    loading: false,
                }
        case PROFILEDETAILS: 
                return{
                    ...subscriberAnalytics,
                    subscriberDetails: action.payload.subscriberDetailedList,
                    
                }
        case PROFSUCCESS:
            return{
                ...subscriberAnalytics,
                profileLoader: false,
            }
        case PROFERROR:
            return{
                ...subscriberAnalytics,
                profileLoader: true,
            }
                 
        default:
            return subscriberAnalytics
    }
}