import React,{useState,useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {toast } from 'react-toastify'
import axiosInstance from '../axios'
import {useHistory} from 'react-router-dom' 
import FinalisationInscriptionDesk from '../component/desktop/FinalisationInscriptionDesk'
import {IonLoading} from '@ionic/react'
import axios from 'axios'
import FinalisationInscriptionMobile from '../component/mobile/FinalisationInscriptionMobile'


 
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

function FinalisationInscription(props) {
  let id=props.match.params.id
  const history=useHistory()
  const  [showpassword, setshowpassword] = useState(false)
  const  [showpasswordcon, setshowpasswordcon] = useState(false)
  const  [showLoading, setShowLoading] = useState(false)
  const [load,setload]=useState(false)
  const  [modal, setmodal] = useState(false)
  const [formData, updateFormData] = useState({
	phone: '',
	prenom: '',
  nom:'',
	password: '',
	passwordcon:'',
	});

useEffect(()=>{
	getcodephone()
},[])
const getcodephone=()=>{
	axios
	.post('http://127.0.0.1:8000/api/client/getuserphone/',{id:id})
	.then(res=>{
		//console.log(res.data)
		updateFormData({...formData,phone:res.data.phone})
		setload(true)
	})
}
 const erreurmdp = () => toast.error("Erreur!Les mots de passe ne matchent pas ",{
   position:toast.POSITION.TOP_CENTER,
   autoClose:false
});
	  
  const erreurlg = () => toast.error("Erreur!Le mot de passe  doit etre de 5 chiffres",{
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
  
  
    const handledata = (e) => {
    	//console.log(e.target.value)
     updateFormData({
     	...formData,
     	[e.target.name]: e.target.value.trim(),
     });
};
const handlesubmit=e=>{
	e.preventDefault()
	if (formData.nom.trim()===""||formData.prenom.trim()===""||formData.password.trim()===""||
		formData.nom===null||formData.prenom===null||formData.password===null) {
     erreurvide()
 return;
	}
 if(formData.password!==formData.passwordcon){
    erreurmdp()
    return;
 }
 if(formData.password.length!==5||isNaN(formData.password)){
  erreurlg()
  return

}

  
else{
  axios
  .post('http://127.0.0.1:8000/api/client/finalisationinscription/',{
	phone:formData.phone,
	prenom:formData.prenom,
	nom:formData.nom,
	password:formData.password
	})
	.then(res=>{
		console.log(res.data)
		connexion()
})
.catch(err=>{
 incorect()
 return
	})
	
}
	
	
}

const handlekeypress=e=>{
   if (e.key ==="-"||e.key==="+"||e.key==="e"||e.key==="E"||isNaN(e.key)) {
        e.preventDefault()
        return;
      }
   if (e.which === 8) {
          return;
        }
   if (e.which < 48 || e.which > 57) {
          e.preventDefault();
          return;
     }
  }
const handlepaste=e=>{
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = parseFloat(clipboardData.getData('text'));
  const data=clipboardData.getData('text')

    if (pastedData < 0||data==="e"||data==="E"||data==="-"||data==="+"||isNaN(pastedData)) {
        e.preventDefault();
        return;
    }


  }
 const connexion=()=>{
	axiosInstance
			//.post(`https://verysoongaalguimoney.herokuapp.com/api/client/login/`, {
  .post('client/login/',{
		phone: formData.phone,
	    password: formData.password,
			})
	.then((res) => {
	localStorage.setItem('__jmdf__', res.data.access);
	localStorage.setItem('__jvmdf__', res.data.refresh);
	axiosInstance.defaults.headers['Authorization'] =
	'Bearer ' + localStorage.getItem('__jmdf__');
     window.location.reload()
     history.push('/accueil')
 }) 
.catch(()=>{
	return;
	 })

}
const classes = useStyles();
return(
 <div>
  {load?
  <>
  {!showLoading?
  	<div>
  	<FinalisationInscriptionDesk classes={classes} handledata={handledata} handlesubmit={handlesubmit}
  	handlekeypress={handlekeypress} handlepaste={handlepaste} showpassword={showpassword}
  	 setshowpassword={setshowpassword}
  	 />
  	<FinalisationInscriptionMobile classes={classes} handledata={handledata} handlesubmit={handlesubmit}
  	handlekeypress={handlekeypress} handlepaste={handlepaste} showpassword={showpassword}
  	 setshowpassword={setshowpassword}/>
  	</div>:
  <IonLoading
    cssClass='my-custom-class'
    isOpen={showLoading}
    onDidDismiss={() => setShowLoading(false)}
    message={'Chargement...'}
    duration={5000}
    />}
  </>:null}
 </div>

	)
}


export default FinalisationInscription



