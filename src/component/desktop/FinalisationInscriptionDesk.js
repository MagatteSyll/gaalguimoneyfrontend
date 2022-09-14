import React,{ Fragment, } from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Input from "@material-ui/core/Input";
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'; 
import Container from '@material-ui/core/Container';
import {IonCard,IonText} from '@ionic/react'
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import CarouselLog from '../CarouselLog';
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';






function FinalisationInscriptionDesk({
	handledata,handlesubmit,handlekeypress,handlepaste,classes,showpassword,setshowpassword,
}) {
	

return(
  <div className='desk'>
    <Fragment>
			<div  className="sideconnexion">
			<IonCard className='card'>
            <Container>     
			<CssBaseline />
			<div className={classes.paper}>
            <h3>
           <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
            </h3>
			<Avatar className={classes.avatar}></Avatar>
			<Typography component="h1" variant="h5">
			Donnees personnelles
				</Typography>
			<form   onSubmit={handlesubmit}>
			<p>
			 <label className='centerbtn'><b>Prenom<IonText className="asterix">*</IonText></b></label>
				</p>
				<p>
				 <Input
				className="w3-input w3-border" 
				required
				fullWidth
				id="prenom"
				name="prenom"
				autoComplete="prenom"
				//autoFocus
				placeholder="prenom"
				onChange={handledata}
				/>
				</p>
				<p>
				<label className='centerbtn'><b>Nom<IonText className="asterix">*</IonText></b></label>
					</p>
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
			<p>
			   <label className='centerbtn'><b>Mot de passe(5 chiffres)<IonText className="asterix">*</IonText></b></label>
					</p>
				<p>
				<Input
				className="w3-input w3-border" 
				required
				onPaste={handlepaste}
				onKeyPress={handlekeypress}
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
				<p>
				<label className='centerbtn'><b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b>	
				</label>
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
				placeholder="*********"	/>
					</p>	
					
			<p className='centerbtn'>
			 <Button
			   type="submit"
            style={{
            color:"white",
            backgroundColor: "#4B0082",}} variant="contained" >
           Valider </Button></p>	
			</form>
		</div>
        </Container>
		</IonCard>
		</div> 
		<div className='noflow carousellog'> 
      <CarouselLog/>
      </div>
	   </Fragment> 
  </div>

	)
}

export default FinalisationInscriptionDesk