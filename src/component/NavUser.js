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
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {IonItem} from '@ionic/react'
import {Link} from 'react-router-dom'
 




function NavUser({deconnexion,user,islog}){
 const [business,setbusiness]=useState(false)
 const [prof,setprof]=useState(false)
 const [notifbusiness,setnotifbusiness]=useState([])
 const [notifpro,setnotifpro]=useState([])
 const [loadbusiness,setloadbusiness]=useState(false)
 const [loadpro,setloadpro]=useState(false)
 const [scroll, setScroll] = useState('paper');
 const [opennotif,setopenotif]=useState(false)
 const [notification,setnotification]=useState([])
 const  [count,setcount]=useState()
 const  [next,setnext]=useState()
 const  [previous,setprevious]=useState()
 const [badgenotif,setbadgenotif]=useState()
 const [load,setload]=useState(false)
 const history=useHistory()


useEffect(()=>{
  getbadgenotif()
},[])

 /* useEffect(()=>{
  getnotifbusiness() 
 
  },[])
  useEffect(()=>{
     getnotifpro()
  },[])
  */
  
  const getbadgenotif=()=>{
  /*axios
  .get('http://127.0.0.1:8000/api/client/getbadgenotif/',
  {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})*/
   axiosInstance
  .get("client/getbadgenotif/")
  .then(res=>{
    setbadgenotif(res.data.badge)
    setload(true)
    //console.log(res.data)
  }) 
  }
  const notifread=()=>{
 /*  axios
  .get('http://127.0.0.1:8000/api/client/usereadnotif/',
  {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})*/
   axiosInstance
  .get("client/usereadnotif/")
  .then(res=>{
    console.log(res.data)
  })  
  }
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

const getnotification=()=>{
  axiosInstance
  .get('client/getnotification/')
  /* axios
    .get('http://127.0.0.1:8000/api/client/getnotification/',
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})*/
  .then(res=>{
  //  console.log(res.data)
    setnotification(res.data.results)
    setcount(Math.ceil((res.data.count)/15))
    setnext(res.data.next)
    setprevious(res.data.previous)
    notifread()
    getbadgenotif()
    setopenotif(true)
  })
}
const handlenotifclose=()=>{
  setopenotif(false)
}
const handledisplay=(data)=>{
  const  page=data.selected+1
 /* axios
  .get(`http://127.0.0.1:8000/api/client/message/?page=${page}`,
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})*/
  axiosInstance
  .get(`client/message/?page=${page}`)
  .then(res=>{
    setnotification(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount(Math.ceil((res.data.count)/15))
   })
}

return(
 <div>
 {load?
  <>
  <NavDesk user={user} handleparametre={handleparametre} handlehome={handlehome} 
   deconnexion={deconnexion} openbusiness={openbusiness} openprofessionel={openprofessionel}
    handleclosebusiness={handleclosebusiness} handleprofclose={handleprofclose} notifbusiness={notifbusiness}
    notifpro={notifpro} handlecode={handlecode} getnotification={getnotification}
     badgenotif={badgenotif}
   />
   <NavMobile user={user}
    deconnexion={deconnexion}
    handleparametre={handleparametre} handlehome={handlehome} 
    openbusiness={openbusiness} openprofessionel={openprofessionel}
    handleclosebusiness={handleclosebusiness} handleprofclose={handleprofclose} notifbusiness={notifbusiness}
    notifpro={notifpro} handlecode={handlecode} getnotification={getnotification}
    badgenotif={badgenotif}
    />

  <Dialog
  open={opennotif}
  onClose={handlenotifclose}
  maxWidth="xl"
  scroll={scroll} >
  <div>
  {notification.length>0?
  <>
  <div className='mt-3'>
  {notification.map(m=>
  <div  key={m.id}>
  <IonItem>
  {m.is_trans?
  <Link target="_blank" to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
  {m.message},{new Date(m.created).toLocaleDateString('en-GB',
  {hour: '2-digit', minute:'2-digit'})} 
  </Link>:
  <p> {m.message},{new Date(m.created).toLocaleDateString('en-GB',
  {hour: '2-digit', minute:'2-digit'})} </p>
}
  </IonItem>
  <br/>
  <Divider/>
  </div>)}
  </div>
  <div className='divpagination'>
  {count>1?
<ReactPaginate
  breakLabel="..."
  nextLabel={next!=null && count>4?<ArrowForwardIcon className='logocolor'/>:null}
  marginPagesDisplayed={2}
  containerClassName={"pagination"}
  pageClassName={"page-item paginationsuivant "}
  pageLinkClassName={"page-link"}
  nextClassName={' paginationsuivant'}
  previousClassName={ 'paginationsuivant '}
  breakClassName={'page-item'}
  breakClassNameLink={'page-link'}
  onPageChange={handledisplay}
  pageRangeDisplayed={2}
  pageCount={count}
  previousLabel={previous!=null && count>4?<ArrowBackIcon className='logocolor'/>:null}
  renderOnZeroPageCount={null}
   />:null}
   </div> 
   </>:<h3>
   Aucune notification a afficher
   </h3>}
  </div>
 </Dialog>

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


/*
 <div className='mt-3'>
  {notification.map(m=>
  <div  key={m.id}>
  <IonItem>
  <Link target="_blank" to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
  {m.message},{new Date(m.created).toLocaleDateString('en-GB',
  {hour: '2-digit', minute:'2-digit'})} 
  </Link>
  </IonItem>
  <br/>
  <Divider/>
  </div>)}
  </div>
   <div className='divpagination'>
  {count>1?
<ReactPaginate
  breakLabel="..."
  nextLabel={next!=null && count>4?<ArrowForwardIcon className='logocolor'/>:null}
  marginPagesDisplayed={2}
  containerClassName={"pagination"}
  pageClassName={"page-item paginationsuivant "}
  pageLinkClassName={"page-link"}
  nextClassName={' paginationsuivant'}
  previousClassName={ 'paginationsuivant '}
  breakClassName={'page-item'}
  breakClassNameLink={'page-link'}
  onPageChange={handledisplay}
  pageRangeDisplayed={2}
  pageCount={count}
  previousLabel={previous!=null && count>4?<ArrowBackIcon className='logocolor'/>:null}
  renderOnZeroPageCount={null}
   />:null}
   </div>
 </div>*/