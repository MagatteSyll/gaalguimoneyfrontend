import React,{useState,useEffect} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Link} from 'react-router-dom'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import Switch from '@mui/material/Switch';
import axiosInstance from '../axios'




//Pay professionnel

function  LesPayements() {
  const [payement,setpayement]=useState([])
  const [load,setload]=useState(false)


 useEffect(()=>{
    getpayement()
 },[])

  const getpayement=()=>{
    axiosInstance
    .get('staff/getlespayements/')
    .then(res=>{
      setpayement(res.data)
      setload(true)
      //console.log(res.data)
    })

  }
const handlerelever=id=>{
  axiosInstance
  .post('staff/releverpayement/',{id:id})
  .then(res=>{
    getpayement()
  })
}
	

 return(
   <div>
  {load?
    <> 
  <IonGrid>
  <IonRow>
  <IonCol size='6'>
  <IonCard> <Link to ='/accueil'>Logo</Link> </IonCard>
  </IonCol>
  {payement.length>0?
  <IonCol size='10' className='container'>
  <h4 className='centerbtn'>Les payements</h4>
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell scope="row"> Objet</TableCell>
            <TableCell align="right" scope="row"> Client</TableCell>
            <TableCell align="right" scope="row">Montant(CFA)</TableCell>
            <TableCell align="right" scope="row">Date</TableCell>
             <TableCell align="right" scope="row">Point D acces</TableCell>
            <TableCell align="right" scope="row">releve?</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {payement.map(e=>
        <TableRow key={e.id}>
        <TableCell component="th" scope="row">{e.professionnel.nom}</TableCell>
       <TableCell align="right">{e.nom_complet_client}</TableCell>
       <TableCell align="right"> {e.montant}</TableCell>
        <TableCell align="right">{new Date(e.created).toLocaleDateString('en-GB',
        {hour: '2-digit', minute:'2-digit'})}</TableCell>
        {e.employe===null?<TableCell align="right">-</TableCell>:
        <TableCell align="right" >{e.employe.point_acces.region.region},{e.employe.point_acces.adress}
        </TableCell>}
       <TableCell align='right'> <Switch  
       checked={!e.relever}
       onChange={()=>handlerelever(e.id)}
        color="warning" /></TableCell>
        </TableRow> )}  
        </TableBody>
      </Table>
    </TableContainer>
  </IonCol>
  :<IonCol size='10'>
  <h3 className='centerbtn'> Aucun nouveau payement</h3> </IonCol>}
  </IonRow>
  </IonGrid>
  </>
  :null}
   </div>

 	)

}

export default LesPayements