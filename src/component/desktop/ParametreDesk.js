import { IonButton, IonCard,IonItem,IonLoading,IonModal, IonText,IonIcon,IonCardContent, IonCardTitle} from '@ionic/react'
import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../../axios'
import {toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import '../style.css'
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {useTheme} from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { useHistory } from 'react-router-dom';
import {timeOutline} from 'ionicons/icons'

function ParametreDesk() {

    const  [user, setuser] = useState([])
    const  [load, setload] = useState(false)
    const history=useHistory()
    const theme = useTheme();
    const [showLoading, setShowLoading] = useState(true);
    const  [modal, setmodal] = useState(false)
    const  [modal2, setmodal2] = useState(false)
    const  [data, setdata] = useState({
        nom:'',
        prenom:'',
        tel:'',
        code:'',
        id:''
    })

    useEffect(()=>{
        getuser()
    },[])

    const getuser=()=>{
        axiosInstance
        .get('client/getuser/')
        .then(res=>{

          setuser(res.data)
          setload(true)
        })
    }
    const handlecode=e=>{
        setdata({...data,code:e.target.value})
      }

    const erreur = () => toast.error("Envoi effectué avec succes!",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
    const handledata=e=>{
        setdata({
            ...data,[e.target.name]:e.target.value.trim()
        })
     }
     const verif=(e)=>{
      e.preventDefault()
   let formdata=new FormData()
   formdata.append('phone',data.tel)
   axiosInstance
   .post('/client/verifphone/',formdata)
   .then(res=>{
       setdata({
           ...data,id:res.data.id
       })
       setmodal(false)
       setmodal2(true)
        
   })
   .catch(()=>{
       return;
     })
     }
     const deconnexion=()=>{
      localStorage.removeItem('__jdkm__');
       localStorage.removeItem('__jvqm__');
       axiosInstance.defaults.headers['Authorization'] = null;
       history.push('/')
       window.location.reload()
       
   }
     const handlesubmit=e=>{
        e.preventDefault()
        let formdata=new FormData()
        if(data.nom===""){
           formdata.append('nom',user.nom)
         }
         else{
           formdata.append('nom',data.nom)
         }
       if(data.prenom===""){
           formdata.append('prenom',user.prenom)
         }
         else{
           formdata.append('prenom',data.prenom)
         }
         if(data.tel===""){
           formdata.append('phone',user.phone)
         }
         else{
           formdata.append('phone',data.tel)
         }
        formdata.append('id',data.id)
        formdata.append('code',data.code)
       axiosInstance
       .put('client/modifcred/modif/',formdata,{headers: 
           {'content-type': 'multipart/form-data'}})
       .then((res=>{
          // console.log(res.data)
          getuser()
         // setmodal(false)
          setmodal2(false)
          getuser()
   
       }))
       .catch(()=>{
           erreur()
       })
       
    }
    const handleclick=()=>{
        setmodal(true)
    }
    const handletime=()=>{
      setmodal2(false)
      setmodal(false)
      
    }

    return (
        <div className='desk'>
        <div className='content'>
        <IonCard>
          <IonCardTitle>Politique de confidentialite</IonCardTitle>
        <IonCardContent>Notre politique de confidentialite s intitule ...</IonCardContent> 
        </IonCard> 
            {load?
            <div>
            <IonCard>
            <IonCardTitle>Compte</IonCardTitle>
            <IonCardContent>
             <IonItem>{user.prenom} {user.nom}</IonItem>
             <IonItem >{user.phone} </IonItem>
             <IonButton onClick={handleclick} className='ion-margin-ion-padding'>Modifier</IonButton>
             </IonCardContent>
            </IonCard><br/><br/>

            <button className="w3-button w3-khaki" onClick={deconnexion} color='red' style={{color:'red'}}>
              Deconnexion</button>
            </div>:<IonLoading
            cssClass='my-custom-class'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Chargement...'}
            duration={5000}
            />}
     <IonModal isOpen={modal}   >
     <div className="navdrawer"> 
     <IconButton onClick={()=>{setmodal(false);}}  >
    {theme.direction === 'ltr' ? <p style={{color:'red'}} ><CloseIcon/></p> : <ChevronRightIcon />}
    </IconButton>
    </div>
    <div className='divform'>
      <p>Vos nouveaux credentiels</p>
        <form  className='form' onSubmit={ verif}>
        <p style={{textAlign:'center'}}>  <label><b>Prenom</b></label></p>
        <input className="w3-input w3-border" type='text' onChange={handledata} name='prenom' required />
        <p  style={{textAlign:'center'}}>  <label><b>Nom</b></label></p>
        <input  className="w3-input w3-border"  type="text"  onChange={handledata} name='nom' required />
        
        <p style={{textAlign:'center'}}>  <label><b>Numero de telephone </b></label></p>
        <input className="w3-input w3-border" type="tel" placeholder='+221' onChange={handledata}  name='tel' required />
        <p style={{textAlign:'center'}}> <button className="w3-button w3-round w3-indigo w3-margin w3-center" type="submit" >
        Changer
        </button> </p>
        </form>
        </div>
        <p className='copyr'>GaalguiMoney &reg; {new Date().getFullYear()}</p>
       </IonModal>

        <IonModal isOpen={modal2}>
          <div className='divform'>
        <form className='form' onSubmit={handlesubmit}>
        <p style={{textAlign:'center'}}>  <label><b>Code de verification du numero de telephone</b></label></p>
        <div className="w3-third">
        <input  className="w3-input w3-border" type="number" onChange={handlecode}  required />
        </div><br/>
        <p style={{textAlign:'center'}}>
        <button className="w3-button w3-round w3-red  " type="submit" >
        Confirmer
        </button>
        <button style={{marginLeft:'3px'}} className="w3-button w3-round w3-purple " onClick={handletime}  >
        Annuler
        </button>
        </p>
        </form>
        </div>
        <p className='copyr'>GaalguiMoney &reg; {new Date().getFullYear()}</p>
        </IonModal>
        </div> 
        </div>
       
    )
}

export default ParametreDesk
