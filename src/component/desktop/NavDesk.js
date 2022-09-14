import React,{useState} from 'react'
import {  useHistory } from 'react-router-dom';
import {IonIcon,IonGrid,IonCol,IonRow,IonCard} from '@ionic/react'
import {homeOutline} from 'ionicons/icons'
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import NotificationsIcon from '@mui/icons-material/Notifications';
import QrCodeIcon from '@mui/icons-material/QrCode';
import { pink } from '@mui/material/colors';
import Badge from '@mui/material/Badge';
import logo from '../asset/logo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


//Navigation sur desktop
function NavDesk({user,handleparametre,handlehome,deconnexion,openbusiness, openprofessionel,
    notifbusiness,notifpro,handlecode,getnotification,badgenotif}) {
   
 
    return (
        <div className='desk'>
        <IonGrid>
        <IonRow>
        <IonCol size='4'>  
        <h3>
    <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
         </h3>
        </IonCol>
        <IonCol size='7'>
        <button onClick={handlehome} className="btndrop btnnav">
        <HomeIcon  color="primary"/> GaalguiMoney</button> 
        <button  className="btndrop btnnav ">
        <LocalOfferIcon sx={{ color: pink[500] }} />Nouveautes</button>
        <button className=" btndrop btnnav " > <MonetizationOnIcon color="success"/>GaalguiMoneyBusiness</button> 
    {/*   {user.business?
    <>
    <button className=" btndrop btnnav " onClick={handlecode}> <QrCodeIcon color="secondary"/></button>
    <button className=" btndrop btnnav "  onClick={openbusiness}> 
     <Badge badgeContent={notifbusiness.length} color="error" max={10}>
     <NotificationsIcon />
     </Badge>
     </button>
     </>
     :null
        }
    {user.professionnel?
    <>
    <button className=" btndrop btnnav " onClick={handlecode} > <QrCodeIcon color="secondary"/></button>
    <button className=" btndrop btnnav " onClick={openprofessionel} > 
    <Badge badgeContent={notifpro.length} color="error" max={10}>
    <NotificationsIcon  color="action"/>
    </Badge>
    </button>
     </>
     :null
        }
    */}

    <button className=" btndrop btnnav " onClick={getnotification} > 
    <Badge badgeContent={badgenotif} color="error" max={10}>
    <NotificationsIcon  color="action"/>
    </Badge>
    </button>
    {user.document_verif?
         <button className=" btndrop btnnav "
          onClick={handlecode}
          > 
        <QrCodeIcon className='secondstyle'/></button>:null}
     </IonCol>
    <IonCol size='1'>
    <button className='btndrop btnnav  w3-right' title='deconnexion' onClick={ deconnexion}> <ArrowCircleRightIcon /></button>
     </IonCol>
    {user.document_verif?null:
    <h3 className='redstyle'>Rendez vous avec vos documents(passports ou piece d identite)  au point d acces le plus proche pour activer votre compte <SentimentSatisfiedAltIcon/></h3>
        }
        </IonRow>
        </IonGrid> 
       
        </div>

    )
}

export default NavDesk


