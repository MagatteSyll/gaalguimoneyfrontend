import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {Link,useHistory} from 'react-router-dom'
import ConfirmationEnvoiCodeDesk from '../component/desktop/ConfirmationEnvoiCodeDesk'
import ConfirmationEnvoiCodeMobile  from '../component/mobile/ConfirmationEnvoiCodeMobile'




function ConfirmationEnvoiCode(props){
	let id=props.match.params.id
	const getuser=props.getuser
	const [transaction,setransaction]=useState([])
    const [load,setload]=useState(false)
    const history=useHistory()

  useEffect(()=>{
      getransation()
    },[])
    
    const getransation=()=>{
    	axiosInstance
    	.post('client/getransactioncode/',{id:id})
    	.then(res=>{
    		setransaction(res.data)
        setload(true)
    	})
    }
 const confirmation=()=>{
  axiosInstance
  .put('client/envoyercode/envoyerviacodedirectement/',{id:id})
  .then(res=>{
  	getuser()
     history.push(`/successenvoicode/${res.data.id}/${res.data.nature}`)
     //console.log(res.data)
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
  <div>
   {load?
  <>
  <ConfirmationEnvoiCodeDesk transaction={transaction} annulation={annulation}
   confirmation={confirmation}/>
  <ConfirmationEnvoiCodeMobile transaction={transaction} annulation={annulation}
   confirmation={confirmation}/>
  </>:null}
  
  </div>
)
}


export default ConfirmationEnvoiCode;