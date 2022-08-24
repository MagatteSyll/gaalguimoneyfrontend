import React,{Fragment,useEffect,useState} from 'react'
import AccueilDesk from '../component/desktop/AccueilDesk'
import AccueilMobile from '../component/mobile/AccueilMobile'
import axiosInstance from '../axios';




function AccueilUser({user}){
const [message,setmessage]=useState([])
 const  [load, setload] = useState(false)
   
  
   useEffect(()=>{
       getlastmessage()
    },[])
   const getlastmessage=()=>{
       axiosInstance
        .get('client/lastmessage/')
        .then((res=>{
            setmessage(res.data)
            setload(true)
        })) 
   }
   const getpay=()=>{
 
   } 

   const getaction=()=>{
    
   }



return(
 <div>  
 {load?
   <>
    <AccueilDesk user={user} message={message}/>
    <AccueilMobile user={user}  message={message}/>
    </>:null}
 </div>
	)
}

export default AccueilUser