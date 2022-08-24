import React from 'react'
import logo from '../asset/logo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IonCard, IonCol, IonGrid, IonItem, IonRow,IonIcon, IonText ,IonLoading} from '@ionic/react'
import Divider from '@mui/material/Divider';





function SuccesEnvoiCodeMobile({retour,recu}) {
	
return(

 <div className='mobile'>
  <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/> <strong>Transaction effectuée
  </strong></h3></div>
    <div className='centerbtn'> 
    <IonCard className='cardsuccesstransactionmobile'>
    <h3> <DoneOutlineIcon/> Envoi via code  GaalguiMoney</h3> 
    <h3> <strong>{recu.somme} CFA</strong></h3> 
    </IonCard>
     <Divider/>
       <h4> <strong>Informations  sur la transaction </strong></h4>
        <IonGrid>
             <IonRow>
             <IonCol size='12'>
             <h3>Date de l envoi <strong>{new Date(recu.created).toLocaleDateString('en-GB',
             	{hour: '2-digit', minute:'2-digit'})}</strong> </h3>
                 </IonCol>
                 <IonCol size='12'>
                  <h3>Montant envoyé  <strong>{recu.somme} CFA</strong> </h3>
                 </IonCol>
                 <IonCol size='12'>
                  <h3>Code de l envoi <strong>{recu.code} </strong> </h3>
                 </IonCol>
                 <IonCol size='12'>
                  <h3>Commission de l envoi <strong>{recu.commission} CFA</strong></h3>
                 </IonCol>
                 <IonCol size='12'>
                  <h3>Beneficiaire <strong> {recu.Nom_complet_du_receveur} </strong></h3>
                 </IonCol>
             </IonRow>
         </IonGrid>
         <IonCard >
             Signature
         </IonCard >
        </div>
 </div>

)
}

export default SuccesEnvoiCodeMobile