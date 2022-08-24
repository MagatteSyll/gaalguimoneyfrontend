import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'




function ConfirmationEnvoiDirectDesk({transaction,confirmation,annulation,}){


return ( 
 <div className=' desk displayside '>
  <button className='btndrop' onClick={annulation}><ArrowBackIcon/></button>
  <div className='container'>
  <h3> <strong>Confirmation de l envoi </strong></h3>
   <h3> Nature de la transaction  <strong>{transaction.transaction.nature_transaction}</strong>
   </h3>
  <h3> Beneficiaire  <strong>{transaction.receveur.prenom} {transaction.receveur.nom}</strong></h3>
  <h3> Montant a envoyer <strong>{transaction.transaction.somme} CFA</strong></h3>
   <h3>Commission <strong>{transaction.transaction.commission} CFA</strong></h3>
   <p >
   <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confirmer</button></p>
 
  </div>
 </div>

	)
}


export default ConfirmationEnvoiDirectDesk