import React from 'react'
import 'react-toastify/dist/ReactToastify.css';
import { IonText,IonModal,IonIcon, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';




function EnvoiCodeDesk({retour,handledata,handlepaste,handlekeypress,handlephone,data,Confirmation}) {
 
 return(
 <div className='desk displayside'>
  <button className='btndrop'><ArrowBackIcon /></button>
   <IonGrid>
    <IonRow>
    <IonCol size='10'>
    <h3><strong>Envoi via code  GaalguiMoney </strong></h3>
    </IonCol> 
    <IonCol size='8'>
    <IonCard  className='cardenvoi'>
    <form className='container' onSubmit={Confirmation}> 
    <IonRow>   
    <IonCol size='10' className='centerbtn'>
    <p> <strong> <label>Nom complet du beneficiaire</label> <IonText className='asterix'>*</IonText> </strong></p>
    <p> <input className="w3-input w3-border"
     type="text" 
      onChange={handledata} 
      name='nom'
      required /></p>
        </IonCol>
    <IonCol size='10' className='centerbtn'>
         <p> <strong> <label>Numero de telephone du beneficiaire</label>  <IonText className='asterix'>*</IonText> </strong></p>
         <p>
         <PhoneInput
         countries={["SN"]}
         defaultCountry="SN"
         addInternationalOption={false}
         className="w3-input  w3-margin"
        value={data.phone}
        name='phone'
        onChange={handlephone}/>
         </p>
         </IonCol>
         <IonCol size='10' className='centerbtn'>
            <p> <strong><label>Montant à envoyer</label> <IonText className='asterix'>*</IonText> </strong></p>  
             <p>
             <input className="w3-input w3-border"
              min="1"
            type="number" 
            onPaste={handlepaste}
            onKeyPress={handlekeypress}
            onChange={handledata} 
            name='somme'
            required/>
             </p>
            </IonCol>
            <IonCol size='10'className='centerbtn'>
            <Button
             type="submit"
             style={{
             color:"white",
             backgroundColor: "#4B0082",}} variant="contained" >
               Soumettre
              </Button> 
            </IonCol>
            </IonRow>
        </form>
       </IonCard>
    </IonCol>
     </IonRow>
       </IonGrid>
 </div>

  )
}


export default EnvoiCodeDesk