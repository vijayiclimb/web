import React from 'react'
import { Container, FirmContainer, Firm, ProfileContainer,Card,Title,WeekCard,UsageCardValue,UsageCardValu,UsageCardTitle,UsageAverageValue,UsageAverageValu,UsageAverageTitle, ProfileImg, DetailList, DetailContainer, DetailsLabel, Details, Icon, Label, LabelValue,WeekContainer,WeekOne,WeekTwo } from './styles/profilestyles'
import Yel from '../../../images/yel.jpg'
import Steve from '../../../images/steve.jpg'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import CallIcon from '@material-ui/icons/Call';
import BusinessIcon from '@material-ui/icons/Business';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useSelector} from 'react-redux'
import {CircularProgress} from '@material-ui/core'

const useStyles = makeStyles({
    icon: {
        width: "30px",
        height: "30px",
        color: "#053E5E",
    }
})


const Profile = () => {

    const Subs = useSelector(state => state.subscriberAnalytics);
  
   console.log(Subs.subscriberDetails);
    const loader = Subs.profileLoader;
    const classes = useStyles();
    return (

        loader? (<Container><CircularProgress /></Container>): (
        <Container>
            <FirmContainer>
                <Firm src={Yel}></Firm>
                <ProfileContainer>
                    <ProfileImg src={Steve}>
                    </ProfileImg>
                </ProfileContainer>
            </FirmContainer>

            <DetailContainer>
                <DetailList>
                    <Details>
                        <DetailsLabel><Icon><AccountCircleIcon className={classes.icon} /></Icon><Label>Name</Label></DetailsLabel>
                        <LabelValue>{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.name : null}</LabelValue>
                    </Details>

                    <Details>
                        <DetailsLabel><Icon><CallIcon className={classes.icon} /></Icon><Label>Mobile</Label></DetailsLabel>
                        <LabelValue>{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.mobile : null}</LabelValue>
                    </Details>

                    <Details>
                        <DetailsLabel><Icon><BusinessIcon className={classes.icon} /></Icon><Label>Firm Name</Label></DetailsLabel>
                        <LabelValue>{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.firmName : null}</LabelValue>
                    </Details>

                    <Details>
                        <DetailsLabel><Icon><LocationOnIcon className={classes.icon} /></Icon><Label>Address</Label></DetailsLabel>
                        <LabelValue>{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.address : null}</LabelValue>
                    </Details>

                    <Details>
                        <DetailsLabel><Icon><CheckCircleIcon className={classes.icon} /></Icon><Label>Subscriber status</Label></DetailsLabel>
                        <LabelValue>{Subs.subscriberDetails && Subs.subscriberDetails? Subs.subscriberDetails.subscriberStatus : null}</LabelValue>
                    </Details>
                </DetailList>
            </DetailContainer>




             <WeekContainer>
                 <WeekOne>
                    <Title>Subscriber Usage</Title>
                    <WeekCard>
                    {Subs.subscriberDetails&& Subs.subscriberDetails.subscriberUsage? Subs.subscriberDetails.subscriberUsage.map((item,index)=>(
                        <Card><UsageCardTitle>W{item.wk}</UsageCardTitle><UsageCardValu>{item.countData}</UsageCardValu></Card>
                    )) : null }
                    
                    {/* <Card><UsageCardTitle>W6</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W5</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W4</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W3</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card>
                    <Card><UsageCardTitle>W2</UsageCardTitle><UsageCardValue>05</UsageCardValue></Card> */}
                    </WeekCard>
                 </WeekOne>
                 <WeekTwo>
                 <Title>Average value per Transaction</Title>
                 <WeekCard>
                 {Subs.subscriberDetails && Subs.subscriberDetails.avgValuePerTransaction? Subs.subscriberDetails.avgValuePerTransaction.map((item,index)=>(
                    <Card><UsageAverageTitle>W{item.wk}</UsageAverageTitle><UsageAverageValu>{item.transactionCount}</UsageAverageValu></Card>
                    )) : null}
                    {/* <Card><UsageAverageTitle>W6</UsageAverageTitle><UsageAverageValue>500</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W5</UsageAverageTitle><UsageAverageValue>600</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W4</UsageAverageTitle><UsageAverageValue>300</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W3</UsageAverageTitle><UsageAverageValue>200</UsageAverageValue></Card>
                    <Card><UsageAverageTitle>W2</UsageAverageTitle><UsageAverageValue>900</UsageAverageValue></Card> */}
                    </WeekCard>
                 </WeekTwo>
             </WeekContainer>



        </Container>
        )
    )
}

export default Profile
