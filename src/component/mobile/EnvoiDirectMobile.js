import { IonApp, IonButton, IonCol, IonGrid, IonInput, IonLabel,
IonToast, IonRow,IonAlert,IonIcon,IonCard,IonText } from '@ionic/react'
import axiosInstance from '../../axios';
import  {arrowBackOutline}  from 'ionicons/icons'
import { Link,useHistory } from 'react-router-dom';
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button'


const  EnvoiDirectMobile =({handlesubmit,data,handlepaste, handlekeypress,pays
  ,handlephone,retour}) =>{
    
  return (
    <div className='mobile'>
   <IonGrid>
    <IonRow>
    <IonCol size='2'>
    <button className='btndrop' onClick={retour}><ArrowBackIcon /></button>
    </IonCol>
    <IonCol size='10' >
    <strong> Envoi sur un compte GaalguiMoney </strong>
    </IonCol>
    <IonCol size='10' className="container">
    <form  onSubmit={handlesubmit}>
    <div className="w3-section">
     <p className='centerbtn'> <label><b>
    Numero de telephone du beneficiaire <IonText className='asterix'>*</IonText></b></label></p>
     <PhoneInput
    countries={["SN"]}
    defaultCountry="SN"
    addInternationalOption={false}
    className="w3-input  w3-margin"
    value={data.phone}
     name='phone'
    onChange={handlephone}/>
    <p className='centerbtn'>
     <Button
     type="submit"
     style={{
    color:"white",
    backgroundColor: "#4B0082",}} variant="contained" >
    Confirmer
     </Button> 
    </p> 
    </div>
    </form>
    </IonCol>
    </IonRow>
    </IonGrid>
      
    </div>
    )
}

export default EnvoiDirectMobile


