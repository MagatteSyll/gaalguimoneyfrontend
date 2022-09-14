import React,{useState,useEffect, Fragment} from 'react'
import axiosInstance from '../axios';
import { IonLoading} from '@ionic/react' 
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import  HistoriqueDesk from '../component/desktop/HistoriqueDesk'
import HistoriqueMobile from '../component/mobile/HistoriqueMobile'



//Toute l historique
function Historique(props) {
    const  isstaf=props.isstaf
    const  history=useHistory()
    const  [messages,setmessages]=useState([])
    const  [showLoading, setShowLoading] = useState(true);
    const  [load, setload] = useState(false)
    const  [count,setcount]=useState()
    const  [next,setnext]=useState()
    const  [previous,setprevious]=useState()
  

    useEffect(()=>{  
    axiosInstance
   // axios
  /*  .get('http://127.0.0.1:8000/api/client/message/',
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})*/
   .get('client/message/')
  .then(res=>{
    setmessages(res.data.results)
    setcount(Math.ceil((res.data.count)/15))
    setnext(res.data.next)
    setprevious(res.data.previous)
    setload(true)
      }) 
    },[])

const handledisplay=(data)=>{
  const  page=data.selected+1
  axios
  .get(`http://127.0.0.1:8000/api/client/message/?page=${page}`,
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
 // axiosInstance
 // .get(`client/message/?page=${page}`)
  .then(res=>{
    setmessages(res.data.results)
    setnext(res.data.next)
    setprevious(res.data.previous)
    setcount(Math.ceil((res.data.count)/15))
   })
}
  
const retour=()=>{
  history.goBack()
} 
   
    return (
    <Fragment>
   {isstaf? null:
    <Fragment>
     {load?
      <div> 
  <HistoriqueDesk messages={messages} handledisplay={handledisplay} next={next} previous={previous} 
  count={count} retour={retour}/>
  <HistoriqueMobile messages={messages} handledisplay={handledisplay} next={next} previous={previous} 
  count={count} retour={retour} />
      </div>
    :<IonLoading
      cssClass='my-custom-class'
      isOpen={showLoading}
      onDidDismiss={() => setShowLoading(false)}
      message={'Chargement...'}
      duration={5000}/>}
      </Fragment>}
      </Fragment>
        
   
   
        
    )
}

export default Historique
