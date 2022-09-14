import React,{useState,useEffect,Fragment} from 'react'
import {BrowserRouter,Switch,Route,useHistory} from 'react-router-dom';
import Accueil from './pages/Accueil';
import Connexion from './pages/Connexion';
import SideBar from './component/desktop/SideBar';
import Nav from './component/NavBar';
import EnvoiDirect from './pages/EnvoiDirect';
import Modal from 'react-modal'
import Inscription from './pages/Inscription';
import EnvoiViaCode from './pages/EnvoiViaCode';
import axiosInstance from './axios';
import EnvoiCode from './Staf/EnvoiCode';
import Depot from './Staf/Depot';
import Retrait from './Staf/Retrait';
import RetraitParCode from './Staf/RetraitParCode';
import {toast} from 'react-toastify'
import Footer from './component/Footer'
import Historique from './pages/Historique';
import Parametres from './pages/Parametres';
import PointAcces from './pages/PointAcces';
import ResetPassword from './pages/ResetPassword';
import HistoriqueStaff from './Staf/HistoriqueStaff';
import './component/style.css'
import Officiel from './pages/Officiel';
import CompteProfessionnel from './Staf/CompteProfessionnel';
import CompteBusiness from './Staf/CompteBusiness';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import {IonLoading} from '@ionic/react'
import Tarif from './pages/Tarif'
import Carriere from './pages/Carriere'
import Professionnel from './pages/Professionnel'
import ServiceClient from './pages/ServiceClient';
import GaalguiPay from './pages/GaalguiPay';
import Recu from './pages/Recu';
import SuccesEnvoiDirect from './pages/SuccesEnvoiDirect';
import SuccessEnvoiCode from './pages/SuccessEnvoiCode';
import RecuDepot from './Staf/RecuDepot';
import RecuRetrait from './Staf/RecuRetrait'
import RecuEnvoiCode from './Staf/RecuEnvoiCode';
import RecuRetraitCode from './Staf/RecuRetraitCode';
import { Redirect } from 'react-router'
import VerificationPhone from './pages/VerificationPhone'
import ConfirmationEnvoiDirect from './pages/ConfirmationEnvoiDirect'
import ConfirmationEnvoiCode from './pages/ConfirmationEnvoiCode'
import ConfirmationResetPassword from './pages/ConfirmationResetPassword'
import ChangePassword from './pages/ChangePassword'
import ConfirmationDepot from './Staf/ConfirmationDepot'
import ConfirmationRetrait from './Staf/ConfirmationRetrait'
import ConfirmationEnvoiCodeStaf from './Staf/ConfirmationEnvoiCodeStaf'
import ConfirmationRetraitCode from './Staf/ConfirmationRetraitCode'
import ActivationCompte from './Staf/ActivationCompte'
import ConfirmationActivation from './Staf/ConfirmationActivation'
import DesactivationClient from './Staf/DesactivationClient'
import ConfirmationDesactivation from './Staf/ConfirmationDesactivation'
import ReactivationCompte from './Staf/ReactivationCompte'
import ConfirmationReactivation from './Staf/ConfirmationReactivation'
import NouvelMembreStaff from './Staf/NouvelMembreStaff'
import ConfirmationNouvelMembre from './Staf/ConfirmationNouvelMembre'
import AjoutImagePub from './Staf/AjoutImagePub'
import QrcodeBusiness from './Staf/QrcodeBusiness'
import Sdepay from './pay/Sdepay'
import SuspensionBusiness from './Staf/SuspensionBusiness'
import ConfirmationSuspension from './Staf/ConfirmationSuspension'
import SuspensionProfessionnel from './Staf/SuspensionProfessionnel'
import ConfirmationSuspensionProfessionnel from './Staf/ConfirmationSuspensionProfessionnel'
import QrcodeProfessionnel from './Staf/QrcodeProfessionnel'
import SuccessPaySDE from './pay/SuccessPaySDE'
import LesDepots from './comptable/LesDepots'
import LesEnvois from './comptable/LesEnvois'
import LesEnvoisCode from './comptable/LesEnvoisCode'
import LesRetraits from './comptable/LesRetraits'
import LesRetraitsCode from './comptable/LesRetraitsCode'
import LesPayements from './comptable/LesPayements'
import AnnulationGaalguiShop from './comptable/AnnulationGaalguiShop'
import LesPayementGaalguiShop from './comptable/LesPayementGaalguiShop'
import SuspensionPeriodic  from './comptable/SuspensionPeriodic'
import PayementPeriodic from './comptable/PayementPeriodic'
import QrCodePage from './pages/QrCodePage'
import FinalisationInscription from './pages/FinalisationInscription'
import CodeConfirmation from './pages/CodeConfirmation'
import ConfirmationSommeDirect from './pages/ConfirmationSommeDirect'
import Cv from './pages/cv'





