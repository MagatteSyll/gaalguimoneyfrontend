import { IonCard, } from '@ionic/react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CarouselLog from '../CarouselLog';
import { Container } from '@material-ui/core';
import Input from "@material-ui/core/Input";
import {Fragment} from 'react'
import {Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import React from 'react'
import logo from '../asset/logo.jpg'
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input'








function ResetPasswordDesk({handlesubmit,handledata,classes,data,retour}) {
   
    return (
        <div className='desk'>
          <Fragment>
		<div className="sideconnexion">
			<IonCard className='card'>
            <Container>
            <div className={classes.paper}>
             <h3>
           <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
            </h3>

				<Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h5">
					Reinitialisation de mot passe
				</Typography>
                <br/><br/>
                <form onSubmit={handlesubmit}>
                <p className='centerbtn' ><label><b>Numero de telephone<span className='redstyle'> *</span></b> 
                </label></p>
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
                 <p className='centerbtn'>  
                   <Button
                type="submit"
                style={{
               color:"white",
                backgroundColor: "#4B0082",}} variant="contained" >
                Valider </Button></p>
                </form>
                 <p className='centerbtn'>
                    <button className='btndrop' onClick={retour}> <ArrowBackIcon/> retour</button>
                    </p>
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

export default ResetPasswordDesk
