import React from 'react'
import logo from '../asset/logo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IonCard, IonCol, IonGrid, IonItem, IonRow,IonIcon, IonText ,IonLoading} from '@ionic/react'
import Divider from '@mui/material/Divider';






function SuccessDirectDesk({retour,recu}){


return(

  <div className='desk'>
 <div> 
  <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/> <strong>Transaction effectuée
  </strong></h3></div>
   <div className='centerbtn'> 
    <IonCard className='cardsuccesstransaction'>
    <h3><DoneOutlineIcon/> Envoi à un client GaalguiMoney</h3>
     <h3> <strong>{recu.envoi.somme} CFA</strong></h3> 
      </IonCard> 
      <Divider/>
             <h4> <strong>Informations  sur la transaction </strong></h4>
             <IonGrid>
                 <IonRow>
                 <IonCol size='5'>
                      <h3>Date de l envoi </h3>
                      <h2><strong>{new Date(recu.envoi.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</strong></h2>
                     </IonCol>
                     <IonCol size='5'>
                      <h3>Montant envoyé </h3>
                      <h2> <strong>{recu.envoi.somme} CFA</strong></h2>
                     </IonCol>
            
                     <IonCol size='5'>
                      <h3>Commission de l envoi</h3>
                      <h2><strong>{recu.envoi.commission} CFA</strong></h2>
                     </IonCol>
                     <IonCol size='5'>
                      <h3>Beneficiaire</h3>
                      <h2><strong>{recu.receveur.prenom} {recu.receveur.nom}</strong></h2>
                     </IonCol>
                 </IonRow>
             </IonGrid>
             <IonCard className='cartsignature'>
                 Signature
             </IonCard>
            </div>
            
        </div>
  </div>
	)
}



export default SuccessDirectDesk