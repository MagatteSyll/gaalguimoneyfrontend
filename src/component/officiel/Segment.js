import React,{useState} from 'react'
import Box from '@material-ui/core/Box';
import {IonIcon, IonSegment, IonSegmentButton, IonText,IonButton} from '@ionic/react'
import {wallet,card,briefcase,laptop,people,locationOutline}  from 'ionicons/icons'
import '../style.css'
import { useHistory } from 'react-router-dom';


//Segmentation page officielle pour desktop
function Segment() {
  const history=useHistory()
  const handletarif=()=>{
     history.push('/nostarifs') 
   }
   const handlecarriere=()=>{
    history.push('/carriere')
  }
  const handleprofessionnel=()=>{
    history.push('/pourprofessionnel')
  }
  const handlepoint=()=>{
    history.push('/nospointdacces')
  }
  const handleclient=()=>{
    history.push('/serviceclient')
  }
  const handlepay=()=>{
    history.push('/gaalguimoneypay')
  }

    return (
     <div>
     <IonSegment className='segment' scrollable>
    <IonSegmentButton onClick={handletarif}>
      <Box><IonText> <IonIcon icon={wallet}/> Nos tarifs</IonText></Box>
    </IonSegmentButton>
   <IonSegmentButton onClick={handlepay}>  
     <IonText> <IonIcon icon={card}/> GaalguiMoneyPay</IonText>
    </IonSegmentButton>
    <IonSegmentButton onClick={handleprofessionnel}>
      <IonText> <IonIcon icon={briefcase}/> Compte professionnel</IonText>
    </IonSegmentButton>
    <IonSegmentButton onClick={handleclient}>
    <IonText> <IonIcon icon={laptop}/> Service Clientel</IonText>
    </IonSegmentButton>
    <IonSegmentButton onClick={handlecarriere}>
    <IonText> <IonIcon icon={people}/> GaalguiCarriere</IonText>
    </IonSegmentButton>
    <IonSegmentButton onClick={handlepoint}>
     <IonText> <IonIcon icon={locationOutline}/> Nos point d acces</IonText>
    </IonSegmentButton>
    </IonSegment>          
        </div>
    )
}

export default Segment
