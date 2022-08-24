import React, { useState,useEffect,Fragment } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import {Link} from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import { Card,} from  'react-bootstrap'
import {IonIcon, IonText,IonGrid,IonRow,IonCol} from '@ionic/react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';

//Footer de la page officielle
export default function FooterOfficiel() {
 
  return (
    <div className='footerofficiel'>
   <div className='desk container mt-4'>
   <IonGrid>
   <IonRow>
   <IonCol size='3'>
   <Box> <Typography  variant="h6" color="#d500f9" gutterBottom>L equipe GaalguiMoney</Typography></Box>
   <ul className='nodecoul'>
     <Box>
      <Link href="/" className='linkfootofficiel'>
      <li >Nos points d acces</li>
      </Link>
      </Box>
       <Box>
     <Link href="/"  className='linkfootofficiel'>
       <li> Realisations</li>
      </Link>
      </Box>
       <Box>
       <Link href="/" className='linkfootofficiel'>
      <li> GaalguiPersonnel </li>
       </Link>
      </Box>
     </ul>
   </IonCol>
   <IonCol size='3'>
    <Box >
   <Typography  variant="h6" color="#d500f9" gutterBottom>Nous sommes sur</Typography></Box>
      <Box>
        <Link className='linkfootofficiel' >
       <FacebookIcon className='iconsocial'/>
       </Link>
       <Link href="/" className='linkfootofficiel'>
        <LinkedInIcon className='iconsocial'/>
        </Link>
        <Link href="/" className='linkfootofficiel'>
         <YouTubeIcon className='iconsocial'/>
         </Link>
         <Link href="/" className='linkfootofficiel'> 
        <TwitterIcon className='iconsocial'/>
        </Link>
         </Box>
   </IonCol>
   <IonCol size='3'>
 <Box > <Typography  variant="h6" color="#d500f9" gutterBottom>Services</Typography></Box>
     <ul className='nodecoul'>
    <Box>
   <Link href="/" className='linkfootofficiel'>
     <li> GaalguiPay</li>
   </Link>
   </Box>
     <Box>
    <Link href="/" className='linkfootofficiel'>
    <li> Compte professionnel</li> 
    </Link>
      </Box>
      <Box>
      <Link href="/" className='linkfootofficiel'>
      <li> service client </li>
      </Link>
       </Box>
      </ul>
   </IonCol>
   <IonCol size='3'>
   <Box > <Typography  variant="h6" color="#d500f9" gutterBottom>Droits</Typography></Box>
     <ul className='nodecoul'>
       <Box>
     <Link href="/" className='linkfootofficiel'>
     <li> Politiques de confidentialite</li>
       </Link>
     </Box>
     <Box>
     <Link href="/" className='linkfootofficiel'>
     <li> En cas de fraude</li> 
       </Link>
      </Box>
      <Box>
     <Link href="/" className='linkfootofficiel'>
     <li> Service d assistance </li>
     </Link>
    </Box>
     </ul>  
   </IonCol>
   <IonCol size='12' className='centerbtn'>
    <p className='centerbtn'>GaalguiMoney &reg; {new Date().getFullYear()}</p>
   </IonCol>
   </IonRow>
   </IonGrid>
   </div>



   <div className='mobile container'>
    <IonGrid>
   <IonRow>
   <IonCol size='6'>
   <Box> <Typography  variant="h6" color="#d500f9" gutterBottom>L equipe GaalguiMoney</Typography></Box>
   <ul className='nodecoul'>
     <Box>
      <Link href="/" className='linkfootofficiel'>
      <li >Nos points d acces</li>
      </Link>
      </Box>
       <Box>
     <Link href="/"  className='linkfootofficiel'>
       <li> Realisations</li>
      </Link>
      </Box>
       <Box>
       <Link href="/" className='linkfootofficiel'>
      <li> GaalguiPersonnel </li>
       </Link>
      </Box>
     </ul>
   </IonCol>
   <IonCol size='6'>
    <Box >
   <Typography  variant="h6" color="#d500f9" gutterBottom>Nous sommes sur</Typography></Box>
      <Box>
        <Link className='linkfootofficiel' >
       <FacebookIcon className='iconsocial'/>
       </Link>
       <Link href="/" className='linkfootofficiel'>
        <LinkedInIcon className='iconsocial'/>
        </Link>
        <Link href="/" className='linkfootofficiel'>
         <YouTubeIcon className='iconsocial'/>
         </Link>
         <Link href="/" className='linkfootofficiel'> 
        <TwitterIcon className='iconsocial'/>
        </Link>
         </Box>
   </IonCol>
   <IonCol size='6'>
 <Box > <Typography  variant="h6" color="#d500f9" gutterBottom>Services</Typography></Box>
     <ul className='nodecoul'>
    <Box>
   <Link href="/" className='linkfootofficiel'>
     <li> GaalguiPay</li>
   </Link>
   </Box>
     <Box>
    <Link href="/" className='linkfootofficiel'>
    <li> Compte professionnel</li> 
    </Link>
      </Box>
      <Box>
      <Link href="/" className='linkfootofficiel'>
      <li> service client </li>
      </Link>
       </Box>
      </ul>
   </IonCol>
   <IonCol size='6'>
   <Box > <Typography  variant="h6" color="#d500f9" gutterBottom>Droits</Typography></Box>
     <ul className='nodecoul'>
       <Box>
     <Link href="/" className='linkfootofficiel'>
     <li> Politiques de confidentialite</li>
       </Link>
     </Box>
     <Box>
     <Link href="/" className='linkfootofficiel'>
     <li> En cas de fraude</li> 
       </Link>
      </Box>
      <Box>
     <Link href="/" className='linkfootofficiel'>
     <li> Service d assistance </li>
     </Link>
    </Box>
     </ul>  
   </IonCol>
    <IonCol size='12' className='centerbtn'>
    <p className='centerbtn'>GaalguiMoney &reg; {new Date().getFullYear()}</p>
   </IonCol>
   </IonRow>
   </IonGrid>
   </div>
    </div>
  );
}


