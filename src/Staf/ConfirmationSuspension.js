import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import Button from '@mui/material/Button';




function ConfirmationSuspension(props){
  let id=props.match.params.id
   let nom=props.match.params.nom
   const [business,setbusiness]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   
  
  useEffect(()=>{
     axiosInstance
      .post('staff/getuserbusiness/',{id:id})
      .then(res=>{
      	setbusiness(res.data)
      	setload(true)
      })
   },[])

  const erreur = () => toast.error("Erreur!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
 const notify = () => toast.success("Compte business bien suspendu!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

  const confirmation=e=>{
  	//console.log('confirmation')
 axiosInstance
  .put('staff/suspensionbusiness/suspension/',{id:id})
  .then(res=>{
     history.push('/accueil')
     notify()
  })
  .catch(()=>{
  	erreur()
  	return;
  })
 } 
const annulation=()=>{
 history.push('/suspensioncomptebusiness')
}



return(
	<div>
	{load && nom===business.user.prenom+""+business.user.nom?
   	<div>
    <p className='m-4'>
  <button onClick={annulation} className='btndrop'><ArrowBackIcon className='iconsocial'/></button></p>
   <div className=' container mt-3'>
  <h2 className='centerbtn'>Informations sur le compte</h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nom du business</h3>
 <p>
 <img className='imglogosuspension ' alt=''
 src={`http://127.0.0.1:8000${business.logo}`} 
  />
 <strong>{business.nom}</strong></p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Location</h3>
 <p> {business.adress.region}, {business.adress.pays.name}</p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Proprietaire</h3>
 <p className='bluestyle'>{business.user.prenom} {business.user.nom} </p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Contact</h3>
 <p className='redstyle'>{business.contact}</p>
 </IonCol>
 <IonCol size='12' className='centerbtn'>
 <p className='centerbtn'><Button
  variant="contained" color="error"
  onClick={confirmation}
  disableElevation>
  Confirmer la suspension
</Button></p>
 </IonCol>
 </IonRow>
 </IonGrid>


  </div>
   	</div>

   	:null}

	</div>

	)
}

export default ConfirmationSuspension