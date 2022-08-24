import React, { useState,useEffect} from 'react'
import { IonCard, IonCol, IonGrid, IonItem, IonRow, IonText } from '@ionic/react'
import {Link,useParams} from 'react-router-dom'
import axiosInstance from '../axios'
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logo from '../component/asset/logo.jpg'
import {useHistory} from 'react-router-dom'
import Divider from '@mui/material/Divider';


function RecuDepot() {
    const {id}=useParams()
    const {nature}=useParams()
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
    const history=useHistory()

    useEffect(()=>{
      axiosInstance
      .post('staff/recudepot/',{'id':id})
      .then(res=>{
       // console.log(res.data)
        setrecu(res.data)
        setload(true)
      }) 

    },[])
const retour=()=>{
    history.go(-3)
}
    return (
        <div>
        {load && nature==="depot"?
        <div>
        <Divider/> 
        <IonGrid>
        <IonRow>
      <IonCol size='3'>
     <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button> 
      </IonCol>
       <IonCol size='8' className='recucol'>
        <IonItem>
        <IonText> <LocationOnIcon/> Dakar, rue on s en fiche</IonText>
          </IonItem>
          <IonItem>
         <IonText> <LocalPhoneIcon/> +(221)772059140</IonText>
        <IonText className='recutext' > +(221)772197305</IonText>
        <IonText className='recutext' > www.gaalguimoney.com</IonText>
        </IonItem>
         </IonCol>
     </IonRow>
 </IonGrid>
 <h3 className='centerbtn'> <img src={logo} className='logoimgdesk'/> <strong>Transaction effectuée
  </strong></h3>
  <IonCard className='cardsuccesstransaction'>
<h3 className='centerbtn'><DoneOutlineIcon/> Depot GaalguiMoney</h3>
<h3 className='centerbtn'> <strong>{recu.somme} CFA</strong></h3> 
 </IonCard> 
  <Divider/>
 <div className='centerbtn'>
 <h2 className='centerbtn'>Informations sur la transaction</h2>
     <IonGrid>
         <IonRow>
         <IonCol size='5'>
         <h3>Date de la transaction</h3>
         <h3> <strong>{new Date(recu.created).toLocaleDateString('en-GB',
         {hour: '2-digit', minute:'2-digit'})} </strong></h3>
         </IonCol>
         <IonCol size='5'>
        <h3>Nature de la transaction </h3>
        <h3> <strong>Depot </strong></h3>
        </IonCol>
        <IonCol size='5'>
        <h3>Montant à deposer  </h3>
        <h3> <strong>{recu.somme} CFA </strong></h3>
        </IonCol>
        <IonCol size='5'>
        <h3>Client </h3>
        <h3> <strong>{recu.depositaire.prenom} {recu.depositaire.nom} </strong> </h3>
        </IonCol> 
         </IonRow>
     </IonGrid>
 </div>
 <div className='cartsignature'>
     <IonCard>
     Signature
     </IonCard>    
 </div> 
 </div>:null}     
     </div>  
  
            
        
    )
}

export default RecuDepot

