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






function ConfirmationSommeMobile({handlesubmit,handledata,handlepaste, handlekeypress,retour}) {


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
    <IonCol size='10' >
     <FormControl>
    <FormLabel id="demo-radio-buttons-group-label">Commission</FormLabel>
    <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="non inclus"
    name="nature"
    onChange={handledata}>
    <FormControlLabel value="non inclus" control={<Radio />} label="Non incluse" />
    <FormControlLabel value="inclus" control={<Radio />} label="Incluse" />
  </RadioGroup>
</FormControl>
    </IonCol>
    <IonCol size='10' className="container">
    <form  onSubmit={handlesubmit}>
    <div className="w3-section">
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


export default ConfirmationSommeMobile