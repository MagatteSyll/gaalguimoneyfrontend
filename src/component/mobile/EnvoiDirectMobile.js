import { IonApp, IonButton, IonCol, IonGrid, IonInput, IonLabel,
IonToast, IonRow,IonAlert,IonIcon,IonCard,IonText } from '@ionic/react'
import axiosInstance from '../../axios';
import  {arrowBackOutline}  from 'ionicons/icons'
import { Link,useHistory } from 'react-router-dom';
import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button'


const  EnvoiDirectMobile =({handlesubmit,handledata,handlepaste, handlekeypress,pays,
    setdata,data,handlephone,retour}) =>{
    
  return (
    <div className='mobile'>
   <IonGrid>
    <IonRow>
    <IonCol size='4'>
    <button className='btndrop' onClick={retour}><ArrowBackIcon className='iconsocial'/></button>
    </IonCol>
    <IonCol size='10' className='centerbtn'>
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
   <p className='centerbtn'> <label ><b>Somme</b> <IonText className='asterix'>*</IonText></label>
    </p>
  <p>
   <input className="w3-input w3-border"  type='number' onChange={handledata} required  
    pattern="[0-9]*" inputmode="numeric"  min="1"
     min="1"
     onPaste={handlepaste}
     onKeyPress={handlekeypress}
     name='sum'/>
  </p>
    <p className='centerbtn'>
     <Button
     type="submit"
     style={{
    color:"white",
    backgroundColor: "#4B0082",}} variant="contained" >
    Soumettre
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


