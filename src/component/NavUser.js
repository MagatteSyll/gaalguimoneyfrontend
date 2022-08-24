import React,{Fragment, useEffect,useState} from 'react'
import NavMobile from './mobile/NavMobile'
import NavDesk from './desktop/NavDesk';
import axiosInstance from '../axios';
import Dialog from '@mui/material/Dialog';
import {useHistory} from 'react-router-dom'
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import DialogContentText from '@mui/material/DialogContentText';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';





function NavUser({deconnexion,user,islog}){
 const [business,setbusiness]=useState(false)
 const [prof,setprof]=useState(false)
 const [notifbusiness,setnotifbusiness]=useState([])
 const [notifpro,setnotifpro]=useState([])
 const [loadbusiness,setloadbusiness]=useState(false)
 const [loadpro,setloadpro]=useState(false)
const [scroll, setScroll] = useState('paper');

  const history=useHistory()



  useEffect(()=>{
  getnotifbusiness() 
 
  },[])
  useEffect(()=>{
     getnotifpro()
  },[])
  
    const handleparametre=()=>{
        history.push('/parametre')
    }
 
    const handlehome=()=>{
        history.push('/')
    }
    const openbusiness=()=>{
    setbusiness(true)

   }
   const handlecode=()=>{
  //  history.push('/qrcodepage')
    window.open("/qrcodepage", "_blank")
   }
   const openprofessionel=()=>{
    setprof(true)

   }
  const handleclosebusiness=()=>{
    
  	setbusiness(false)
  }
 const handleprofclose=()=>{
 	setprof(false)
 }

 const getnotifbusiness=()=>{
  axiosInstance
  .get("pay/getpayementbusinessuser/")
  .then(res=>{
    setnotifbusiness(res.data)
    setloadbusiness(true)
   // console.log(res.data)
  })

 }
const  getnotifpro=()=>{
  axiosInstance
  .get("pay/getpayementprofessionnel/")
  .then(res=>{
    setnotifpro(res.data)
    setloadpro(true)
   // console.log(res.data)
  })
 }
const handlereleverbusiness=id=>{
  axiosInstance
  .post("pay/releverbusiness/",{id:id})
  .then(res=>{
    getnotifbusiness()

  })
}
const handlereleverprofessionnel=id=>{
  axiosInstance
  .post("pay/releverprofessionnel/",{id:id})
  .then(res=>{
    getnotifpro()

  })
}



return(
 <div>
 {loadbusiness && loadpro ?
  <>
  <NavDesk user={user} handleparametre={handleparametre} handlehome={handlehome} 
   deconnexion={deconnexion} openbusiness={openbusiness} openprofessionel={openprofessionel}
    handleclosebusiness={handleclosebusiness} handleprofclose={handleprofclose} notifbusiness={notifbusiness}
    notifpro={notifpro} handlecode={handlecode}
   />
   <NavMobile user={user}
    deconnexion={deconnexion}
    handleparametre={handleparametre} handlehome={handlehome} 
    openbusiness={openbusiness} openprofessionel={openprofessionel}
    handleclosebusiness={handleclosebusiness} handleprofclose={handleprofclose} notifbusiness={notifbusiness}
    notifpro={notifpro} handlecode={handlecode}
    />

  <Dialog
  open={business}
  onClose={handleclosebusiness}
  maxWidth="xl"
  scroll={scroll}
  >

 <Fragment>
<IconButton
  aria-label="close"
  onClick={handleclosebusiness}
    sx={{
   position: 'absolute',
   right: 8,
   top: 8,
   color: (theme) => theme.palette.grey[500],
   }}>
  <CloseIcon />
  </IconButton>
{notifbusiness.length>0?
<Fragment>
<DialogTitle>Transferts business</DialogTitle>
<DialogContentText>Pour les payements deja relevés ,vous pouvez les archiver en basculant le <br/>
<ToggleOnIcon className="ml-4"  color="secondary" /> </DialogContentText>
 <DialogContent dividers={scroll === 'paper'}>
 <List>
 {notifbusiness.map(n=>
  <div key={n.id} className='container '>
  <ListItemText>
  <Typography 
    sx={{ display: 'inline' }}
      component="span"
      variant="body2"
      color="text.primary">
   {n.message},{new Date(n.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
  </Typography>
  <Switch  
   checked={!n.relever}
  onChange={()=>handlereleverbusiness(n.id)}
   color="secondary" />
  </ListItemText>
  <Divider  />
  </div>)}
 </List>
 </DialogContent>
 </Fragment>
 : <DialogContent><p className=' mt-4 redstyle'>Aucun transfert </p></DialogContent>}
 </Fragment>
 </Dialog>

 <Dialog
 open={prof}
 onClose={handleprofclose}
 maxWidth="xl"
scroll={scroll}
 >
 <Fragment>
<IconButton
  aria-label="close"
  onClick={handleprofclose}
    sx={{
   position: 'absolute',
   right: 8,
   top: 8,
   color: (theme) => theme.palette.grey[500],
   }}>
  <CloseIcon />
  </IconButton>
{notifpro.length>0?
<Fragment>
<DialogTitle>Transferts</DialogTitle>
<DialogContentText>Pour les payements deja relevés ,vous pouvez les archiver en basculant le <br/>
<ToggleOnIcon className="ml-4"  color="secondary" /> </DialogContentText>
 <DialogContent dividers={scroll === 'paper'}>
 <List>
 {notifpro.map(n=>
  <div key={n.id} className='container '>
  <ListItemText>
  <Typography 
    sx={{ display: 'inline' }}
      component="span"
      variant="body2"
      color="text.primary">
   {n.message},{new Date(n.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
  </Typography>
  <Switch  
   checked={!n.relever}
  onChange={()=>handlereleverprofessionnel(n.id)}
   color="secondary" />
  </ListItemText>
  <Divider  />
  </div>)}
 </List>
 </DialogContent>
 </Fragment>
 : <DialogContent><p className=' mt-4 redstyle'>Aucun transfert </p></DialogContent>}
 </Fragment>
 </Dialog>
   </>:null}
 </div>
)
}


export default NavUser

