import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios';
import {IonCard, IonGrid, IonRow,IonCol,IonItem,IonText} from '@ionic/react'
import Navigation from './Navigation';
import FootStaf from './FootStaf';
import { useHistory } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import Pagination from '../component/Pagination'
import axios from 'axios'
import logo from '../component/asset/logo.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactPaginate from 'react-paginate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



 
function HistoriqueStaff() {
    const [messages,setmessages]=useState([])
    const  [load, setload] = useState(false)
    const history=useHistory()
    const  [count,setcount]=useState()
    const  [next,setnext]=useState()
    const  [previous,setprevious]=useState()

    useEffect(()=>{ 
    axios
    .get('http://127.0.0.1:8000/api/staff/notifstaff/',
    {headers:{
     'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
   // axiosInstance
   // .get('staff/notifstaff/')
    .then(res=>{
     setmessages(res.data.results)
     setcount(Math.ceil((res.data.count)/15))
     setnext(res.data.next)
     setprevious(res.data.previous)
     setload(true)
    //console.log(res.data)
})
},[])
const retour=()=>{
 history.goBack()
}
const handledisplay=(data)=>{
  const  page=data.selected+1
  axios
  .get(`http://127.0.0.1:8000/api/staff/notifstaff/?page=${page}`,
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
 // axiosInstance
 // .get(`client/message/?page=${page}`)
  .then(res=>{
    setmessages(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount(Math.ceil((res.data.count)/15))
   })
} 
    return (
    <div >
    {load?
    <div>
   <h2> <button className='btndrop mr-4' onClick={retour}> <ArrowBackIcon/> </button>
    <img src={logo} className='logoimgdesk logomargin'/> <strong>GaalguiMoney</strong></h2>
    {messages.length>0?
    <div className="container">
    <h3 className='centerbtn'> <strong>Toutes les transactions </strong></h3>
    {messages.map(m=>
     <div key={m.id}>
        <IonItem>
        <IonText>{m.notification},{new Date(m.created).toLocaleDateString('en-GB',
       {hour: '2-digit', minute:'2-digit'})}</IonText></IonItem>
        <br/>
        <Divider/>
        </div> )}
     </div>
    :<h3 className='redstyle'>Aucune transaction effectuée</h3>}
 <div className='divpagination'>
  {count>1?
<ReactPaginate
  breakLabel="..."
  nextLabel={next!=null && count>4?<ArrowForwardIcon className='logocolor'/>:null}
  marginPagesDisplayed={2}
  containerClassName={"pagination"}
  pageClassName={"page-item paginationsuivant "}
  pageLinkClassName={"page-link"}
  nextClassName={' paginationsuivant'}
  previousClassName={ 'paginationsuivant '}
  breakClassName={'page-item'}
  breakClassNameLink={'page-link'}
  onPageChange={handledisplay}
  pageRangeDisplayed={2}
  pageCount={count}
  previousLabel={previous!=null && count>4?<ArrowBackIcon className='logocolor'/>:null}
  renderOnZeroPageCount={null}
   />:null}
   </div>
   </div>:null}
   </div>
    )
}

export default HistoriqueStaff


