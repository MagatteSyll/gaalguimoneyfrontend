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

 


function InscriptionDesk({handleSubmit,classes,data,handlephone}) {
   
    return (
        <div className='desk '>
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
					S inscrire
				</Typography>
				<form   onSubmit={handleSubmit}>
				<p>
				<label className='centerbtn'><b>Numero de telephone valide<IonText className="asterix">*
				</IonText></b></label>
				</p>
				<p>
				 <PhoneInput
	            countries={["SN"]}
	            defaultCountry="SN"
	            addInternationalOption={false}
	            className="w3-input w3-border"
	            value={data.phone}
	            name='phone'
	            onChange={handlephone}/>
					</p>
					
			<p className='centerbtn'>
			 <Button
			   type="submit"
            style={{
            color:"white",
            backgroundColor: "#4B0082",}} variant="contained" >
           Valider </Button></p>
			<p> Vous avez deja un compte?<Link className='link logocolor' to='/connexion' variant="body2">
			Se connecter
			</Link></p>		
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

export default InscriptionDesk


{
/*
 <label className='centerbtn'><b>Prenom<IonText className="asterix">*</IonText></b></label>
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
					<label className='centerbtn'><b>Nom<IonText className="asterix">*</IonText></b></label>
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
			
	
					<label className='centerbtn'><b>Mot de passe<IonText className="asterix">*</IonText></b></label>
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
					<label className='centerbtn'><b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b>	
					</label>
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
						placeholder="*********"	/>
					</p>


					*/


}