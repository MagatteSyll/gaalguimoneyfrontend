import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Stack from '@mui/material/Stack';
import React ,{useState,useEffect} from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';
import { fr } from "date-fns/locale";
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';





function SdepayMobile({data, handledata,handlesubmit,handledebut,handlefin,handlepaste,handlekeypress}){


return(
 <div className='mobile'>
 <IonGrid>
 <IonRow>
 <IonCol size='10'>
 <IonCard>Logo</IonCard>
 </IonCol>
  <IonCol size='10'>
 <IonCard>Logo SDE</IonCard>
 </IonCol>
 <IonCol size='12'>
 <form className='container' onSubmit={handlesubmit}>
 <IonRow>
 <IonCol size='12'>
 <label className='labmontant'>Numero de la facture<span className='redstyle'> *</span></label>
  <input
  onKeyPress={handlekeypress}
  onPaste={handlepaste}
  name='numero'
  required
  onChange={handledata}
  min="0"
  type='number'
   variant="outlined" />
 </IonCol>
  <IonCol size='12'>
  <label className='labmontant'>Nom complet du client<span className='redstyle'> *</span></label>
  <nput fullWidth id="outlined-basic"
  color="warning"
  variant="outlined"
  name='nom'
  onChange={handledata}
  required
   />
 </IonCol>
  <IonCol size='12'>
  <label className='labmontant'>Montant a payer<span className='redstyle'> *</span></label>
   <input
   onChange={handledata}
     type='number'
     min="1"
     onKeyPress={handlekeypress}
     onPaste={handlepaste}
    onChange={handledata}
    name='montant'
    required
    />
 </IonCol>
  {/*<IonCol size='12'>
  <p className='centerbtn purplestyle'>Periode d utilisation</p>
  <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
      <IonRow>
      <IonCol size='6'>
       <MobileDatePicker
          label="Debut"
          inputFormat="dd/MM/yyyy"
          value={data.debut}
          onChange={handledebut}
          renderInput={(params) => <TextField 
            required
            {...params} 
           color="warning"
          />}
        />
      </IonCol>
      <IonCol size='6'>
      <MobileDatePicker
          label="Fin"
          inputFormat="dd/MM/yyyy"
          value={data.fin}
          onChange={handlefin}
          renderInput={(params) => <TextField
            required
             color="warning"
           {...params} />}
        />
      </IonCol>
      </IonRow>    
      </Stack>
  </LocalizationProvider>
 </IonCol>*/}
 <IonCol size='12'>
  <p className='centerbtn'>
   <Button 
   type="submit"
   variant="contained" 
   color="success"
   variant="contained">
    Payer
  </Button>
  </p>
 </IonCol>
 </IonRow>
 </form>

 </IonCol>
 </IonRow>
 </IonGrid>
  
 </div>
)
}

export default SdepayMobile


