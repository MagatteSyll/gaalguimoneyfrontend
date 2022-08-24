import React,{useState,} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';



function Retrait() {
    const  [data, setdata] = useState({
        phone:'',
        somme:''
    })
   const history=useHistory()
    
   
  const handledata=e=>{
      setdata({
        ...data,[e.target.name]: e.target.value.trim()
      })
    }
 const handlephone=e=>{
     setdata({
    ...data,phone:e
         })
    }


 const erreur = () => toast.error("Erreur!Transaction impossible !Verifiez les credentiels!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
    const handlesubmit=e=>{
        e.preventDefault()
       if(data.somme<0||data.somme===""||data.phone==="")
        {
            erreur()
            return;
        }
       axiosInstance
       .post('staff/getclientretrait/',{phone:data.phone,somme:data.somme})
       .then(res=>{
         history.push(`/confirmationretrait/${res.data.retrait}/${res.data.nature}`)
       })
       .catch(()=>{
        erreur()
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
        <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
        <h1 className='centerbtn logocolor'>Retrait GaalguiMoney</h1>
        <div className='divform'>
      <form className="formdepot" onSubmit={handlesubmit}>
        <div className="w3-section">  
         <p className='centerbtn'> <label><strong>Numero de telephone du client</strong><b className='redstyle'>*</b></label></p>
         <p><PhoneInput
          countries={["SN"]}
          defaultCountry="SN"
          addInternationalOption={false}
          className="w3-input  w3-margin"
          value={data.phone}
          name='phone'
          onChange={handlephone}
          />
          </p>
          <p className='centerbtn'> <label><strong>Somme</strong><b className='redstyle'>*</b></label></p>
          <p>
          <input className="w3-input w3-border" type="number" name='somme' onChange={handledata}
           min="1"
           onPaste={handlepaste}
           onKeyPress={handlekeypress}
           required />
        </p>
        <p className='centerbtn'>  
          <Button
          type="submit"
           style={{
           color:"white",
           backgroundColor: "#4B0082",}} variant="contained" >
         Soumettre
         </Button> 
          </p>    
        </div>
      </form>
      </div> 
        </div>
    )
}

export default Retrait
