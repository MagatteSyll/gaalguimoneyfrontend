import React,{useEffect,useState} from 'react'
import axiosInstance from '../../axios';
import { useHistory } from 'react-router-dom';
import { Fragment } from 'react';
import {IonCard, IonIcon, IonItem, IonLoading, IonText}  from '@ionic/react'
import {settings,locationOutline,personCircleOutline} from 'ionicons/icons'



//Sidebar page personnelle desktop
const  SideBar=({islog,user,isstaf}) =>{
    const history=useHistory()
    
   
  const envoi=()=>{
    history.push('/envoyer')
  }
  const coda=()=>{
    history.push('/envoiviacode')
  }
  const handlepoint=()=>{
    history.push('/pointdacces')
  }
  
  
  
    return (
        
    <Fragment>
    {isstaf?null:
    <div className="sidebar"  >
  <IonCard  className="w3-bar-item"><h4><IonItem><IonIcon icon={personCircleOutline}/>{user.prenom} {user.nom}</IonItem>
  <IonItem>Solde:<IonText className='redstyle'>{user.solde} CFA</IonText></IonItem>
  </h4>
  </IonCard>
  <IonCard className="w3-bar-item">
    <h4 className='centerbtn'> Transactions</h4>
    <IonItem><button onClick={envoi} className="w3-bar-item w3-button">Envoi à un client GaalguiMoney</button></IonItem>
    <IonItem><button  onClick={coda} className="w3-bar-item w3-button">Envoi via   code </button></IonItem>	
    <h4 className='centerbtn'>Utiles</h4>
     <IonItem><button onClick={handlepoint} className="w3-bar-item w3-button"> 
     <IonIcon icon={locationOutline}/> Acces</button> </IonItem>
    </IonCard>
    </div>}
   </Fragment>

        
    )
}

export default SideBar
