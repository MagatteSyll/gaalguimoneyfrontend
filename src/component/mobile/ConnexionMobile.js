import {IonCol, IonGrid, IonLabel, IonRow } from '@ionic/react'
import { Link } from 'react-router-dom'
import CarouselLog from '../CarouselLog';
import Input from "@material-ui/core/Input";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';
import React from 'react'
import PhoneInput from 'react-phone-number-input'
import logo from '../asset/logo.jpg'
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
 



const  ConnexionMobile=({handleSubmit,handleChange,showpassword,setshowpassword,classes,data,handlephone})=> {
    return (

       <div className='mobile'> 
       <div className='container'>   
        <h5 className='mt-3'>
    <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
         </h5>
        <Typography className='centerbtn'> <Avatar className={classes.avatar}></Avatar></Typography>
        <Typography component="h1" variant="h5" className='centerbtn'>
                    Se connecter
                </Typography>
          </div>
            <form onSubmit={handleSubmit} className='mt-3' >
            <IonGrid>
            <IonRow >
            <IonCol  size="10" className='container'>
            <p className='centerbtn'><b> Numero de telephone <span className='redstyle'> *</span> </b></p>
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
             <IonCol  size="10" className='container'>
             <p className='centerbtn'> <IonLabel> <b> Mot de passe <span className='redstyle'> *</span></b></IonLabel> </p>
             <Input
             className="w3-input w3-border"
             required
             fullWidth
             autoComplete="current-password"
            onChange={handleChange}
            name="password"
            type={showpassword?'text':'password'}
            placeholder="*********"
            endAdornment={
            <InputAdornment position="end">
            <IconButton
            onClick={()=>setshowpassword(!showpassword)}
        //onMouseDown={handleMouseDownPassword}
         >
         {showpassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
        </InputAdornment>}
            />
          </IonCol> 
            <IonCol size="10" className="container">
            <p className='centerbtn'>
              <Button
                  type="submit"
                    style={{
                  color:"white",
                  backgroundColor: "#4B0082",}} variant="contained" >
                  Se connecter
                 </Button> 
             </p>
             </IonCol>
             </IonRow>
            </IonGrid>
            </form>
            <IonGrid>
               <IonRow >
               <IonCol  size="10" className="container" >
                       <p className='centerbtn'><Link to='/resetpassword' className='link'>Mot de passe oublié?</Link></p>
                   </IonCol>
                   <IonCol  size="10" className="container">
        <p>Vous n avez pas encore de compte?<Link to='/inscription' className='link'>
                       Inscrivez vous</Link></p>
                   </IonCol>
               </IonRow>
           </IonGrid>
           <CarouselLog/>
           
       </div>
    )
}

export default ConnexionMobile

