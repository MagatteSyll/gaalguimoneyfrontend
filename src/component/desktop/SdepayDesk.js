import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import Stack from '@mui/material/Stack';
import  React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import CurrencyFrancIcon from '@mui/icons-material/CurrencyFranc';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import { fr } from "date-fns/locale";





 
function SdepayDesk({data, handledata,handlesubmit,handledebut,handlefin,handlepaste,handlekeypress}){
 


return(
   <div className='desk'>
   
   <IonGrid>
   <IonRow>
   <IonCol size='5'>
   <IonCard>Logo</IonCard>
   </IonCol>
   <IonCol size='5'>
   <IonCard>Logo SDE</IonCard>
   </IonCol>
   </IonRow>
   </IonGrid>
   <div className='container'>
   <form className='formpay' onSubmit={handlesubmit}>
  <p> 
  <label className='labmontant'>Numero de la facture<span className='redstyle'> *</span></label>
  <input
  className="w3-input"
  name='numero'
  onKeyPress={handlekeypress}
  onPaste={handlepaste}
  required
  onChange={handledata}
  type='number'
    /></p>
  <p>
   <label className='labmontant'>Nom complet du client<span className='redstyle'> *</span></label>
  <Input fullWidth id="outlined-basic"
  color="warning"
   variant="outlined"
  name='nom'
  onChange={handledata}
  required
   />
  </p>
  <p className='centerbtn'>
  <label className='labmontant'>Montant a payer<span className='redstyle'> *</span></label>
   <input
   className="w3-input "
   onKeyPress={handlekeypress}
   onPaste={handlepaste}
   onChange={handledata}
     type='number'
     min="1"
    onChange={handledata}
    name='montant'
    required
    
    />
  </p>
  {/* <IonGrid>
  <IonRow>
 <IonCol size='10'>
  <p className='centerbtn purplestyle'>Periode d utilisation</p>
  </IonCol>
  <IonCol size='6'>
   <p>
   <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
     <Stack spacing={3}>
     <DesktopDatePicker
     label="Debut"
          inputFormat="MM/dd/yyyy"
          value={data.debut}
          onChange={handledebut}
          renderInput={(params) => <TextField
           required
           color="warning"
           {...params} />}
        />
      </Stack>
   </LocalizationProvider>
   </p>
  </IonCol>
   <IonCol size='6'>
   <p>
    <LocalizationProvider locale={fr} dateAdapter={AdapterDateFns}>
     <Stack spacing={3}>
     <DesktopDatePicker
    label="Fin"
          inputFormat="MM/dd/yyyy"
          value={data.fin}
          onChange={handlefin}
          renderInput={(params) => <TextField 
            required
            color="warning"
            {...params} />}
          color="warning"
        />
      </Stack>
   </LocalizationProvider>
   </p>
  </IonCol>
  </IonRow>
  </IonGrid>*/}
  <p className='centerbtn'>
   <Button 
   type="submit"
   variant="contained" 
   color="success"
   variant="contained">
    Payer
  </Button>
  </p>
   </form>
   </div>
   </div>

	)
}

export default SdepayDesk