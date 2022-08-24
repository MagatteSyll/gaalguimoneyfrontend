import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';





function ConfirmationEnvoiCodeDesk({transaction,confirmation,annulation,}) {

 return(
  <div className='desk displayside'>
   <button className='btndrop' onClick={annulation}><ArrowBackIcon /></button>
  <h3 className='greenstyle'> <strong> Confirmation de l envoi </strong></h3>
 <h3> Nature de la transaction <strong> {transaction.nature_transaction} </strong></h3>
 <h3> Bénéficiaire <strong> {transaction.nom_complet_destinataire}</strong></h3>
 <h3>Numéro de téléphone du bénéficiaire <strong>{transaction.phone_destinataire}</strong></h3>
 <h3> Montant à  envoyer <strong>{transaction.somme} CFA </strong></h3>
 <h3>Commission <strong> {transaction.commission} CFA</strong> </h3>
  <p>
  <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confirmer</button>
 </p>
  </div>


 )
}

export default ConfirmationEnvoiCodeDesk