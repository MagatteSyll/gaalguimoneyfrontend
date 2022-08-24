import React, {useState,} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'




function NouvelMembreStaff() {
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
    .post('http://127.0.0.1:8000/api/staff/verificationnouvelmembre/',{phone:data.phone},
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
      // axiosInstance
        //.post('staff/verificationnouvelmembre/',{ 
         //   phone:data.phone
        //})
        .then(res=>{
            history.push(`/confirmationnouvelstaff/${res.data.polza}/${res.data.prenom+""+res.data.nom}`)  
            //console.log(res.data)
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
 <h1 className='centerbtn logocolor'>Nouveau membre du staff GaalguiMoney</h1>
     <div className='divform'>
     <form className="formdepot" onSubmit={confirmation}>
     <div className="w3-section">
      <p className='centerbtn'> <label  className="w3-container"><b>Numero de telephone associe au compte</b></label></p>
      <p>
       <PhoneInput
          countries={["SN"]}
          defaultCountry="SN"
          addInternationalOption={false}
          className="w3-input  w3-margin"
          value={data.phone}
          name='phone'
          onChange={handlephone}
          />
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

export default NouvelMembreStaff;