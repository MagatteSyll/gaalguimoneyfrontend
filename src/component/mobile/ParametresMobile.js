import React,{useEffect,useState,Fragment} from 'react'
import axiosInstance from '../../axios'
import  {useHistory} from 'react-router-dom'
import {IonButton, IonCard, IonCardContent, IonModal, IonCardTitle, IonItem,IonLoading} from '@ionic/react'
import '../style.css'


//Les parametres sur mobile
function ParametresMobile(props) {
    const  [user, setuser] = useState([])
    const history=useHistory()
    const  [modal, setmodal] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    const  [load, setload] = useState(false)


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

     const deconnexion=()=>{
       localStorage.removeItem('__jdkm__');
        localStorage.removeItem('__jvqm__');
        axiosInstance.defaults.headers['Authorization'] = null;
        history.push('/')
        window.location.reload()
        
    }
    const handlemodif=()=>{
        setmodal(true)
    }
    return (
        <Fragment>
            {load?
        <div className='mobile'>
        <IonCard>
           <IonCardContent>Notre politique de confidentialite s intitule ...</IonCardContent> 
        </IonCard> 
        <IonCard>
            <IonCardTitle>Compte</IonCardTitle>
            <IonCardContent>
                <IonItem>{user.prenom} {user.nom}</IonItem>
                <IonItem>{user.phone}</IonItem>
                <IonButton onClick={handlemodif}>Modifier</IonButton>
            </IonCardContent>
        </IonCard> 
        <button className="w3-button w3-khaki" onClick={deconnexion} color='red' style={{color:'red'}}>
              Deconnexion</button>
       
        </div>:<IonLoading
            cssClass='my-custom-class'
            isOpen={showLoading}
            onDidDismiss={() => setShowLoading(false)}
            message={'Chargement...'}
            duration={5000}
            />}

       <IonModal 
         isOpen={modal}
         cssClass='my-custom-class'
         swipeToClose={true}
         onDidDismiss={() => setmodal(false)}>
       
        </IonModal>
        </Fragment>
    )
}

export default ParametresMobile
