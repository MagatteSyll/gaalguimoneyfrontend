import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import Divider from '@mui/material/Divider';
import logo from '../component/asset/logo.jpg'
import Button from '@mui/material/Button';



function ConfirmationRetrait(props){
	let id=props.match.params.id
	let nature=props.match.params.nature
	const [transaction,setransaction]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()

	useEffect(()=>{
      axiosInstance
      .post('staff/gettransaction/',{id:id})
      .then(res=>{
      	setransaction(res.data)
      	setload(true)
      })
	},[])

 const confirmation=()=>{
  axiosInstance
  .put('staff/lestransactions/retirer/',{id:id})
  .then(res=>{
     history.push(`/successretrait/${res.data.id}/${res.data.nature}`)
  })
 } 

 const retour=()=>{
  history.goBack()
 }

return(
  <div>
  {load && transaction.nature_transaction===nature?
  <div>
  <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/>
  <strong>Retrait-client GaalguiMoney
  </strong></h3>
  </div>
   <div className='centerbtn'> 
    <IonCard className='cardverificationtransaction'>
    <h3> Confirmation du retrait</h3>
     <h3> </h3> 
    </IonCard> 
      <Divider/>
  <h2 className='centerbtn'><strong> Vérification des données du client</strong></h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nature de la transaction</h3>
 <h3> <strong>{transaction.nature_transaction}</strong></h3>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Client</h3>
 <h3> <strong>{transaction.user.prenom} {transaction.user.nom} </strong></h3>
 </IonCol>
  <IonCol size='6' className='centerbtn' >
   <h3> Montant à retirer </h3>
 <h3> <strong>{transaction.somme} CFA </strong></h3>
 </IonCol>
  <IonCol size='12' className='centerbtn'>
   <Button
  onClick={confirmation}
  style={{
  color:"white",
  backgroundColor: "#4B0082",}} variant="contained" >
   Confirmer
  </Button> 
 </IonCol>
 </IonRow>
 </IonGrid>

  </div>
  </div>
  :null}
  </div>

);
}


export default ConfirmationRetrait;