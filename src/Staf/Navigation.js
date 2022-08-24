import { useHistory } from 'react-router-dom';
import axiosInstance from '../axios';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { IonIcon,IonLoading,IonSearchbar,IonCol,IonRow,IonGrid,IonText } from '@ionic/react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'
import { NavDropdown,Nav,Container} from 'react-bootstrap' 
import logo from '../component/asset/logo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

function Navigation({user}) {
  const history=useHistory()
  const Deconnexion=()=>{
		localStorage.removeItem('__jmdf__');
		localStorage.removeItem('__jvmdf__');
		axiosInstance.defaults.headers['Authorization'] = null;
    window.location.reload()
		history.push('/');
  }

  const home=()=>{ 
    history.push('/accueil')
  }
  const depot=()=>{
    history.push('/depot')
  }
  const retrait=()=>{
    history.push('/retrait')
  }
  const envoicode=()=>{
    history.push('/viacode')
  }
  const retraitcode=()=>{
    history.push('/retraitparcode')
  }
  const historique=()=>{
    history.push('/historique')
  }
  const business=()=>{
    history.push('/comptebusiness')
  }
  const activation=()=>{
    history.push('/activationcompteclient')
  }
  const desactivation=()=>{
    history.push('/desactivationcompteclient')
  }
  const reactivation=()=>{
     history.push('/reactivationcompte')
  }
  const membre=()=>{
    history.push('/nouvelmembrestaff')
  }
   const imgpub=()=>{
    history.push('/ajoutimagepub')
  }
  const handlesuspension=()=>{
    history.push('/suspensioncomptebusiness')
  }
   const handleprofessionnel=()=>{
    history.push('/compteprofessionnel')
  }
  const handlesuspensionprofessionnel=()=>{
    history.push('/suspensionprofessionnel')
  }
  const handlecomptedepot=()=>{
    history.push('/comptabilitedepot')
  }
  const handlecompteretrait=()=>{
    history.push('/comptabiliteretrait')
  }
  const handlecompteretraitcode=()=>{
    history.push('/comptabiliteretraitcode')
  }
  const handlecomptenvoi=()=>{
    history.push('/comptabilitenvoi')
  }
  const handlecomptenvoicode=()=>{
    history.push('/comptabilitenvoicode')
  }
  const handlecomptepayement=()=>{
    history.push('/comptabilitepayement')
  }
  const handlecomptachatgaalguishop=()=>{
    history.push('/comptabilitegaalguishop')
  }
  const handlecomptannulationshop=()=>{
    history.push('/comptabilitannulationgaalguishop')
  }
  const handlepayementperiodic=()=>{
    history.push('/comptabilitepayementperiodic')
  }
   const handlesuspensionperiodic=()=>{
    history.push('/comptabilitesuspensionperiodic')
  }
    
    return (
    <div>
    <IonGrid>
    <IonRow>
    <IonCol size='6'>
  <h2> <img src={logo} className='logoimgdesk'/> <strong> GaalguiMoney</strong></h2>
    </IonCol>
    {user.is_staff_comptable?
    <IonCol size='6'>
     
  <Nav className='container'>
    <NavDropdown
          id="nav-dropdown-dark-example"
          title="Les comptes"
          menuVariant="dark"
        >
   <NavDropdown.Item> <button  onClick={handlecomptedepot} className="btncompte">
   Les depots</button></NavDropdown.Item>
   <NavDropdown.Item> <button  onClick={handlecompteretrait} className="btncompte">
   Les retraits</button></NavDropdown.Item>
   <NavDropdown.Item> <button  onClick={handlecompteretraitcode} className="btncompte">
    Les retraits par code </button></NavDropdown.Item>
  <NavDropdown.Item>  <button onClick={handlecomptenvoi}  className="btncompte">
  Les envois</button></NavDropdown.Item>
   <NavDropdown.Item> <button  onClick={handlecomptenvoicode} className="btncompte">
   Les envois par code</button></NavDropdown.Item>
  {/* <NavDropdown.Item> <button onClick={handlecomptepayement}  className="btncompte">
   Les payements</button></NavDropdown.Item>*/}
    <NavDropdown.Item><button  onClick={handlecomptachatgaalguishop}
     className="btncompte">Achat GaalguiShop</button> </NavDropdown.Item>
   <NavDropdown.Item> <button  onClick={handlecomptannulationshop}
    className="btncompte">Annulation achat GaalguiShop</button></NavDropdown.Item> 
  {/* <NavDropdown.Item> <button  onClick={handlepayementperiodic}
    className="btncompte">Payement periodique</button></NavDropdown.Item> */}
  {/* <NavDropdown.Item> <button  onClick={handlesuspensionperiodic}
    className="btncompte">Suspension de payement periodique</button></NavDropdown.Item> */}

</NavDropdown></Nav>
    </IonCol>:null} 
    </IonRow>
    </IonGrid>

  <div className="w3-bar">

   {user.is_staff_simple?
   <>
  <button  onClick={depot} className="w3-bar-item w3-button noeffecthove">
   <IonText className='purplestyle'> Depot</IonText></button>
  <button onClick={retrait} className="w3-bar-item w3-button noeffecthove">
  <IonText className='pinkstyle'> 
  Retrait</IonText></button>
  <button onClick={envoicode}  className="w3-bar-item w3-button noeffecthove">Envoi par code</button>
  <button onClick={retraitcode}  className="w3-bar-item w3-button noeffecthove">Retrait par code </button>
  <button onClick={activation}  className="w3-bar-item w3-button noeffecthove">
  <IonText className='bluestyle'> Activation compte (document) </IonText></button>
 </> :null}
  
  <button  className="w3-bar-item w3-button w3-right noeffecthove" title='deconnexion' 
  onClick={Deconnexion}><ArrowCircleRightIcon /> </button>
  <button  className="w3-bar-item w3-button w3-right noeffecthove" > <AccountCircleIcon className='logocolor'/> {user.prenom}
  </button>
  {user.is_staff_simple?
   <IonGrid>
  <IonRow>
  <IonCol size='10' className='container'>
  <IonSearchbar
  placeholder='gaalguipay'/>
  </IonCol>
  </IonRow>
  </IonGrid>:null}
  </div>
  {user.is_staff_bureau?
 <div className="w3-bar">
  {/*<button  onClick={business} className="w3-bar-item w3-button noeffecthove">
    Creation de compte business</button>*/}
   <button onClick={desactivation}  className="w3-bar-item w3-button noeffecthove">
   <IonText className='redstyle'> Desactivation compte </IonText> </button>
   {user.is_staff_manager_personnel?
    <span>
  <button  onClick={membre} className="w3-bar-item w3-button noeffecthove">
   Nouveau membre du staff</button>
    </span>:null}
  <button onClick={imgpub} 
    className="w3-bar-item w3-button noeffecthove">Ajout d image pub </button>
 {/* <button  onClick={handlesuspension} 
    className="w3-bar-item w3-button noeffecthove"><IonText className='redstyle'>Suspension de compte business
    </IonText></button>*/}
    {user.is_admin?
      <>
   {
    /*<button  onClick={handleprofessionnel} 
    className="w3-bar-item w3-button noeffecthove"><IonText className='pinkstyle'>Creation de compte professionnel
    </IonText></button>
    <button  onClick={handlesuspensionprofessionnel} 
    className="w3-bar-item w3-button noeffecthove"><IonText className='redstyle'>Suspension de compte professionnel
    </IonText></button>
  */}
    <button  onClick={reactivation} 
    className="w3-bar-item w3-button noeffecthove"><IonText className='logocolor'>
    Reactivation compte client
    </IonText></button>
    </>:null
    }
    </div>:null}


  </div>
    )
}

export default Navigation