Modal.setAppElement('#root')
toast.configure()

function App() {
  const  [islog, setislog] = useState(false)
  const  [isstaf, setisstaf] = useState(false)
  const  [user, setuser] = useState([])
  const [userload,setuserload]=useState(false)
  const  [data, setdata] = useState()
  const  [logload, setlogload] = useState(false)
  const [stafload,setstafload]=useState(false)
  const [showLoading, setShowLoading] = useState(true);
  const history=useHistory()

    const getuser=()=>{
      axiosInstance
      .get('client/getuser/')
      .then(res=>{
        setuser(res.data)
       })
     }

  
  useEffect(()=>{
    axiosInstance
    .get('client/islog/')
    .then(res=>{
      //console.log(res.data)
      setislog(res.data)
      if(res.data==true){
        getuser()
        setlogload(true)
      }
    else{
    setlogload(true)
    }

    })
  },[])


  const client=()=>(
    <Fragment> 
    <Fragment>
    <Nav islog={islog} isstaf={user.is_staff} user={user}  />
   <SideBar islog={islog} getuser={getuser} user={user}  isstaf={user.is_staff}/>
    <div >
   <Route exact path='/accueil' render={(props) =>(islog?<Accueil {...props} isstaf={user.is_staff} user={user}/>:null)}/>
   {islog?
    <>
   <Route exact path='/transaction' render={(props) =>(user.is_staff?null:<Historique {...props} />)}/> 
    <Route exact path='/envoyer' 
   render={(props) => (user.is_staff?null:<EnvoiDirect {...props}  getuser={getuser} />)}/>
    <Route exact path='/confirmationsommenvoidirect/:id' 
   render={(props) => (user.is_staff?null:<ConfirmationSommeDirect {...props} />)} />
    <Route exact path='/confirmationenvoidirect/:id/:nom' 
   render={(props) => (user.is_staff?null:<ConfirmationEnvoiDirect {...props}  getuser={getuser}/>)} />
    <Route exact path='/confirmationenvoicode/:id/:nom' 
   render={(props) => (user.is_staff?null:<ConfirmationEnvoiCode {...props}  getuser={getuser}/>)} />
    <Route exact path='/envoiviacode' render={(props) =>
     (user.is_staff?null:<EnvoiViaCode  {...props}  getuser={getuser}  />)} />
   <Route exact path='/depot' render={(props) =>(user.is_staff?<Depot {...props}  />:<Redirect to='/'/>)}/>
  <Route exact path='/retrait'  render={(props) =>(user.is_staff?<Retrait {...props}    />:null)}/>
   <Route exact path='/viacode' 
     render={(props) =>(user.is_staff?<EnvoiCode {...props}   />:null)}/>
   <Route exact path='/retraitparcode' 
     render={(props) =>(user.is_staff?<RetraitParCode {...props}   />:null)}/>
  <Route exact path='/activationcompteclient' 
     render={(props) =>(user.is_staff?<ActivationCompte {...props}    />:null)}/>
  <Route exact path='/desactivationcompteclient' 
   render={(props) =>(user.is_staff_bureau?<DesactivationClient {...props}   />:null)}/>
  <Route exact path='/reactivationcompte' 
   render={(props) =>(user.is_staff_bureau?<ReactivationCompte {...props}    />:null)}/>
  <Route exact path='/nouvelmembrestaff' 
   render={(props) =>(user.is_staff_manager?<NouvelMembreStaff {...props}    />:null)}/>
  <Route exact path='/ajoutimagepub' 
   render={(props) =>(user.is_staff_bureau?<AjoutImagePub {...props}    />:null)}/>
  <Route exact path='/comptebusiness'  
  render={(props) =>(user.is_staff_bureau?<CompteBusiness {...props}  />:null)}/>
  <Route exact path='/suspensioncomptebusiness'  
  render={(props) =>(user.is_staff_bureau?<SuspensionBusiness {...props}   />:null)}/>
  <Route exact path='/compteprofessionnel'  
  render={(props) =>(user.is_admin?<CompteProfessionnel {...props}   />:null)}/>
  <Route exact path='/suspensionprofessionnel'  
  render={(props) =>(user.is_admin?<SuspensionProfessionnel {...props}   />:null)}/>
   </>:
  <Redirect to='/' />}

  <Footer  isstaf={user.is_staff}/>

  </div>
   
</Fragment>
  </Fragment>

  )
  return (
    <div>
     {logload?
    <BrowserRouter>
    <Switch>  
    <Route exact path='/connexion'  render={(props) => (islog?<Redirect to='/accueil'/>:<Connexion  {...props} staf={user.is_staff} />)}/>
    <Route exact path='/'  render={(props) => <Officiel  {...props} staf={user.is_staff} />}/>
    <Route exact path='/phoneconfirmation/:code/:id/:nom' 
    render={(props)=>(islog?<Redirect to='/accueil'/>:
    <VerificationPhone {...props}/>)} />
    <Route exact path='/resetpassword/:id/codeconfirmation' 
    render={(props)=>(islog?<Redirect to='/accueil'/>:
    <ConfirmationResetPassword {...props}/>)} />
    <Route exact path='/changepassword/:id/resetpassword' 
    render={(props)=>(islog?<Redirect to='/accueil'/>:
    <ChangePassword {...props}/>)}/> 
    <Route exact path='/successenvoi/:id/:nature'  render={(props) =>(islog?<SuccesEnvoiDirect />:null)}/>
    <Route exact path='/successenvoicode/:id/:nature'  render={(props) =>(islog?<SuccessEnvoiCode/>:null)}/>
    <Route exact path='/recu/:id/:transaction'  render={(props) =>  (islog?<Recu />:null)}/>
    <Route exact path='/inscription' render={(props)=>(islog?<Redirect to='/accueil'/>
    :<Inscription {...props}/>)}/>
    <Route exact path='/codeverificationphone/:id' render={(props)=>(islog?<Redirect to='/accueil'/>
    :<CodeConfirmation {...props}/>)}/>
    <Route exact path='/finalisationinscription/:id' render={(props)=>(islog?<Redirect to='/accueil'/>
    :<FinalisationInscription {...props}/>)}/>
    <Route exact path='/resetpassword' render={(props)=>(islog?<Redirect to='/accueil'/>:<ResetPassword {...props}/>)} />
    <Route exact path='/successviacode/:id/:nature'  render={(props) =>(user.is_staff?<RecuEnvoiCode {...props}  />:null)}/>
    <Route exact path='/confirmationdepot/:id/:nature' 
   render={(props) => (user.is_staff?<ConfirmationDepot {...props}  />:null)} />
    <Route exact path='/confirmationretrait/:id/:nature' 
     render={(props) => (user.is_staff?<ConfirmationRetrait {...props}  />:null)} />
    <Route exact path='/confirmationenvoiviacodeworker/:id/:nature' 
     render={(props) => (user.is_staff?<ConfirmationEnvoiCodeStaf {...props}  />:null)} />
    <Route exact path='/confirmationretraitcode/:id/:nature' 
     render={(props) => (user.is_staff?<ConfirmationRetraitCode {...props}  />:null)} />
    <Route exact path='/confirmationactivation/:id/:nom' 
   render={(props) => (user.is_staff?<ConfirmationActivation {...props}  />:null)} />
    <Route exact path='/confirmationdesactivation/:id/:nom' 
   render={(props) => (user.is_staff_bureau?<ConfirmationDesactivation {...props}   />:null)} />
    <Route exact path='/confirmationreactivation/:id/:nom' 
   render={(props) => (user.is_staff_bureau?<ConfirmationReactivation {...props}   />:null)} />
   <Route exact path='/qrcodebusiness/:id/:nom' 
   render={(props) => (user.is_staff_bureau?<QrcodeBusiness {...props}   />:null)} />
    <Route exact path='/qrcodeprofessionnel/:id/:nom' 
   render={(props) => (user.is_admin?<QrcodeProfessionnel {...props}   />:null)} />
    <Route exact path='/confirmationsuspensionbusiness/:id/:nom' 
   render={(props) => (user.is_staff_bureau?<ConfirmationSuspension {...props}  />:null)} />
    <Route exact path='/confirmationsuspensionprofesionnel/:id/:nom' 
   render={(props) => (user.is_admin?<ConfirmationSuspensionProfessionnel {...props}  />:null)} />
   <Route exact path='/confirmationnouvelstaff/:id/:nom' 
   render={(props) => (user.is_staff_manager?<ConfirmationNouvelMembre {...props}  />:null)} />
    <Route exact path='/successdepot/:id/:nature' render={(props) =>(user.is_staff?<RecuDepot {...props}  />:<Officiel/>)}/>
    <Route exact path='/historique' render={(props) =>(user.is_staff?<HistoriqueStaff {...props}  />:<Officiel/>)}/>
    <Route exact path='/successretrait/:id/:nature'  render={(props) =>(user.is_staff?<RecuRetrait {...props}   />:null)}/>
    <Route exact path='/successretraitcode/:id/:nature'  render={(props) =>(user.is_staff?<RecuRetraitCode {...props}   />:<Officiel/>)}/>
    <Route exact path='/nostarifs' component={Tarif}/>
    <Route exact path='/carriere' component={Carriere}/>
    <Route exact path='/pourprofessionnel' component={Professionnel}/>
    <Route exact path='/serviceclient' component={ServiceClient}/>
    <Route exact path='/gaalguimoneypay' component={GaalguiPay}/>
    <Route exact path='/nospointdacces' component={PointAcces}/>
    <Route exact path='/comptabilitedepot'  render={(props) =>  (user.is_staff_comptable?<LesDepots
    />:null)}/>
    <Route exact path='/comptabiliteretrait'  render={(props) =>  (user.is_staff_comptable?<LesRetraits
    />:null)}/>
    <Route exact path='/comptabiliteretraitcode'  render={(props) =>  (user.is_staff_comptable?<LesRetraitsCode
    />:null)}/>
    <Route exact path='/comptabilitenvoi'  render={(props) =>  (user.is_staff_comptable?<LesEnvois
    />:null)}/>
    <Route exact path='/comptabilitenvoicode'  render={(props) =>  (user.is_staff_comptable?<LesEnvoisCode
    />:null)}/>
    <Route exact path='/comptabilitepayement'  render={(props) =>  (user.is_staff_comptable?<LesPayements
    />:null)}/>
    <Route exact path='/comptabilitegaalguishop'  render={(props) =>  (user.is_staff_comptable?<LesPayementGaalguiShop
    />:null)}/>
    <Route exact path='/comptabilitannulationgaalguishop'  render={(props) =>  (user.is_staff_comptable?<AnnulationGaalguiShop
    />:null)}/>
    <Route exact path='/comptabilitepayementperiodic'  render={(props) =>  (user.is_staff_comptable?<PayementPeriodic
    />:null)}/>
    <Route exact path='/comptabilitesuspensionperiodic'  render={(props) =>  (user.is_staff_comptable?
    <SuspensionPeriodic />:null)}/>
    <Route exact path='/cv'  component={Cv}/>
    <Route exact path='/sdepay'  render={(props) =>  (islog?<Sdepay isstaf={user.is_staff}/>:null)}/>
    <Route exact path='/sdepaysuccess/:id/:nom' 
   render={(props) => (islog?<SuccessPaySDE {...props}  />:null)} />
    <Route exact path='/qrcodepage'  render={(props) =>  (user.business ||user.professionnel?
    <QrCodePage />:null)}/>
    <Route component={client}/>
    </Switch> 
    </BrowserRouter>
   :<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}
     />}
  

    </div>
  );
}

export default App;


