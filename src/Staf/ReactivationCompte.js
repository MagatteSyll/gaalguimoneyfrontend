import React, {useState,} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'


function ReactivationCompte(){
	const history=useHistory()
    const  [data, setdata] = useState({
        phone:''
    })
   const erreur = () => toast.error("client non trouve!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
  
    
    const handlephone=e=>{
        setdata({phone:e})
       // console.log(e.target.value)
    }
  

    const confirmation=e=>{
       e.preventDefault()
       axios
   .post('http://127.0.0.1:8000/api/staff/verificationclientreactivation/',{phone:data.phone},
   {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
      // axiosInstance
       // .post('staff/verificationclientreactivation/',{
           // phone:data.phone
       // })
        .then(res=>{
            history.push(`/confirmationreactivation/${res.data.polza}/${res.data.prenom+""+res.data.nom}`)  
            console.log(res.data)
           })
        .catch(()=>{ 
          erreur()
          return;
        })
      }
 const retour=()=>{
  history.goBack()
 }

return(
  <div>
  <button className='btndrop' onClick={retour}> <ArrowBackIcon/> </button>
  <h1 className='centerbtn logocolor'>Reactivation Compte client GaalguiMoney</h1>
   <div className='divform'>
   <form className="formdepot"
    onSubmit={confirmation}
   >
   <div className="w3-section">
   <p className='centerbtn'> <label  className="w3-container"><b>Numero de telephone du client</b></label></p>
    <PhoneInput
    countries={["SN"]}
    defaultCountry="SN"
    addInternationalOption={false}
    className="w3-input  w3-margin"
    value={data.phone}
    name='phone'
    onChange={handlephone} />
    <p className='centerbtn'>  
    <Button
    type="submit"
    style={{
    color:"white",
    backgroundColor: "#4B0082",}} variant="contained" >
    Confirmer
     </Button>
   </p>  
    </div>
      </form>
      </div>
  </div>
)
}

export default ReactivationCompte;