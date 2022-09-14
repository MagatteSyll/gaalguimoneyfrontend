import {IonText,IonGrid, IonRow ,IonCol,} from '@ionic/react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import CarouselLog from '../CarouselLog';
import IconButton from "@material-ui/core/IconButton";
import React from 'react'
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';




function FinalisationInscriptionMobile({handledata,handlesubmit,
	handlekeypress,handlepaste,classes,showpassword,setshowpassword,}) {
	
return (
  <div className='mobile'>
  <h3 className='mt-3 ml-3'>
           <img src={logo} className='logoimglogin'/> <strong> Donnees personnelles</strong>
            </h3>
           <Avatar className={classes.avatar}></Avatar>
            <form onSubmit={handlesubmit} >
            <IonGrid>
            <IonRow >
            <IonCol  size="10" className="container">
            <p><label><b>Prenom<IonText className="asterix">*</IonText></b></label></p>
             <p>
             <Input
             className="w3-input w3-border" 
             required
             fullWidth
             id="prenom"
             name="prenom"
             autoComplete="prenom"
             placeholder="prenom"
             onChange={handledata}
                 />
             </p>
            </IonCol>
             <IonCol  size="10" className="container">
            <p><label><b>Nom<IonText className="asterix">*</IonText></b></label></p>
             <p>
             <Input
             className="w3-input w3-border" 
             required
             fullWidth
             id="nom"
             name="nom"
             autoComplete="nom"
             placeholder="nom"
             onChange={handledata}
             />
            </p>
            </IonCol>


             <IonCol  size="10" className="container">
           <p>  <label><b>Mot de passe(5 chiffres)<IonText className="asterix">*</IonText></b></label></p>
                    <p>
                       <Input
                        className="w3-input w3-border" 
                        required
                        fullWidth
                        onPaste={handlepaste}
				        onKeyPress={handlekeypress}
                        id="password"
                        type={showpassword?'text':'password'}
                        name="password"
                        autoComplete="password"
                        onChange={handledata}
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
                        </p>
            </IonCol>
            <IonCol  size="10" className="container">
            <p> <label><b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b></label>
                </p>
                    <p>
                       <Input
                        className="w3-input w3-border" 
                        required
                        fullWidth
                        onPaste={handlepaste}
				        onKeyPress={handlekeypress}
                        id="password"
                        type='password'
                        name="passwordcon"
                        autoComplete="passwordcon"
                        onChange={handledata}
                        placeholder="*********"/>
                    </p>
             </IonCol>
            <IonCol  size="10" className="container">
             <p className='centerbtn'> 
              <Button
               type="submit"
               style={{
               color:"white",
               backgroundColor: "#4B0082",}} variant="contained" >
               Valider </Button>
            </p>
             
             </IonCol>
               </IonRow>
               </IonGrid>
               </form>
           <CarouselLog/> 
  </div>
	)
}


export default FinalisationInscriptionMobile