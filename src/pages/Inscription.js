import React, {useState,Fragment} from 'react'
import InscriptionDesk from '../component/desktop/InscriptionDesk'
import InscriptionMobile from '../component/mobile/InscriptionMobile'
import { makeStyles } from '@material-ui/core/styles';
import {toast } from 'react-toastify'
import axiosInstance from '../axios'
import {useHistory} from 'react-router-dom' 
import axios from 'axios'
import {IonLoading} from '@ionic/react'


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
  const [formData, updateFormData] = useState({
	phone: '',
	});
  const [showLoading, setShowLoading] = useState(true);


 
  const erreurvide = () => toast.error("Veuillez remplir tous les champs! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
	  });
 const incorect = () => toast.error("Erreur!Donnees invalides!",{
     position:toast.POSITION.TOP_CENTER,
     autoClose:false
 });
  /*

  const erreurmdp = () => toast.error("Erreur!Les mots de passe ne sont pas conformes ",{
   position:toast.POSITION.TOP_CENTER,
   autoClose:false
});
    
  const erreurlg = () => toast.error("Erreur!Le mot de passe ne doit pas etre inferieur a 8 caracteres",{
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
};*/
 
const handlephone=e=>{
  updateFormData({
    ...formData,phone:e
  })
}

const handleSubmit = (e) => {
   e.preventDefault();
   setShowLoading(true)
  if(formData.phone.trim()===""||formData.phone== null){
      setShowLoading(false)
    	erreurvide()
    	return;
    }
    axios
    .post('http://127.0.0.1:8000/api/client/getphonecode/', {phone: formData.phone})
   //	axiosInstance
  // 	.post('client/getphonecode/',{
   //	phone: formData.phone,
		//}

	.then((res) => {
     console.log(res.data)
    history.push(`/codeverificationphone/${res.data.id}`)
    setShowLoading(false)
	 
	})
	.catch(()=>{
     setShowLoading(false)
	   incorect()
	   return;
	})
};
	

const classes = useStyles();
   return(
    <Fragment>
    {!showLoading?
    <>
   <InscriptionDesk handleSubmit={handleSubmit}  classes={classes}
   data={FormData} handlephone={handlephone}/>
  <InscriptionMobile handleSubmit={handleSubmit}  classes={classes}
   data={FormData} handlephone={handlephone} />	
   </>:
   <IonLoading
    cssClass='my-custom-class'
    isOpen={showLoading}
    onDidDismiss={() => setShowLoading(false)}
    message={'Chargement...'}
    duration={5000}
     />}
  </Fragment>
        )
    }



{

/*
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
    }*/

  }