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





function  LesEnvois() {
  const [envois,setenvois]=useState([])
  const [load,setload]=useState(false)
  const history=useHistory()
  const  [count,setcount]=useState()
  const  [next,setnext]=useState()
  const  [previous,setprevious]=useState()


 useEffect(()=>{
    getenvois()
 },[])

  const getenvois=()=>{
     axios
  .get('http://127.0.0.1:8000/api/staff/getlesenvois/',
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
   // axiosInstance
    //.get('staff/getlesenvois/')
    .then(res=>{
    console.log(res.data)
    setenvois(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount(Math.ceil((res.data.count)/15))
    setload(true)
    })

  }
const handlerelever=id=>{
  axiosInstance
  .post('staff/releverenvoi/',{id:id})
  .then(res=>{
    getenvois()
  })
}
const retour=()=>{
  history.goBack()
}
const handledisplay=(data)=>{
  const  page=data.selected+1
  axios
  .get(`http://127.0.0.1:8000/api/staff/getlesdepots/?page=${page}`,
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
 // axiosInstance
 // .get(`staff/getlesdepots/?page=${page}`)
  .then(res=>{
    setenvois(res.data.results)
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
  {envois.length>0?
  <div>
   <IonRow>
  <IonCol size='10' className='container'>
  <h4 className='centerbtn'>Les envois directs</h4>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> Client</TableCell>
            <TableCell align="right">Montant(CFA)</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">releve?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {envois.map(e=>
        <TableRow key={e.id}>
       <TableCell component="th" scope="row">{e.envoyeur.prenom} {e.envoyeur.nom}</TableCell>
        <TableCell align="right">{e.somme}</TableCell>
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
  </div>
  :<IonCol size='10'>
  <h3 className='centerbtn'> Aucun nouvel envoi</h3> </IonCol>}
  </IonGrid>
  </div>
  :null}
   </div>

 	)

}

export default LesEnvois