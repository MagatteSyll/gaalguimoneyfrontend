import React,{useState,Fragment} from 'react'
import axiosInstance from '../axios'
import EnvoiDirectMobile from '../component/mobile/EnvoiDirectMobile'
import EnvoiDirectDesk from '../component/desktop/EnvoiDirectDesk';
import {Link} from 'react-router-dom'
import {toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'



function EnvoiDirect() { 

  const pays=['sn']
  const history=useHistory() 
  const  [data, setdata] = useState({
        phone:'',
        sum:''
    })
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
   const handlephone=e=>{
    //console.log(e.target.value)
    setdata({
    ...data,phone:e
    })
    }

   const handlesubmit=e=>{
       e.preventDefault()
      // console.log(data)
       if(data.phone===""||data.sum<=0||data.sum===""){
        err()
        return;
       }
       const phone="+"+data.phone
      // console.log(phone)
       axiosInstance
       .post('client/verifenvoi/',{
        phone:phone,
        somme:data.sum
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
 <Fragment>
  <EnvoiDirectDesk handlesubmit={handlesubmit} handledata={handledata} pays={pays} setdata= {setdata}
   handlepaste={handlepaste} handlekeypress={handlekeypress}  data={data} handlephone={handlephone}
   retour={retour} />
  <EnvoiDirectMobile handlesubmit={handlesubmit} handledata={handledata}  pays={pays} setdata= {setdata}
  handlepaste={handlepaste} handlekeypress={handlekeypress} data={data}
  handlephone={handlephone} retour={retour}
   />
  
 

  </Fragment>


) 
}

export default EnvoiDirect
