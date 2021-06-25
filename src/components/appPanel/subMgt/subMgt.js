
import './subMgt.scss'
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import {useDispatch} from 'react-redux'
import Table from './table';
import User from './user'
import {useSelector} from 'react-redux'
import {baseUrl} from '../../../util'





const SubMgt = ({place,job}) => {
  const dispatch = useDispatch();
  const[user,setUser]=useState([]);
  const[checked,setChecked]=useState([]);
  const[checkedItem,setCheckedItem]=useState([]);
  const [subCount, setSubCount]=useState({ All: 0,Applied: 0,Active: 0, Expired: 0, ExpiringSoon: 0, NeverActive: 0,Renewal: 0 });
  const[q,setQ] =useState("");
  
  const [searchColumn,setSearchColumn]=useState(["Name","Mobile"]);
  const[prev,setPrev]=useState("");
  const[solo,setSolo]=useState({});
  const[tabledata,setTabledata]=useState([]);
  const[columns,setColumn]=useState([
    {"id":1,"name": "ACTIVE"},
    {"id":2,"name": "NEVER ACTIVE"},
    {"id":3,"name": "APPLIED"},
    {"id":4,"name": "EXPIRY"},
    {"id":5,"name": "EXPIRED"},
    {"id":6,"name": "RENEWAL"},

]);
const[cont,setCont]=useState(0);
const[newUser,setNewUser] = useState([]);
const h =  useSelector(state => state.sub);



let Id;
let count = 0;
    let usernew = [];

const handleChecked=(value)=>{

    const currentIndex = checked.indexOf(value.id)
    const newChecked = [...checked];
    const newCheckedItem=[...checkedItem];


    if(currentIndex===-1){
        newChecked.push(value.id);
        newCheckedItem.push(value.name);
    }
    else{
        newChecked.splice(currentIndex,1)
        newCheckedItem.splice(currentIndex,1);
    }

    setChecked(newChecked);
    setCheckedItem(newCheckedItem);
   

}

const userprof=(e)=>{
    setPrev(e);
  }

  const paramPlace ={   
    "zone":`${place}`,
    "role":`${job}`                                                                                                                                                                                                                                        
   }
   
//    let headers = new Headers();

//    headers.append('Content-Type', 'application/json');
//    headers.append('Accept', 'application/json');
 
//    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
//    headers.append('Access-Control-Allow-Credentials', 'true');
 
//    headers.append('GET', 'POST', 'OPTIONS');
 
//    headers.append('Authorization', 'Basic ' + base64.encode(username + ":" + password));

  const getSub=async()=>{
        
    await axios.post(`${baseUrl}VitaranSDK/vtrnGetSubscriberList`,paramPlace,{
      headers : {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        }}).then((res) => {

               console.log(res)
            setSubCount({ All: res.data.SubscriberStateCount.All,Applied:  res.data.SubscriberStateCount.Applied,Active: res.data.SubscriberStateCount.Active, Expired: res.data.SubscriberStateCount.Expired, ExpiringSoon: res.data.SubscriberStateCount.ExpiringSoon, NeverActive: res.data.SubscriberStateCount.NeverActive, Renewal: res.data.SubscriberStateCount.Renewal });
        setUser(res.data.userList);
        dispatch({type: 'FETCHSUB', payload:res.data.userList});
        

        
    }).catch(err=>console.log(err.message));

}

const data =(filterdata, check)=>{
    console.log(check[0]);
 for(let i=0;i<filterdata.length;i++){
     for(let j=0;j<check.length;j++){
         if(filterdata[i].SubcriptionStatus===check[j])
            {
               count = count +1;
               usernew.push(filterdata[i]);
               

            }
     }
 }


setNewUser(usernew);

//  ProfileId=usernew[0];
//  console.log(ProfileId.Mobile);

 setCont(count);
 if(usernew && usernew.length){
     dispatch({type: 'FETCHSUB', payload:usernew});
     Id=usernew[0];
     setPrev(Id.Mobile)
 }
 else if(filterdata && filterdata.length){
     dispatch({type: 'FETCHSUB', payload:filterdata});
    Id=filterdata[0];
    setPrev(Id.Mobile);
 }
 }

const solodata=()=>{
    if(prev.length!==0){
        user.map((item)=> item.Mobile===prev? setSolo(item): null)
    }
}

const Searchfilter=(datas)=>{
    return datas.filter((row)=>
                                searchColumn.some(column=>row[column].toString().toLowerCase().indexOf(q.toLowerCase())>-1)
        
     )
}


useEffect(()=>{
    getSub();
    
},[place,job])


useEffect(()=>{
    solodata();
},[prev,checkedItem])


useEffect(()=>{
    data(user,checkedItem);
    
   
},[user,checkedItem,dispatch])



console.log(user);

return(
    <>
    

<div className="subContainer">
        <div className="container-fluid p-0  ">
        <div className="row">

            <div className="col-2 cardCount">
                <div className="cardContent">
                    <h6 className="cardTitle" > Never Active</h6>
                    <div className="cardValue"><h6 className="count">{subCount.NeverActive}</h6></div>
                </div>
            </div>
            <div className="col-2 cardCount"><div className="cardContent" >
                <h6 className="cardTitle"> Active</h6>
                <div className="cardValue"><h6 className="count">{subCount.Active}</h6></div>
            </div>
            </div>
            <div className="col-2 cardCount"><div className="cardContent">
                <h6 className="cardTitle">Applied</h6>
                <div className="cardValue"><h6 className="count">{subCount.Applied}</h6></div>
            </div>
            </div>
            <div className="col-2 cardCount"><div className="cardContent" >
                <h6 className="cardTitle"> Expiring soon</h6>
                <div className="cardValue"><h6 className="count">{subCount.ExpiringSoon}</h6></div>
            </div>
            </div>
            <div className="col-2 cardCount"><div className="cardContent" >
                <h6 className="cardTitle">Expired</h6>
                <div className="cardValue"><h6 className="count">{subCount.Expired}</h6></div>
            </div>
            </div>
            <div className="col-2 cardCount"><div className="cardContent" >
                <h6 className="cardTitle">All</h6>
                <div className="cardValue"><h6 className="count">{subCount.All}</h6></div>
            </div>
            </div>
        </div>

        <div className="filterSection">
            <input type="text" value={q} onChange={(e)=>setQ(e.target.value)} />


            {columns.map((column,index)=><div>
            <input type="checkbox" onChange={()=> handleChecked(column)} key={index}  /><label key={column.id}>{column.name}</label></div>)}
            
        </div>

        <div className="row">
            <div className="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-8  table-wrapper-scroll-y my-custom-scrollbar cardTable">
                  <Table  search={Searchfilter} filte={checkedItem}   userProfile={userprof}/>
                
            </div>
            <div className="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-3 cardUser">
                <div className="userContainer">
                    <User solo={solo} prev={prev}  filter={checkedItem}/>
                   
                </div>
            </div>
        </div>
    </div>
    </div>
      
    
    </>
)

}

export default SubMgt