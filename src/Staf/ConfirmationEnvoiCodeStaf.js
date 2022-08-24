import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import Divider from '@mui/material/Divider';
import logo from '../component/asset/logo.jpg'
import Button from '@mui/material/Button';


function ConfirmationEnvoiCodeStaf(props){
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
  .put('staff/lestransactions/envoyerviacode/',{id:id})
  .then(res=>{
     history.push(`/successviacode/${res.data.id}/${res.data.nature}`)
  })
 } 
const annulation=()=>{
  history.goBack()
}


return(
<div>
{load && transaction.nature_transaction===nature?
<div>
 <button className='btndrop' onClick={annulation}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/>
  <strong>Envoi par code
  </strong></h3>
  </div>
   <div className='centerbtn'> 
    <IonCard className='cardverificationtransaction'>
    <h3> Confirmation de l envoi</h3> 
      </IonCard> 
      <Divider/>
  <h2 className='centerbtn'><strong> Vérification des données</strong></h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nature de la transaction</h3>
 <h2> <strong>{transaction.nature_transaction} </strong></h2>
 </IonCol> 
 <IonCol size='6' className='centerbtn'>
 <h3>Beneficiaire</h3>
 <h2> <strong>{transaction.nom_complet_destinataire}</strong></h2>
 </IonCol>
  <IonCol size='6' className='centerbtn'>
 <h3>Client</h3>
 <h2> <strong>{transaction.nom_complet_client}</strong></h2>
 </IonCol>
  <IonCol size='6' className='centerbtn' >
   <h3> Montant a envoyer </h3>
 <h2> <strong>{transaction.somme} CFA </strong></h2>
 </IonCol>
 <IonCol size='6' className='centerbtn' >
   <h3> Commission </h3>
 <h2> <strong>{transaction.commission} CFA </strong></h2>
 </IonCol>
 {transaction.commission_incluse?
  <IonCol size='6' className='centerbtn' >
   <h3> Monaie au client </h3>
 <h2>{transaction.reste} CFA</h2>
 </IonCol>:
  <IonCol size='6' className='centerbtn' >
   <h3> Total de la transaction </h3>
 <h2> <strong>{transaction.total} CFA </strong></h2>
 </IonCol>}
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

export default ConfirmationEnvoiCodeStaf;