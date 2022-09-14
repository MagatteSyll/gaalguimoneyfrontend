import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import EnvoiDirectMobile from '../component/mobile/EnvoiDirectMobile'
import EnvoiDirectDesk from '../component/desktop/EnvoiDirectDesk';
import {Link} from 'react-router-dom'
import {toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'
import axios from 'axios'


//mamylo26

function EnvoiDirect() { 

  const pays=['sn']
  const history=useHistory() 
  const  [data, setdata] = useState({
        phone:'',
  
    })
  const err = () => toast.error("Veuillez entrer des donnees valides!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false 
    });

   const handlephone=e=>{
    //console.log(e.target.value)
    setdata({
    ...data,phone:e
    })
    }

   const handlesubmit=e=>{
       e.preventDefault()
      // console.log(data.phone)
       if(data.phone===""||data.phone===null){
        err()
        return;
       }
      // const phone="+"+data.phone
      // console.log(phone)
      // axiosInstance
       axios
      .post('http://127.0.0.1:8000/api/client/verifynumb/',{num:data.phone},
       {headers:{
       'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
          }})
      // .post('client/verifynumb/',{
       // phone:phone,
      // })
       .then(res=>{
        console.log(res.data)
        history.push(`/confirmationsommenvoidirect/${res.data.id}`)
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
 <Fragment>
  <EnvoiDirectDesk handlesubmit={handlesubmit}  pays={pays} setdata= {setdata}
   handlepaste={handlepaste} handlekeypress={handlekeypress}  data={data} handlephone={handlephone}
   retour={retour} />
  <EnvoiDirectMobile handlesubmit={handlesubmit}   pays={pays} setdata= {setdata}
  handlepaste={handlepaste} handlekeypress={handlekeypress} data={data}
  handlephone={handlephone} retour={retour}
   />
  
 

  </Fragment>


) 
}

export default EnvoiDirect
