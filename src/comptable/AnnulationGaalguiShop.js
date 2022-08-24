import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useHistory} from 'react-router-dom'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import Switch from '@mui/material/Switch';
import axiosInstance from '../axios'
import Divider from '@mui/material/Divider';
import Pagination from '../component/Pagination'
import axios from 'axios'
import logo from '../component/asset/logo.jpg'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ReactPaginate from 'react-paginate';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';






//refaire

function  AnnulationGaalguiShop() {
  const [achat,setachat]=useState([])
  const [load,setload]=useState(false)
  const  history=useHistory()
  const  [count,setcount]=useState()
  const  [next,setnext]=useState()
  const  [previous,setprevious]=useState()


 useEffect(()=>{
    getachat()
 },[])

  const getachat=()=>{
     axios
  .get('http://127.0.0.1:8000/api/staff/getlesannulationsgaalguishop',
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
   // axiosInstance
    //.get('staff/getlesannulationsgaalguishop/')
    .then(res=>{
      setachat(res.data.results)
      setnext(res.data.next)
      setprevious(res.data.previous)
      setcount(Math.ceil((res.data.count)/15))
      setload(true)
      //console.log(res.data)
    })

  }
const handlerelever=id=>{
  axiosInstance
  .post('staff/releveannulationgaalguishop/',{id:id})
  .then(res=>{
    getachat()
  })
}
const retour=()=>{
  history.goBack()
}
const handledisplay=(data)=>{
  const  page=data.selected+1
  axios
  .get(`http://127.0.0.1:8000/api/staff/getlespayementsgaalguishop/?page=${page}`,
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
 // axiosInstance
 // .get(`staff/getlespayementsgaalguishop/?page=${page}`)
  .then(res=>{
    setachat(res.data.results)
    setachat(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount(Math.ceil((res.data.count)/15))
      
   })
}   
	

 return(
   <div>
   {load?
    <div> 
    <h2> <button className='btndrop mr-4' onClick={retour}> <ArrowBackIcon/> </button>
  <img src={logo} className='logoimgdesk logomargin'/> <strong>GaalguiMoney</strong></h2> 
  <IonGrid>
  {achat.length>0?
  <div>
  <IonRow>
  <IonCol size='10' className='container'>
  <h4 className='centerbtn'>Les annultations  GaalguiShop</h4>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell  scope="row"> Client</TableCell>
            <TableCell align="right" scope="row">Prix(CFA)</TableCell>
            <TableCell align="right" scope="row">Livraison(CFA)</TableCell>
            <TableCell align="right" scope="row">Date</TableCell>
             <TableCell align="right" scope="row">Point D acces</TableCell>
            <TableCell align="right" scope="row">releve?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {achat.map(e=>
        <TableRow key={e.id}>
        <TableCell component="th" scope="row">{e.user.prenom} {e.user.nom}</TableCell>
       <TableCell align="right">{e.livraison}</TableCell>
       <TableCell align="right"> {e.commission}</TableCell>
        <TableCell align="right">{new Date(e.created).toLocaleDateString('en-GB',
        {hour: '2-digit', minute:'2-digit'})}</TableCell>
       <TableCell align='right'> <Switch  
       checked={!e.relever}
       onChange={()=>handlerelever(e.id)}
        color="warning" /></TableCell>
        </TableRow> )}  
        </TableBody>
      </Table>
    </TableContainer>
  </IonCol>
  </IonRow>
  </div>
  :
  <h3 className='centerbtn'> Aucun nouveau payement</h3> }
  </IonGrid>
  </div>
  :null}
   </div>

 	)

}

export default AnnulationGaalguiShop