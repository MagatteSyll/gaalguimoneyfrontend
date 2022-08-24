import React,{Fragment,useState,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonCard, IonCardContent, IonCardTitle, IonContent, IonItem, IonGrid,IonRow,IonCol,
IonText,IonLoading, IonCardHeader, IonIcon } from '@ionic/react'
import {waterOutline,sunnyOutline,schoolOutline,} from 'ionicons/icons'
import axiosInstance from '../axios'
import {Link} from 'react-router-dom'
import Divider from '@mui/material/Divider';



function AccueilStaff({user}) {

    const [pay,setpay]=useState([])
    const [load,setload]=useState(false)
    const [transload,setransload]=useState(false)
    const  [message, setmessage] = useState([])


   
    useEffect(()=>{
        axiosInstance
        .get('staff/dernierestransaction/')
        .then((res=>{ 
        setmessage(res.data)
        setransload(true)
            
        })) 
    },[])

    /*
    useEffect(()=>{
       getpay()
   },[])

    const getpay=()=>{
       axiosInstance
       .get('staff/getpublicpay/')
       .then(res=>{
        setpay(res.data)
        setload(true)
      // console.log(res.data)
       })
    }
    A revoir
    */

    return (
        <div className='staff'>
        {transload ?
        <>
      <LastOperation message={message} />
        </>:null}
       
  
           
        </div>
    )
}


function GaalguiPay({pay}) {
    return (
        <div className='container'>
        {pay.length>0?
        <>  
        <h4 className='centerbtn'> GaalguiPay</h4>
           <Swiper
           spaceBetween={50}
           slidesPerView={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
           >
           {pay.map(p=>
         <SwiperSlide> 

             <IonCard>
                {p.alias=="SDE"?
                <Link to='/sdepay' className='purplestyle'>
                 <IonCardHeader  className='purplestyle'>{p.alias}</IonCardHeader>
                </Link>:
                p.alias=="SENELEC"?
                <Link>
                 <IonCardHeader className='purplestyle'>{p.alias}</IonCardHeader>
                </Link>:
                p.alias=="UCAD"?
                <Link>
                 <IonCardHeader className='purplestyle'>{p.alias}</IonCardHeader>
                </Link>
                :null}
                 <IonCardContent>
                 <img className='logopay'
                 src={`http://127.0.0.1:8000${p.logo}`} 
               //  src={`https://gaalguimoney.herokuapp.com${p.logo}`}
                 />
                 </IonCardContent>
             </IonCard>
         </SwiperSlide>
          )}
         </Swiper> 
         </>:null} 
        </div>
    )
}

const  CourAction=()=>{ 
return (
        
       <div >
       <IonGrid>
       <IonRow>
       <IonCol size='5'>
       <IonCard >
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
         <strong>655.957</strong></IonText></p>
         </IonItem>
         <IonItem>
         <p className='centerbtn'> <IonText>CAD: 
         <strong> 441.469</strong></IonText></p>
          </IonItem>
        </IonCardContent>
        </IonCard>
       </IonCol>
       <IonCol size='5' className='marginaction'>
       <IonCard>
            <IonCardTitle >
            <p className='centerbtn'>Nouveautes</p>
                 </IonCardTitle>
            <IonCardContent>
             <IonItem className='centerbtn'>
            <p className='centerbtn'> <IonText>Euro: <strong>
              558.6384</strong></IonText></p>
            </IonItem>
             <IonItem>
            <p className='centerbtn'> <IonText>USD: 
         <strong>655.957</strong></IonText></p>
         </IonItem>
         <IonItem>
         <p className='centerbtn'> <IonText>CAD: 
         <strong> 441.469</strong></IonText></p>
          </IonItem>
        </IonCardContent>
        </IonCard>
       </IonCol>
       </IonRow>
       </IonGrid>
            
         
              
       </div>
      
    )
}

function LastOperation({message}) {
   
    return (
         <div>
        {message.length>0?
        <div className='container '>
        <h3 className='mt-4'> <strong>Dernières operations </strong></h3>
        <div  className='centerbtn'>
       {message.map(m=>
        <div key={m.id}>
        <IonItem>
        <IonText>{m.notification},{new Date(m.created).toLocaleDateString('en-GB',
       {hour: '2-digit', minute:'2-digit'})}</IonText></IonItem>
        <br/>
        <Divider/>
        </div> )}</div>
        <p className='mt-4'>
        <button className="w3-button w3-black" type="submit">
         <Link className='link centerbtn blanc' to='/historique' >
        Voir l historique </Link></button>
        </p>
         </div>:null}
         </div>
           )
}


export default AccueilStaff
