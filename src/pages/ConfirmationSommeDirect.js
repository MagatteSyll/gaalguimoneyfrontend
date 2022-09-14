import React,{useState,useEffect} from 'react'
import ConfirmationSommeMobile  from '../component/mobile/ConfirmationSommeMobile'
import ConfirmationSommeDesk from '../component/desktop/ConfirmationSommeDesk';
import {useHistory} from 'react-router-dom'
import axiosInstance from '../axios'
import axios from 'axios'
import {toast } from 'react-toastify'





function ConfirmationSommeDirect(props) {
   let id=props.match.params.id
   const history=useHistory()
   const [user,setuser]=useState([])
   const [load,setload]=useState(false)
   const [data,setdata]=useState({
   	sum:"",
    nature:"non inclus"
   })


 useEffect(()=>{
 	getuser()

 },[])
 const err = () => toast.error("Veuillez entrer des donnees valides!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false 
    });

 const handledata=e=>{
    //console.log(e.target.value)
    setdata({
    ...data,[e.target.name]:e.target.value.trim()
    })
    }

   const getuser=()=>{
    /* axios
      .post('http://127.0.0.1:8000/api/client/getuserweb/',{id:id},
       {headers:{
       'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
          }})*/
    axiosInstance
    .post('client/getuserweb/',{id:id})
    .then(res=>{
    	console.log(res.data)
    	setuser(res.data)
    	setload(true)
    })
   }
 const handlesubmit=e=>{
       e.preventDefault()
     //  console.log(data)
       if(data.sum<=0||data.sum===""||data.sum.trim()===""){
        err()
        return;
       }
     /*   axios
      .post('http://127.0.0.1:8000/api/client/verifenvoi/',{phone:user.phone,
        somme:data.sum,
        nature:data.nature},
       {headers:{
       'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
          }})*/

      
       axiosInstance
      .post('client/verifenvoi/',{
        phone:user.phone,
        somme:data.sum,
        nature:data.nature
       })
       .then(res=>{
        history.push(`/confirmationenvoidirect/${res.data.id}/${res.data.prenom+""+res.data.nom}`)
       })
      .catch(()=>{
        err()
        return;

      })

      }
  const handlekeypress=e=>{
   if (e.key ==="-"||e.key==="+"||e.key==="e"||e.key==="E"||isNaN(e.key)) {
        e.preventDefault()
        return;
      }
   if (e.which === 8) {
          return;
        }
   if (e.which < 48 || e.which > 57) {
          e.preventDefault();
          return;
        }

}
const handlepaste=e=>{
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = parseFloat(clipboardData.getData('text'));
  const data=clipboardData.getData('text')

    if (pastedData < 0||data==="e"||data==="E"||data==="-"||data==="+"||isNaN(pastedData)) {
        e.preventDefault();
        return;
    }

  }
const retour=()=>{
  history.goBack()
}


 return (
  <div>
  {load?
  <>
   <ConfirmationSommeDesk user={user} handledata={handledata} handlesubmit={handlesubmit} 
   handlepaste={handlepaste} handlekeypress={handlekeypress} retour={retour}/>
   <ConfirmationSommeMobile  user={user} handledata={handledata} handlesubmit={handlesubmit} 
   handlepaste={handlepaste} handlekeypress={handlekeypress} retour={retour}/>
  </>:null}
  </div>


  )
}


export default ConfirmationSommeDirect