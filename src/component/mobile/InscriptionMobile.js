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


const  InscriptionMobile = ({handleSubmit,handledata,showpasswordcon,showpassword,
   setshowpasswordcon,setshowpassword,classes,data,handlephone})=> {

    

    return (
      <div className='mobile'>
           <h3 className='mt-3 ml-3'>
           <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
            </h3>
           <Avatar className={classes.avatar}></Avatar>
            <form onSubmit={handleSubmit} >
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
          <p>  <label><b>Numero de telephone valide<IonText className="asterix">*</IonText></b></label></p>
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
            <IonCol  size="10" className="container">
           <p>  <label><b>Mot de passe<IonText className="asterix">*</IonText></b></label></p>
                    <p>
                       <Input
                        className="w3-input w3-border" 
                        required
                        fullWidth
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
               Inscription </Button>
            </p>
              <br/><br/>
              <p> Vous avez deja un compte?<Link className='link logocolor' to='/connexion' variant="body2">
             Se connecter
            </Link></p> 
             </IonCol>
               </IonRow>
               </IonGrid>
               </form>
           <CarouselLog/> 
       </div>
    )
}

export default InscriptionMobile

