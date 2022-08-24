import React,{Fragment, useState} from 'react'
import axiosInstance from '../axios'
import { useHistory,Link } from 'react-router-dom';
import {toast } from 'react-toastify'
import EnvoiCodeDesk from '../component/desktop/EnvoiCodeDesk'
import EnvoiCodeMobile from '../component/mobile/EnvoiCodeMobile'




function EnvoiViaCode(props) {
    const history=useHistory()
    const  [data, setdata] = useState({
        phone:'',
        somme:'',
        nom:''
    })
    const handlephone=e=>{
        setdata({
            ...data,phone:e
        })
    }
    
    const handledata=e=>{
    setdata({
    ...data,[e.target.name]:e.target.value.trim()
    })
    }
    const errtel= () => toast.error("Numero de telephone invalide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const errnom= () => toast.error("Entrez un nom valide",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
    const Erreur = () => toast.error("Erreur!Transaction impossible",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
    const novalidnan = () => toast.error("Entrez un nombre valide",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
const Confirmation=e=>{
        e.preventDefault()
        if(data.phone===""||data.phone<11)
        {
          errtel()
          return;
        }
        if(data.nom===""||data.nom.match(/^ *$/)!== null){
           errnom()
           return;
        }
        if(data.somme===""||data.somme<=0){
            novalidnan()
            return;
        }
        let formdata=new FormData()
        const phone="+"+data.phone
        formdata.append('phone',phone)
        formdata.append('somme',data.somme)
        formdata.append('nom',data.nom)
        axiosInstance
        .post('client/verificationviacode/',formdata)
        .then(res=>{
          history.push(`/confirmationenvoicode/${res.data.id}/${res.data.nom}`)
            
          }) }

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
     <EnvoiCodeDesk retour={retour} handlekeypress={handlekeypress} handlepaste={handlepaste}
     Confirmation={Confirmation} handledata={handledata} handlephone={handlephone} data={data} />
     <EnvoiCodeMobile retour={retour} handlekeypress={handlekeypress} handlepaste={handlepaste}
     Confirmation={Confirmation} handledata={handledata} handlephone={handlephone} data={data} />
    </div>
    )
}

export default EnvoiViaCode

/*
 

    
    


        */