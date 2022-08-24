import React, {useState,Fragment} from 'react'
import InscriptionDesk from '../component/desktop/InscriptionDesk'
import InscriptionMobile from '../component/mobile/InscriptionMobile'
import { makeStyles } from '@material-ui/core/styles';
import {toast } from 'react-toastify'
import axiosInstance from '../axios'
import {useHistory} from 'react-router-dom' 



const useStyles = makeStyles((theme) => ({
   paper: {
	marginTop: '2',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
  color:'black'
	},
	avatar: {
	margin: theme.spacing(1),
	backgroundColor:  theme.palette.warning.dark,
	},
	form: {
	width: '100%', // Fix IE 11 issue.
	marginTop: theme.spacing(3),
	},
	submit: {
	margin: theme.spacing(3, 0, 2),
	},
}));
export default function  Inscription() {
  const history=useHistory()
  const  [showpassword, setshowpassword] = useState(false)
  const  [showpasswordcon, setshowpasswordcon] = useState(false)
  const  [modal, setmodal] = useState(false)
  const [formData, updateFormData] = useState({
	phone: '',
	prenom: '',
  nom:'',
	password: '',
	passwordcon:'',
	});


 const erreurmdp = () => toast.error("Erreur!Les mots de passe ne sont pas conformes ",{
   position:toast.POSITION.TOP_CENTER,
   autoClose:false
});
	  
  const erreurlg = () => toast.error("Erreur!Le mot de passe ne doit pas etre inferieur a 8 caracteres",{
   position:toast.POSITION.TOP_CENTER,
	autoClose:false
	  });
  const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
	  });
    const incorect = () => toast.error("Erreur!Donnees invalides!",{
     position:toast.POSITION.TOP_CENTER,
     autoClose:false
 });
   const invalidphone = () => toast.error("Numero de telephone invalide!",{
     position:toast.POSITION.TOP_CENTER,
     autoClose:false
 });
  
    const handledata = (e) => {
     updateFormData({
     	...formData,
     	[e.target.name]: e.target.value.trim(),
     });
};
 
const handlephone=e=>{
  updateFormData({
    ...formData,phone:e
  })
}

const handleSubmit = (e) => {
   e.preventDefault();
    
    if(formData.nom===""||formData.nom.match(/^ *$/)!== null){
    	erreurvide()
    	return;
    }
   if(formData.prenom===""||formData.prenom.match(/^ *$/)!== null){
   	erreurvide()
    	return;
   }
   if(formData.password===""||formData.password.match(/^ *$/)!== null){
   	erreurvide()
    	return;
   }
   if(formData.passwordcon===""||formData.passwordcon.match(/^ *$/)!== null){
   	erreurvide()
    	return;
   }

    if(formData.password.length<8||formData.passwordcon<8){
    	erreurlg()
    	return;
    }
    if(formData.password!==formData.passwordcon){
    	erreurmdp()
    	return;
    }

   	axiosInstance
   	//.post('api/client/registration/', {
   	.post('client/registration/',{
   		phone: formData.phone,
		prenom: formData.prenom,
		nom: formData.nom,
		password:formData.password,
		})

	.then((res) => {
          history.push(`/phoneconfirmation/${res.data.code_id}/${res.data.id}/${res.data.prenom+""+res.data.nom}`)
	  //console.log(res.data)
	})
	.catch(()=>{
	   incorect()
	   return;
	})
};
	

const classes = useStyles();
   return(
    <Fragment>
   <InscriptionDesk handleSubmit={handleSubmit} handledata={handledata} 
   showpasswordcon={showpasswordcon} showpassword={showpassword} 
   setshowpasswordcon={setshowpasswordcon} setshowpassword={setshowpassword} classes={classes}
   data={FormData} handlephone={handlephone}/>
  <InscriptionMobile handleSubmit={handleSubmit} handledata={handledata} 
   showpasswordcon={showpasswordcon} showpassword={showpassword} data={FormData} handlephone={handlephone}
   setshowpasswordcon={setshowpasswordcon} setshowpassword={setshowpassword} classes={classes}s/>	
  </Fragment>
        )
    }



