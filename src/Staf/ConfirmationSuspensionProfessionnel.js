import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import Button from '@mui/material/Button';



function ConfirmationSuspensionProfessionnel(props){
   let id=props.match.params.id
   let nom=props.match.params.nom
   const [pay,setpay]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   
  
  useEffect(()=>{
     axiosInstance
      .post('staff/getpayprofessionnel/',{id:id})
      .then(res=>{
      	setpay(res.data)
      	setload(true)
      })
   },[])

  const erreur = () => toast.error("Erreur!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
 const notify = () => toast.success("Compte professionnel  bien suspendu!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

  const confirmation=e=>{
  	//console.log('confirmation')
 axiosInstance
  .put('staff/suspensionprofessionnel/suspension/',{id:id})
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
 history.push('/suspensionprofessionnel')
}



return(
	<div>
	{load ?
   	<div>
    <p className='m-4'>
  <button onClick={annulation} className='btndrop'><ArrowBackIcon className='iconsocial'/></button></p>
   <div className=' container mt-3'>
  <h2 className='centerbtn'>Informations sur le compte</h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nom de l entreprise</h3>
 <p>
 <img className='imglogosuspension ' alt=''
 src={`http://127.0.0.1:8000${pay.logo}`} 
  />
 <strong>{pay.nom}</strong></p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Location</h3>
 <p> {pay.adress.region},{pay.adress.pays.name}</p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Proprietaire</h3>
 <p className='bluestyle'>{pay.user.prenom} {pay.user.nom} </p>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Contact</h3>
 <p className='redstyle'>{pay.contact}</p>
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
export default ConfirmationSuspensionProfessionnel