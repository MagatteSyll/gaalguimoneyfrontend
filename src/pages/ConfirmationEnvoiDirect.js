import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import ConfirmationEnvoiDirectDesk from '../component/desktop/ConfirmationEnvoiDirectDesk'
import {Link,useHistory} from 'react-router-dom'
import ConfirmationEnvoiDirectMobile from '../component/mobile/ConfirmationEnvoiDirectMobile'
import axios from 'axios'



function ConfirmationEnvoiDirect(props){
    let id=props.match.params.id
    const [transaction,setransaction]=useState([])
    const [load,setload]=useState(false)
    const history=useHistory()
    const getuser=props.getuser



    useEffect(()=>{
      getransation()
    },[])
    const getransation=()=>{
    	axiosInstance
    	.post('client/getransaction/',{id:id})
    	.then(res=>{
    		setransaction(res.data)
        setload(true)
    	})
    }
 const confirmation=()=>{
  axios
 .put('http://127.0.0.1:8000/api/client/envoyerdirect/envoyerdirectement/',{id:id},
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
  /*
  axiosInstance
  .put('client/envoyerdirect/envoyerdirectement/',{id:id})*/
  .then(res=>{
    getuser()
     history.push(`/successenvoi/${res.data.id}/${res.data.nature}`)
  })
 } 
const annulation=()=>{
  axiosInstance
  .put('client/envoyerdirect/annulationenvoi/',{id:id})
  .then(()=>{
    history.goBack()
  })
}
return(
  <div >
  {load?
  <>
  <ConfirmationEnvoiDirectDesk transaction={transaction} 
  confirmation={confirmation} annulation={annulation}  />
  <ConfirmationEnvoiDirectMobile transaction={transaction} 
  confirmation={confirmation} annulation={annulation} />
  </>:null}
  </div>
 );
}

export default ConfirmationEnvoiDirect;