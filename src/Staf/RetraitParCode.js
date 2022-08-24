import React, {useState,} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


function RetraitParCode() {
    const history=useHistory()
    const  [data, setdata] = useState({
        code:''
    })
   
    const erreur = () => toast.error("Entrez un code valide!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
    
    const handlecode=e=>{
        setdata({code:e.target.value})
    }
  

    const confirmation=e=>{
       e.preventDefault()
       if(data.code==="")
       {
         erreur()
         return;
       }
       axiosInstance
        .post('staff/verificationcode/',{
            code:data.code
        })
        .then(res=>{
            history.push(`/confirmationretraitcode/${res.data.id}/${res.data.nature}`)  
            //console.log(res.data)
           })
        .catch(()=>{
          erreur()
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
        <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
        <h1 className='centerbtn logocolor'>Retrait par code  GaalguiMoney</h1>
        <div className='divform'>
        <form className="formdepot" onSubmit={confirmation}>
        <div className="w3-section">
         <p className='centerbtn'> <label  className="w3-container" ><b>code de transfert</b></label></p>
        <p>
        <input className="w3-input w3-border" type="number"
        min="0"
       onPaste={handlepaste}
       onKeyPress={handlekeypress}
       onChange={handlecode} required />
        </p>
      <p className='centerbtn'>  
      <Button
    onClick={confirmation}
    style={{
   color:"white",
   backgroundColor: "#4B0082",}} variant="contained" >
   Valider
  </Button> 
  </p>
    </div>
      </form>
      </div>  
        </div>
    )
}

export default RetraitParCode

