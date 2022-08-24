import React from 'react'
import logo from '../asset/logo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IonCard, IonCol, IonGrid, IonItem, IonRow,IonIcon, IonText ,IonLoading} from '@ionic/react'
import Divider from '@mui/material/Divider';



function SuccesEnvoiDirectMobile({retour,recu}) {
 
 return (
 <div className='mobile'>
 <div> 
  <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/> <strong>Transaction effectuée
  </strong></h3></div>
   <div className='centerbtn'> 
    <IonCard className='cardsuccesstransactionmobile'>
    <h3><DoneOutlineIcon/> Envoi à un client GaalguiMoney</h3>
     <h3> <strong>{recu.envoi.somme} CFA</strong></h3> 
      </IonCard> 
      <Divider/>
          <h4> <strong>Informations  sur la transaction </strong></h4>
         <IonGrid>
            <IonRow>
           <IonCol size='12'>
          <h4>Date de l envoi <strong>{new Date(recu.envoi.created).toLocaleDateString('en-GB',{hour: '2-digit', minute:'2-digit'})}</strong> </h4>
            </IonCol>
            <IonCol size='12'>
             <h4>Montant envoyé <strong>{recu.envoi.somme} CFA</strong>  </h4>
             </IonCol>
             <IonCol size='12'>
              <h4>Commission de l envoi <strong>{recu.envoi.commission} CFA</strong> </h4>
              </IonCol>
              <IonCol size='12'>
              <h4>Bénéficiaire <strong>{recu.receveur.prenom} {recu.receveur.nom}</strong></h4>
              </IonCol>
              </IonRow>
             </IonGrid>
             <IonCard>
               Signature
             </IonCard>
            </div>
            
        </div>
 </div>

 )
}


export default SuccesEnvoiDirectMobile