import EqualizerIcon from '@material-ui/icons/Equalizer';
import AirplayIcon from '@material-ui/icons/Airplay';

// import DashboardIcon from '@material-ui/icons/Dashboard';



export const Market = [
    // {  
    //     text: 'DashBoard',
    //     icon:  <DashboardIcon/>,
         
    // },
    {
        text: 'Market',
        icon: <EqualizerIcon/>,
        drop: [
            {
                text: 'Product',
                to: '/productAnalytics',
                
            },
            {
                text: 'Company',
                to: '/companyAnalytics',
               
            },{
                text: 'Category',
                to:'/categoryAnalytics'
            },
    
        ]

    }

]

export const AppPanel = [
    {
        text: 'App Panel',
        icon: <AirplayIcon/>,
        drop: [
            {
                text: "Product Management",
                to:'/promgt'
            },
            {
                text: "Subscription Management",
                to: '/submgt',
            },
            {
                text: "Cancellation Management",
                to: '/cancelMgt'
            },
            {
                 text: "Deals Management",
            },
            {
                 text: "Coupon Management",
            },
            {
                text: "User Management",
            }
        ]
    }
]