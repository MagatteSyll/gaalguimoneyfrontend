import React,{useState,useEffect} from 'react'
import { IonCard, IonCol, IonGrid, IonItem, IonRow, IonText } from '@ionic/react'
import {Link,useParams} from 'react-router-dom'
import axiosInstance from '../axios'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';





function SuccessPaySDE(props){
	let id=props.match.params.id
    const {nature}=useParams()
    const  [pay, setpay] = useState([])
    const  [load, setload] = useState(false)
   

    useEffect(()=>{
      axiosInstance
      .post('pay/getpayement/',{'id':id})
      .then(res=>{
        console.log(res.data)
        setpay(res.data)
        setload(true)
      })

    },[])


return (
	<div>
	{load?
		<>
       <IonGrid>
          <IonRow>
            <IonCol size='3'>
             <IonItem>
             <Link to='/accueil' className='link'><ArrowBackIcon className='iconsocial'/></Link> 
              </IonItem>
              <IonCard>Logo</IonCard>
              </IonCol>
              <IonCol size='6'  className='recucol'>
               <IonItem>
               <IonText> <LocationOnIcon/>Dakar, rue on s en fiche</IonText>
               </IonItem>
               <IonItem>
                <IonText> <LocalPhoneIcon/> +(221)772059140</IonText>
                <IonText className='recutext' > +(221)772197305</IonText>
                <IonText className='recutext' > www.gaalguimoney.com</IonText>
               </IonItem>
              </IonCol>
            </IonRow>
         </IonGrid>
       <div className='centerbtn'>
         <h2 className='centerbtn'> <DoneOutlineIcon/> GaalguiPay <img
         src={`http://127.0.0.1:8000${pay.professionnel.logo}`}  className='imgsuccesslogopay' alt=""/> {pay.professionnel.nom}
         </h2>
         <IonGrid>
             <IonRow>
                 <IonCol size='5'>
                 <p>Date de la transaction</p>
                 <h4>{new Date(pay.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</h4>
                 </IonCol>
                 <IonCol size='5' >
                 <p>Nature de la transaction </p>
                 <h4>Payement {pay.professionnel.nom}</h4>
                  </IonCol>
                 <IonCol size='5'>
                 <p>Montant payé </p>
                 <h4>{pay.montant} CFA </h4>
                 </IonCol>
                 <IonCol size='5' >
                 <p> Client</p>
                 <h4>{pay.nom_complet_client} </h4>
                 </IonCol>
             </IonRow>
         </IonGrid>
      </div>
      <div className='cartsignature'>
             <IonCard>
             Signature
             </IonCard>    
         </div> 
    </>:null}
	</div>
	)
}

export default SuccessPaySDE