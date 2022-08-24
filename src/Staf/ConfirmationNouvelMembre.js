import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import axios from 'axios'
import Divider from '@mui/material/Divider';
import logo from '../component/asset/logo.jpg'
import Button from '@mui/material/Button';



function ConfirmationNouvelMembre(props){
   let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const [point,setpoint]=useState([])
   const [pointload,setpointload]=useState(false)
   const history=useHistory()
   const [data,setdata]=useState({
   	status:"",
    point:"",
   })
  
  useEffect(()=>{
     axios
  .post('http://127.0.0.1:8000/api/staff/getpolzanouvelmembre/',{id:id},
   {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
    // axiosInstance
    // .post('staff/getpolzanouvelmembre/',{id:id})  
      .then(res=>{
        console.log(res.data)
      	setuser(res.data)
      	setload(true)
      })
   },[])
useEffect(()=>{
    getpoint()
},[])
  const getpoint=()=>{
    axiosInstance
    .get('staff/getpointacces/')
    .then(res=>{
        setpoint(res.data)
        setpointload(true)
    })
  }
  const erreur = () => toast.error("Erreur!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Nouveau membre bien ajouté!",{
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
  	if(data.status===""||data.point===""){
       erreur()
       return;
  	}
  //  axios
 // .post('http://127.0.0.1:8000/api/staff/confirmationnouveaumembrestaff/',{id:id,point:data.point,status:data.status},
  // {headers:{
 // 'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
   // }})
   axiosInstance
  .post('staff/confirmationnouveaumembrestaff/',{id:id,point:data.point,status:data.status})
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
   {load && pointload && nom===user.prenom+""+user.nom?
  	<div>
 <button className='btndrop' onClick={annulation}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/>
  <strong>Nouveau membre du staff
  </strong></h3>
  </div>
   <div className='centerbtn'> 
    <IonCard className='cardverificationtransaction'>
    <h3> Confirmation du nouveau membre du staff </h3> 
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
 <IonCol size='12'>
 <form onSubmit={confirmation}>
 <IonRow>
 
  <IonCol size='6' className='centerbtn' >
  <h3>Choisir le status du nouveau membre </h3>
   <h2>
     <select
    onChange={handledata}
    name='status'
   required>
   <option  value="" disabled selected >Status</option>
   <option value='simple' >Staff simple</option>
   <option value='bureau'>Bureaucrate</option>
   <option value='comptable'>Comptable</option>
   <option value='manager'>Manager</option>
   <option value='technique'>Technique</option>
   </select>
   </h2>
  </IonCol>
    <IonCol size='6' className='centerbtn' >
  <h3>Point d acces  </h3>
   <h2>
     <select
    onChange={handledata}
    name='point'
   required>
   <option  value="" disabled selected >Point d acces</option>
   {point.map(p=>
    <option value={p.id} >{p.adress}</option>
    )}
   </select>
   </h2>
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
);
}


export default ConfirmationNouvelMembre