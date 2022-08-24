import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonSlide, IonSlides, 
    IonText,IonLoading, IonCardHeader, IonIcon } from '@ionic/react'
import {waterOutline,sunnyOutline,schoolOutline,} from 'ionicons/icons'
  


const slideOpts = {
    slidesPerView: 3,
    initialSlide: 0,
    speed: 400,   
  };
function PayementMobile() {
    return (
        <div>
            <h4 style={{textAlign:'center'}}> GaalguiPay</h4>
         <IonSlides  options={slideOpts}>
         <IonSlide>
             <IonCard>
                 <IonCardHeader className='redstyle'>SENELEC</IonCardHeader>
                 <IonCardContent><IonIcon icon={sunnyOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </IonSlide>
         <IonSlide>
             <IonCard>
                 <IonCardHeader style={{color:'green'}}>ETUDES</IonCardHeader>
                 <IonCardContent><IonIcon icon={schoolOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </IonSlide>
         <IonSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>SDE</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </IonSlide>
         <IonSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>SDE</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </IonSlide>
         </IonSlides>
          
        </div>
    )
}

export default PayementMobile
