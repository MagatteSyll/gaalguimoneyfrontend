import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonGrid,IonRow,IonCol,IonCard} from '@ionic/react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'
import Divider from '@mui/material/Divider';
import logo from '../component/asset/logo.jpg'
import Button from '@mui/material/Button';


function ConfirmationActivation(props){
   let id=props.match.params.id
   let nom=props.match.params.nom
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const history=useHistory()
   const [data,setdata]=useState({
   	nature:"",
   	numero:"",
   })
  
  useEffect(()=>{
     axiosInstance
      .post('staff/getpolza/',{id:id})
      .then(res=>{
      	setuser(res.data)
      	setload(true)
      })
   },[])
  const erreur = () => toast.error("Erreur!Entrez des donnees valides!",{
		position:toast.POSITION.TOP_CENTER,
		autoClose:false
	  });
   const notify = () => toast.success("Compte bien active!",{
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
  	if(data.nature===""||data.numero===""||data.nature.match(/^ *$/)!== null||data.numero.length<8){
       erreur()
       return;
  	}
  axiosInstance
  .post('staff/activationduclient/',{id:id,nature:data.nature,numero:data.numero})
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
 history.go(-2)
}


return(
	<div>
	{load && nom===user.prenom+""+user.nom?
   	<div>
 <button className='btndrop' onClick={annulation}> <ArrowBackIcon/> </button>
  <Divider/>
  <div className="w3-bar-item w3-center">
  <h3 className='centerbtn'> <img src={logo} className='logoimglogin'/>
  <strong>Activation compte  client
  </strong></h3>
  </div>
   <div className='centerbtn'> 
   <IonCard className='cardverificationtransaction'>
    <h3> Confirmation de l activation </h3> 
    </IonCard> 
 <Divider/>
  <h2 className='centerbtn'><strong> Vérification des données du client</strong></h2>
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
 {user.document_verif?
 <IonCol size='12'>
 <h2 className='centerbtn'>client deja actif</h2>
 </IonCol>:
 <IonCol size='12'>
 <form onSubmit={confirmation} className='divform'>
 <IonRow>
  <IonCol size='8'  >
   <p className='centerbtn'><label><strong>Nature du document<b className='redstyle'>*</b></strong></label></p>
   <p className='centerbtn'>
    <select
    onChange={handledata}
    name='nature'
    required
     >
   <option  value="" disabled selected >Nature du document d identification</option>
   <option value='passport' >Passport</option>
   <option value='piece d identite'>Piece d identite</option>
   </select>
   </p>
  </IonCol>
  <IonCol size='8'>
  <p className='centerbtn'><label> <strong>Numero du document <b className='redstyle'>*</b> </strong></label></p>
  <input class="w3-input w3-border centerbtn" name='numero'
 onChange={handledata} required 
    />  
 </IonCol>
  <IonCol size='8' className='centerbtn'>
  <Button
   type="submit"
    style={{
    color:"white",
    backgroundColor: "#4B0082",}} variant="contained" >
    Valider
     </Button>
 </IonCol>
 </IonRow>
 </form>
 </IonCol>}
 </IonRow>
 </IonGrid>

  </div>
   	</div>

   	:null}
	</div>

);
}

export default ConfirmationActivation;