import  React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol,IonText,IonCard} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import axios from 'axios'
import Divider from '@mui/material/Divider';
import logo from '../component/asset/logo.jpg'
import Button from '@mui/material/Button';




function ConfirmationReactivation(props){
	 let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   const [data,setdata]=useState({
    motif:""
   })
  
  const handledata=e=>{
  setdata({
    ...data,[e.target.name]:e.target.value.trim()
    })
  }  

  useEffect(()=>{
    axios
   .post('http://127.0.0.1:8000/api/staff/getpolzareactivation/',{id:id},
   {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
    // axiosInstance
    //  .post('staff/getpolzareactivation/',{id:id})
      .then(res=>{
      	setuser(res.data)
      	setload(true)
      })
   },[])
  const erreur = () => toast.error("Erreur!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Compte bien réactivé!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });

 
 const confirmation=e=>{
  e.preventDefault()
   axios
   .post('http://127.0.0.1:8000/api/staff/reactivationuser/',{id:id,motif:data.motif},
   {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
 	//axiosInstance
   //.post('staff/reactivationuser/',{id:id,motif:data.motif})
   .then(res=>{
   // console.log(res.data)
     history.go(-2)
     notify()
  })
  .catch(()=>{
  	erreur()
  	return;
  })
 } 
const annulation=()=>{
 history.goBack()
}


return(
  <div>
  {load && nom===user.prenom+""+user.nom?
   	<div>
  <button className='btndrop' onClick={annulation}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/>
  <strong>Réactivation client
  </strong></h3>
  </div>
   <div className='centerbtn'> 
    <IonCard className='cardverificationtransaction'>
    <h3> Confirmation de la réactivation </h3> 
      </IonCard> 
      <Divider/>
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
 <IonCol size='6'  className='centerbtn'>
 <h3>Document</h3>
  <h2><strong>{user.nature_document} </strong>
  <IonText className='redstyle'><strong> Numero {user.numero_document} </strong></IonText></h2>
 </IonCol>
 <IonCol size='12'>
 <form onSubmit={confirmation}>
 <IonRow>
  <IonCol size='12' className='centerbtn' >
  <h3>Faites un bref résumé  du motif de la réactivation </h3>
   <textarea 
   required 
   onChange={handledata}
   rows="4" cols="50" name='description'
   name='motif'
    />
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

export default ConfirmationReactivation;