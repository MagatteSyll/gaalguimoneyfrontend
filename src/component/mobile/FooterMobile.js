import {IonGrid,IonRow,IonCol,IonIcon} from '@ionic/react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import {locationOutline} from 'ionicons/icons'
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Link} from 'react-router-dom'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import React from 'react'



const  FooterMobile =() =>{
    return (
    <div className='mobile'>
    <IonGrid>
   <IonRow>
   <IonCol size='12'>
   <IonRow>
   <IonCol size='6'>
   <p> +221772068241</p>
   </IonCol>
    <IonCol size='6'>
    <p> +221772068241</p>
   </IonCol>
    <IonCol size='12'>
    <p> <IonIcon icon={locationOutline}/> Dakar rue PasImportant </p>
   </IonCol>
   </IonRow>
   </IonCol>
   <IonCol size='12' className='centerbtn'>
   <Link className='nodecolink linksocial'><YouTubeIcon className='iconsocial'/> </Link>
   <Link className='nodecolink linksocial'><FacebookIcon className='iconsocial'/> </Link>
   <Link className='nodecolink linksocial'><InstagramIcon className='iconsocial'/> </Link>
   </IonCol>
   <IonCol size='12' className='centerbtn'>
   <p className='centerbtn'>GaalguiMoney &reg; {new Date().getFullYear()}</p>
   </IonCol>
   </IonRow>
   </IonGrid> 
    </div>
    )
}

export default FooterMobile