import React,{useEffect, useState} from 'react'
import './subMgt.scss'
import TablePagination from '@material-ui/core/TablePagination'
import {Button} from '@material-ui/core'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';



const useStyles = makeStyles({
    button:{
        width: "30px",
        height: "30px",
    }
  });

const Table = ({filte,search, userProfile}) => {


const dispatch=useDispatch();
const subs = useSelector(state=>state.sub);
console.log(subs);
let ProfileId;


  const classes = useStyles();
    
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [tabhead,setTabhead]=useState(["Name","Mobile","FirmName","Email","ExpiryDate","Action"]);
   const[id,setId]=useState("");
   const[newid,setNewid]=useState("");
//    const[columns,setColumn]=useState([ "ACTIVE", "NEVER ACTIVE", "APPLIED","EXPIRY", "EXPIRED", "RENEWAL"]);
   const[cont,setCont]=useState(0);
   const[newUser,setNewUser] = useState([]);                  
   const[select,setSelected] = useState(false);
   


//    console.log(newUser);
//    ProfileId=newUser[0];
//    console.log(ProfileId.Mobile);
   


  
      let count = 0;
      let usernew = [];

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
      }

    //   const dataPrev =(ne)=>{
    //     profArr(ne);
    //   }
     
  
   console.log(id)
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

   

    useEffect(()=>{
        data(subs,filte);
        // dataPrev(newUser,filte)
    },[filte,subs])



    return (
        <div>
               <table className="table table-striped table-responsive">
                        <thead>
                            <tr>
                            {tabhead.map((item,index)=>(
                                <th scope="col" key={index}>{item}</th>
                            ))}
                            </tr>
                        </thead>
                        <tbody>
                           
                                
                                        {
                                            search(subs).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item,index)=>( <>
                                    <tr key={index} >
                                    <td>{item.Name}</td>
                                   <td>{item.Mobile}</td>
                                   <td>{item.FirmName}</td>
                                   <td>{item.Email}</td>
                                   <td>{item.ExpiryDate==="NA"? `15-06-2021`: `${item.ExpiryDate}`}</td>
                                   <td onClick={()=>setId(item.Mobile)}><Button className={classes.button} variant="contained" color={id===item.Mobile? `red`:`primary`} onClick={userProfile(id)}>{id===item.Mobile? <ArrowForwardIcon/>:"detail"}</Button></td>
                                   </tr>
                                    </>))
                                   
                                           
                                        
                                    }
                               
                            
                        </tbody>
                    </table>
                    <TablePagination className="tablePag"
                        
                        xs={12} md={6} sm={6}
                        rowsPerPageOptions={[5,10,20,30]}
                        component="div"
                        count={ subs.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onChangePage={handleChangePage}
                        onChangeRowsPerPage={handleChangeRowsPerPage}
                    />
                   
        </div>
    )
}

export default Table
