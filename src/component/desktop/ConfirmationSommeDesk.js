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






function ConfirmationSommeDesk({handlesubmit,handledata,handlepaste, handlekeypress,retour,user}) {
	

return ( 
   <div className='desk displayside'>
   <IonGrid>
    <IonRow>
    <IonCol size='2'>
    <button className='btndrop' onClick={retour}><ArrowBackIcon /></button>
    </IonCol>
     <IonCol size='6'>
    <h3>
    <strong>Données personnelles du bénéficiaire</strong>
    </h3>
    </IonCol> 
    <IonCol size='8'>
    <h3> Nom complet <strong>{user.prenom} {user.nom}</strong></h3>
    <h3>Numéro de téléphone <strong>{user.phone}</strong></h3>
    </IonCol>
    <IonCol size='8' className='ml-4'>
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
    <IonCol size='6' className='cardenvoi'> 
    <IonCard >
    <form  onSubmit={handlesubmit} className='formenvoi'>
    <div className="w3-section">
    <p className='centerbtn'> <label ><b>Somme à envoyer</b> <IonText className='asterix'>*</IonText></label>
    </p>
    <p> <input className="w3-input w3-border"  type='number' onChange={handledata} required  
    pattern="[0-9]*" inputmode="numeric"  min="5"
     name='sum'
     onPaste={handlepaste}
     onKeyPress={handlekeypress}/>
    </p>
    <p className='centerbtn'>
     <Button
     type="submit"
     style={{
        color:"white",
        backgroundColor: "#4B0082",}} variant="contained" >
        Valider
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


export default ConfirmationSommeDesk