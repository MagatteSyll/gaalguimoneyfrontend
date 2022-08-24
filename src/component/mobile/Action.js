import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonSlide, IonSlides, 
    IonText,IonLoading } from '@ionic/react'
import React, { Fragment,useState,useEffect } from 'react'
import axios from 'axios'
import Transactions from './Transactions';

const  Action =()=>{
    const [showLoading, setShowLoading] = useState(true);
    const  [eur, seteur] = useState()
    const  [dollar, setdollar] = useState()
    const  [cn, setcn] = useState()
    const [efetch, setefetch] = useState(false)
    const [ufetch, setufetch] = useState(false)
    const [dfetch, setdfetch] = useState(false)
    const slideOpts = {
        slidesPerView: 1.5,
        initialSlide: 0,
        speed: 400,   
      };
      /*useEffect(()=>{

        axios
        .get('https://v6.exchangerate-api.com/v6/15403bdb2e69ef5276aa14c0/pair/EUR/XOF')
        .then((res)=>{
         // console.log(res.data)
          seteur(res.data.conversion_rate)
          setefetch(true)
        })
            },[])
    
     useEffect(()=>{

            axios
                .get('https://v6.exchangerate-api.com/v6/15403bdb2e69ef5276aa14c0/pair/USD/XOF')
                .then((res)=>{
                 // console.log(res.data)
                  setdollar(res.data.conversion_rate)
                  setufetch(true)
                })
                    },[])
         useEffect(()=>{

          axios
             .get('https://v6.exchangerate-api.com/v6/15403bdb2e69ef5276aa14c0/pair/CAD/XOF')
             .then((res)=>{
            // console.log(res.data)
             setcn(res.data.conversion_rate)
             setdfetch(true)
        })    },[])
      */


    return (
       <Fragment>
           <IonSlides  options={slideOpts}>
               <IonSlide >
                   <IonCard>
                       <IonCardTitle>
                           Taux d échange en CFA
                       </IonCardTitle>
                       <IonCardContent>
                         
                           <IonItem>
                               <IonText>Euro:<IonText style={{color:'red'}}>550</IonText></IonText>
                           </IonItem>{/*:<IonLoading
                                cssClass='my-custom-class'
                                isOpen={showLoading}
                                onDidDismiss={() => setShowLoading(false)}
                                message={'Chargement...'}
                           duration={5000} />*/}
                       
                        <IonItem>
                         <IonText>USD:<IonText style={{color:'purple'}}> 450</IonText></IonText>
                         </IonItem>{/*:<IonLoading
                        cssClass='my-custom-class'
                        isOpen={showLoading}
                        onDidDismiss={() => setShowLoading(false)}
                        message={'Chargement...'}
                        duration={5000}/>*/}
                    
                     <IonItem>
                    <IonText>CAD: <IonText style={{color:'magenta'}}> 445</IonText></IonText>
                    </IonItem>{/*:<IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Chargement...'}
                    duration={5000}/>*/}
                </IonCardContent>
                   </IonCard>
               </IonSlide>
               <IonSlide>
                   <IonCard>
                       <IonCardTitle>Les metaux</IonCardTitle>
                       <IonCardContent>
                        <IonText> les courbes blablablabla les courbes blablablabla les courbes
                          les courbes blablablabla les courbes blablablabla les courbes blablablabla 
                        </IonText>
                       </IonCardContent>
                   </IonCard>
               </IonSlide>
           </IonSlides>
       </Fragment>
    )
}

export default Action
