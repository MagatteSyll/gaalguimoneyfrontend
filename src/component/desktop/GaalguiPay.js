import React from 'react'
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonSlide, IonSlides, 
    IonText,IonLoading, IonCardHeader, IonIcon } from '@ionic/react'
import {waterOutline,sunnyOutline,schoolOutline,} from 'ionicons/icons'
import { Swiper, SwiperSlide } from 'swiper/react';
  


const slideOpts = {
    slidesPerView: 6.5,
    initialSlide: 0,
    speed: 400,   
  };

function GaalguiPay() {
    return (
         <div>  
        <h4 className='centerbtn'> GaalguiPay</h4>
           <Swiper
           spaceBetween={50}
           slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
           >
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'red'}}>SENELEC</IonCardHeader>
                 <IonCardContent><IonIcon icon={sunnyOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'green'}}>ETUDES</IonCardHeader>
                 <IonCardContent><IonIcon icon={schoolOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>SDE</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
        <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
        </SwiperSlide>
         <SwiperSlide>
             <IonCard>
                 <IonCardHeader style={{color:'blue'}}>quelque chose</IonCardHeader>
                 <IonCardContent><IonIcon icon={waterOutline} style={{zoom:'2'}}/></IonCardContent>
             </IonCard>
         </SwiperSlide>
         </Swiper>  
        </div>
    )
}

export default GaalguiPay
