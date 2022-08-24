import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import logo from '../component/asset/logo.jpg'

function ConfirmationDesactivation(props){
   let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory() 
   const [data,setdata]=useState({
   	motif:"",
   })
  
  useEffect(()=>{
     axiosInstance
      .post('staff/getpolzadesactivation/',{id:id})
      .then(res=>{
      	setuser(res.data)
      	setload(true)
      })
   },[])
  const erreur = () => toast.error("Erreur!Entrez des donnees valides!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Compte bien desactive!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

 const handledata=e=>{
      //console.log(e.target.value)
      setdata({
        ...data,[e.target.name]: e.target.value.trim()
      })
   }
 const confirmation=e=>{
  	e.preventDefault()
  	if(data.motif===""||data.motif.match(/^ *$/)!== null){
       erreur()
       return;
  	}
  axiosInstance
  .post('staff/confirmationdesactivation/',{id:id,motif:data.motif})
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
 history.goBack(-2)
}


return(
  <div>
  {load && nom===user.prenom+""+user.nom?
   	<div>
   <button className='btndrop' onClick={annulation}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/>
  <strong>Désactivation compte  client
  </strong></h3>
  </div>
   <div className='centerbtn'> 
   <IonCard className='cardverificationtransaction'>
    <h3> Confirmation de la désactivation </h3> 
    </IonCard> 
 <Divider/>
  <h2 className='centerbtn'><strong> Vérification du compte</strong></h2>
   <IonGrid>
  <IonRow>
 <IonCol size='6' className='centerbtn'>
 <h3> Nom complet</h3>
 <h2><strong>{user.prenom} {user.nom}</strong></h2>
 </IonCol>
 <IonCol size='6' className='centerbtn'>
 <h3>Numero de telephone</h3>
 <h2><strong>{user.phone}</strong></h2>
 </IonCol>
 <IonCol size='12'>
 <form onSubmit={confirmation}>
 <IonRow>
  <IonCol size='12' className='centerbtn' >
  <h3>Faites un bref résumé  du motif de la désactivation </h3>
   <textarea 
    required onChange={handledata}
   rows="4" cols="50" name='description'
    name='motif'
   onChange={handledata} />
  </IonCol>
  <IonCol size='12' className='centerbtn'>
  <Button
   type="submit"
   style={{
   color:"white",
   backgroundColor: "#4B0082",}} variant="contained" >
    Confirmer
  </Button>
 </IonCol>
 </IonRow>
 </form>
 </IonCol>
 </IonRow>
 </IonGrid>
  </div>
  </div>
  :null}
  </div>
)
}


export default ConfirmationDesactivation;