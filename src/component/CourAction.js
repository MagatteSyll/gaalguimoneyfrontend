import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonSlide, IonSlides, IonText,IonLoading } from '@ionic/react'
import React, { Fragment,useState,useEffect } from 'react'


//Les taux d echange
const  CourAction=()=>{
    return (
        
       <div className='container '>
            <IonCard className='divaciton'>
             <IonCardTitle >
                <p className='centerbtn'>Taux d échange en CFA</p>
                 </IonCardTitle>
                       <IonCardContent>
                           <IonItem className='centerbtn'>
                           <p className='centerbtn'> <IonText>Euro: <strong>
                             558.6384</strong></IonText></p>
                           </IonItem>
                        <IonItem>
                        <p className='centerbtn'> <IonText>USD: 
                          <strong> 655.957</strong></IonText></p>
                         </IonItem>
                     <IonItem>
                     <p className='centerbtn'> <IonText>CAD: 
                       <strong> 441.469</strong></IonText></p>
                    </IonItem>
                </IonCardContent>
                   </IonCard>
              
       </div>
      
    )
}

export default CourAction
