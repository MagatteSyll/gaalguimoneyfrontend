import React,{Fragment} from 'react'
import { IonCard, IonText } from '@ionic/react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input"; 
import CarouselLog from '../CarouselLog';
import logo from '../asset/logo.jpg'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';
  


function ConnexionDesk({handleSubmit,handleChange,showpassword,setshowpassword,classes,data,handlephone}) {
   
    
    return (
        <div className='desk'> 
           <Fragment>
		<div className="sideconnexion">
			<IonCard className='card'>
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
            <h3>
           <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
            </h3>
			<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Se connecter
				</Typography>
				<form className={classes.form} onSubmit={handleSubmit}>
				<p className='centerbtn' ><label><b>Numero de telephone<span className='redstyle'> *</span></b>	
					</label></p>
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
				<p className='centerbtn'><label><b>Mot de passe<span className='redstyle'> *</span></b></label></p>
					<p><Input
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
							/></p>	
			         <p className='centerbtn'> 
			          <Button
			      type="submit"
                    style={{
                  color:"white",
                  backgroundColor: "#4B0082",}} variant="contained" >
                  Se connecter
                 </Button> 
			         </p>
					<div><br/>
				 		<Grid item xs className='centerbtn'>
						<IonText >
							<Link  className='link redstyle' to='/resetpassword' variant="body2">
								Mot de passe oublié?
							</Link></IonText>
						</Grid><br/>
						<Grid item className='centerbtn'>
						<IonText >
						Vous n avez pas encore de compte?
							<Link className='link logocolor' to="/inscription" variant="body2">
								Inscrivez vous!
							</Link></IonText>
						</Grid>
					</div>
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

export default ConnexionDesk
