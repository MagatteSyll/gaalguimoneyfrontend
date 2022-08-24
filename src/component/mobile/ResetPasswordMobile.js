import {IonCol, IonGrid, IonRow, } from '@ionic/react'; 
import Input from "@material-ui/core/Input";
import Avatar from '@material-ui/core/Avatar';
import CarouselLog from '../CarouselLog';
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import logo from '../asset/logo.jpg'
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input'


function ResetPasswordMobile({classes,handlesubmit,handledata,data,retour }) {
    
 return(
  <div className='mobile'>    
    <div className='container'>   
     <h5 className='mt-3'>
    <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
         </h5>
    <p className='centerbtn'> <Avatar className={classes.avatar}></Avatar></p>
     <Typography component="h1" variant="h5">
          Reinitialisation de mot passe
        </Typography>
        </div>
          <form onSubmit={handlesubmit} className='mt-3' >
            <IonGrid>
            <IonRow >
            <IonCol  size="10" className='container'>
            <p className='centerbtn'><b> Numero de telephone <span className='redstyle'> *</span> </b></p>
             <p> 
              <PhoneInput
              countries={["SN"]}
              defaultCountry="SN"
              addInternationalOption={false}
              className="w3-input w3-border"
              value={data.tel}
              name='phone'
              onChange={handledata}/>
             </p>
            </IonCol>
         <IonCol size="10" className="container">
            <p className='centerbtn'>
             <Button
            type="submit"
            style={{
            color:"white",
            backgroundColor: "#4B0082",}} variant="contained" >
            Valider </Button>
           </p>
             </IonCol>
        <IonCol size="10" className="container">
         </IonCol>
        </IonRow>
        </IonGrid>
        </form>
      <p className='centerbtn'>
         <button className='btndrop' onClick={retour}> <ArrowBackIcon/> retour</button>
         </p>
    <CarouselLog/>
      
  </div>
    )
}

export default ResetPasswordMobile

