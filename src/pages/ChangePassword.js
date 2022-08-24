import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import IconButton from "@material-ui/core/IconButton";
import {IonText} from '@ionic/react'
import {useState,useEffect} from 'react'
import Input from "@material-ui/core/Input";
import axiosInstance from '../axios'
import {toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'
import React from 'react'
import logo from '../component/asset/logo.jpg'
import Typography from '@material-ui/core/Typography';
import Button from '@mui/material/Button';
import PhoneInput from 'react-phone-number-input'


function ChangePassword(props) {
	let id=props.match.params.id
	 const history=useHistory()
	 const  [showpassword, setshowpassword] = useState(false)
     const  [showpasswordcon, setshowpasswordcon] = useState(false)
     const [load,setload]=useState(false)
     const [data,setdata]=useState({
     	password:'',
     	passwordcon:''
     })

   const erreurlg = () => toast.error("Erreur!Le mot de passe ne doit pas etre inferieur a 8 caracteres",{
   position:toast.POSITION.TOP_CENTER,
	autoClose:false
	  });
  const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
	  });
  const erreurmdp = () => toast.error("Erreur!Les mots de passe ne sont pas conformes ",{
   position:toast.POSITION.TOP_CENTER,
   autoClose:false
});
   const notify = () => toast.success("Mot de passe bien modifié.",{
   position:toast.POSITION.TOP_CENTER,
   autoClose:false
});
	const handledata=e=>{
       setdata({...data,[e.target.name]: e.target.value.trim()})
	}
	 useEffect(()=>{
    	axiosInstance
    	.post('client/verificationcodeid/',{id:id})
    	.then(res=>{
          setload(res.data)
    	})
    },[])

const handlesubmit=e=>{
  e.preventDefault()
 if(data.password===""||data.password.match(/^ *$/)!== null){
   	erreurvide()
    	return;
   }
   if(data.passwordcon===""||data.passwordcon.match(/^ *$/)!== null){
   	erreurvide()
    	return;
   }

    if(data.password.length<8||data.passwordcon<8){
    	erreurlg()
    	return;
    }
    if(data.password!==data.passwordcon){
    	erreurmdp()
    	return;
    }
   axiosInstance
   .put('client/resetpassword/reseter/',{password:data.password,id:id})
   .then(()=>{
   	  history.push('/connexion')
   	  notify()
   })
}
	
return(
 <div className='container'>
 {load?
 	<div className='container'>
 	 <h4 className='mt-3'>
   <img src={logo} className='logoimglogin'/> <strong> GaalguiMoney</strong>
   </h4>
 <form onSubmit={handlesubmit} className='formchangepassword'>
 <p className='centerbtn'><label><b>Nouveau mot de passe<IonText className="asterix">*</IonText></b></label></p>
	<p>
	<Input
	className="w3-input w3-border" 
	required
	//style={{width:"70%"}}
	id="password"
	type={showpassword?'text':'password'}
	name="password"
	autoComplete="password"
	onChange={handledata}
	placeholder="*********"
	endAdornment={
	<InputAdornment position="end">
	<IconButton
	onClick={()=>setshowpassword(!showpassword)}
	>
	{showpassword ? <Visibility /> : <VisibilityOff />}
	 </IconButton>
	</InputAdornment>}
	/>
	</p>
	<p className='centerbtn'><label><b>Confirmation du mot de passe<IonText className="asterix">*</IonText></b>
		</label></p>
		<p>
		<Input
		className="w3-input w3-border" 
		required
		id="password"
		type='password'
		name="passwordcon"
		autoComplete="passwordcon"
		onChange={handledata}
		placeholder="*********"
		//style={{width:"70%"}}
	/>
	</p>
	<p  className='centerbtn'>
	 <Button
   type="submit"
   style={{
   color:"white",
   backgroundColor: "#4B0082",}} variant="contained" >
   Confirmer </Button>
	</p>
 </form>
 </div>:null}
 </div>
);
}


export default ChangePassword;