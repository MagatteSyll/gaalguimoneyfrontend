import React, { Fragment,useState,useEffect } from 'react'
import { IonGrid,IonRow,IonCol,IonCard,IonSegment,IonIcon,IonText,IonItem
,IonCardContent,IonCardTitle } from '@ionic/react'
import {personCircleOutline,personOutline,chevronForwardOutline} from 'ionicons/icons'
import { Link } from 'react-router-dom'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { pink } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import logo from '../asset/logo.jpg' 
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

//Navmobile
const  NavMobile =({user,handleparametre,handlehome,handlepop,deconnexion,openbusiness, openprofessionel,
    handlecode,notifbusiness,notifpro})=>{ 

 const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
    return(
    <div className='mobile'> 
        <IonGrid>
        <IonRow >
        <IonCol size='8'>
         <h5 className='mt-3'>
    <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
         </h5>
        </IonCol>
        <IonCol size='3'>
         <button className='btndrop btnnav  w3-right'><IonIcon  className="bluestyle" icon={personCircleOutline}/>
         {user.prenom}</button>
        </IonCol>
        <IonCol size='1'>
         <button className='btndrop btnnav  w3-right' title='deconnexion' onClick={ deconnexion}> <ArrowCircleRightIcon/></button>
        </IonCol>
         {user.document_verif?null:
            <h5 className='redstyle'>
            Rendez vous avec vos documents(passports ou piece d identite) au point d acces le plus proche pour activer votre compte <SentimentSatisfiedAltIcon/>
            </h5>
        }
        <IonCol size='12'>
        <IonRow>
         {user.business?
    <IonCol size='4'>
    <button className=" btndrop btnnav " onClick={handlecode} > <QrCodeIcon className='secondstyle'/></button>
    <button className=" btndrop btnnav " onClick={openbusiness} >
    <Badge badgeContent={notifbusiness.length} color="error" max={10}>
     <NotificationsIcon /> 
     </Badge>
     </button> 
    </IonCol>:null
        }
    {user.professionnel?
        <IonCol size='4'>
    <button className=" btndrop btnnav " onClick={handlecode} > 
    <QrCodeIcon className='secondstyle'/></button>
    <button className=" btndrop btnnav " onClick={openprofessionel} >
    <Badge badgeContent={notifpro.length} color="error" max={10}>
     <NotificationsIcon  />
     </Badge></button>
    </IonCol> :null
        }
    <IonCol size='8'>
        <button className=" btndrop btnnav " > <MonetizationOnIcon color="success"/>
        GaalguiMoneyBusiness</button>
        </IonCol>
        </IonRow>
        </IonCol>
        <IonCol size='12'>
        <IonCol size='4'>
        <button onClick={handlehome} className="btndrop btnnav">
        <HomeIcon color="primary"/> GaalguiMoney</button> 
        </IonCol>
        <IonCol size='4'>
         <button  className="btndrop btnnav ">
        <LocalOfferIcon sx={{ color: pink[500] }}/>Nouveautes</button>
        </IonCol>
        {user.document_verif?
        <IonCol size='4'>
         <button className=" btndrop btnnav "
          onClick={handlecode}
          > 
        <QrCodeIcon className='secondstyle'/></button>  
        </IonCol>:null}
        </IonCol>
        <IonCol size='12'>
     <Swiper
      spaceBetween={5}
      slidesPerView={1.2}
      >
      <SwiperSlide>
       <IonCard >
     <IonCardTitle>Compte</IonCardTitle>
      <IonCardContent>
       <IonItem >
       <IonText>Solde actuel <strong className='redstyle'>{user.solde}</strong> CFA</IonText>
       </IonItem>  
       </IonCardContent>
       </IonCard>
      </SwiperSlide>
      <SwiperSlide>
       <IonCard>
        <IonCardTitle>transactions </IonCardTitle>
        <IonCardContent> 
         <IonItem className='ion-padding'>
         <IonText ><Link to='/envoyer' className='link'>Envoi à un client GaalguiMoney <ChevronRightIcon/> 
         </Link></IonText>
          </IonItem>
         <IonItem className='ion-padding'>
        <IonText ><Link className='link'  to='/envoiviacode'> Envoi via  code
         <ChevronRightIcon/></Link></IonText>
         </IonItem>
         </IonCardContent>
     </IonCard>
      </SwiperSlide>
      <SwiperSlide>
       <IonCard>
    <IonCardTitle>
     Taux d échange en CFA
    </IonCardTitle>
    <IonCardContent>
     <p>
    <IonText>Euro  <b> 550 </b></IonText>
     </p>
    <p>
   <IonText>USD <b> 450</b></IonText>
    </p>
    <p>
    <IonText>CAD <b> 445</b> </IonText>
    </p>
    </IonCardContent>
    </IonCard>
      </SwiperSlide>
    </Swiper>
        </IonCol>
        </IonRow>
    </IonGrid>

    </div>
    )
}

export default NavMobile


