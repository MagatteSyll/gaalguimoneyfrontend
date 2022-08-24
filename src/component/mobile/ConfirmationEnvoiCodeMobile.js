import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function ConfirmationEnvoiCodeMobile({transaction,confirmation,annulation,}) {
	
return (
 <div className='mobile'>
 <button className='btndrop' onClick={annulation}><ArrowBackIcon /></button>
  <h5 className='greenstyle'> <strong> Confirmation de l envoi </strong></h5>
 <h5> Nature de la transaction <strong> {transaction.nature_transaction} </strong></h5>
 <h5> Bénéficiaire <strong> {transaction.nom_complet_destinataire}</strong></h5>
 <h5>Numéro de téléphone du bénéficiaire <strong>{transaction.phone_destinataire}</strong></h5>
 <h5> Montant à  envoyer <strong>{transaction.somme} CFA </strong></h5>
 <h5>Commission <strong> {transaction.commission} CFA</strong> </h5>
  <p>
  <button className='w3-button w3-green w3-margin' onClick={confirmation}>Confirmer</button>
 </p>
 </div>

)
}


export default ConfirmationEnvoiCodeMobile