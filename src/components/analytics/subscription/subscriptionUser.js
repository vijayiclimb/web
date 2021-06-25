import React from 'react'
import {Container,Table,User,Title,SubTitle,TitleContainer,DetailContainer,Button  } from './styles/userstyle'
import Profile from './user'
import {useSelector} from 'react-redux'
import {getProfile} from '../../../actions/analytics/subscription'
import {useDispatch} from 'react-redux'

const SubscriptionUser = ({place,job}) => {
  const Subs = useSelector(state => state.subscriberAnalytics);
   const type="low";
   const dispatch=useDispatch()

const handleClick=()=>{
   dispatch(getProfile(place,job,type));
}

    return (
       <Container id='subscriptionuser'>
       <TitleContainer>  
       <Title>Subscription value per </Title>
       <SubTitle>Low</SubTitle>
      </TitleContainer> 
      
      <DetailContainer>
      <Table>
           <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Mobile</th>
      <th scope="col">Firm Name</th>
      <th scope="col">Address</th>
      <th scope="col">Expiry Date</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
  {Subs.subscriberFilteredList && Subs.subscriberFilteredList.map((item,index)=>(
     <tr key={index}>
     
      <td>{item.name}</td>
      <td>{item.mobile}</td>
      <td>{item.firmName}</td>
      <td>{item.address}</td>
      <td>{item.expiryDate}</td>
      <td><Button onClick={handleClick}>Detail</Button></td>
    </tr>
  ))}
  </tbody>
</table>
</Table>

<User><Profile/></User>

</DetailContainer>
       </Container>
    )
}

export default SubscriptionUser
