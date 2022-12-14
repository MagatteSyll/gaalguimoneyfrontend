import { IonText,IonModal,IonIcon, IonGrid, IonRow, IonCol, IonCard } from '@ionic/react';
import  {arrowBackOutline}  from 'ionicons/icons'
import React from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TextField from '@mui/material/TextField';
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


function EnvoiDirectDesk({handlesubmit,handlepaste, handlekeypress,pays,handlephone,retour,data}) {
    
    return (
    <div className="desk displayside">
    <IonGrid>
    <IonRow>
    <IonCol size='2'>
    <button className='btndrop' onClick={retour}><ArrowBackIcon /></button>
    </IonCol>
     <IonCol size='6'>
    <h3>
    <strong> Envoi à un client GaalguiMoney </strong>
    </h3>
    </IonCol> 
    <IonCol size='6' className='cardenvoi'> 
    <IonCard >
    <form  onSubmit={handlesubmit} className='formenvoi'>
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
    </IonCard>
    </IonCol>
    </IonRow>
    </IonGrid>
    </div>
       
    )
}

export default EnvoiDirectDesk

/*
 <input className="w3-input w3-border"  type="text" placeholder="+221" onChange={handledata} 
    defaultValue='+221' name='phone'
    required />
    */


