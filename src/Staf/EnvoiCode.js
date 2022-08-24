import React, {useState} from 'react'
import axiosInstance from '../axios'
import { useHistory } from 'react-router-dom';
import {toast } from 'react-toastify'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhoneInput from 'react-phone-number-input'
import Button from '@mui/material/Button';



const options = [
  { value: 1, label: 'non inclus' },
  { value: 2, label: 'inclus' },];
function EnvoiCode() {
    const history=useHistory()
    const [data,setdata]=useState({
        receveur:'',
        envoyeur:'',
        phonereceveur:"",
        somme:'',
        commission:'',


    })
   const erreur = () => toast.error("Erreur!Entrez des donnees valides",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
  const ercom = () => toast.error("Precisez le mode de payement de la commission",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });
   const handledata=e=>{
      //console.log(e.target.value)
      setdata({
        ...data,[e.target.name]: e.target.value.trim()
      })
   }
   const handlephone=e=>{
    setdata({
        ...data,phonereceveur:e
    })
   }
   const confirmation=e=>{
    e.preventDefault()
    if(data.receveur===""||data.receveur.match(/^ *$/)!== null||data.envoyeur===""
        ||data.envoyeur.match(/^ *$/)!== null||data.somme<0||data.commission==="")
    {
        erreur()
        return;
    }
    if(data.commission==='1'){
        axiosInstance
    .post('staff/commissionnonincluse/',{
        somme:data.somme,
        receveur:data.receveur,
        envoyeur:data.envoyeur,
        phone:data.phonereceveur
    })
    .then(res=>{
        history.push(`/confirmationenvoiviacodeworker/${res.data.id}/${res.data.nature}`)
    })
    .catch(()=>{
        erreur()
    })

    }

    if(data.commission==='2'){
      axiosInstance
    .post('staff/commissionincluse/',{
        somme:data.somme,
        receveur:data.receveur,
        envoyeur:data.envoyeur,
        phone:data.phonereceveur
    })
    .then(res=>{
        history.push(`/confirmationenvoiviacodeworker/${res.data.id}/${res.data.nature}`)
    })
    .catch(()=>{
        erreur()
    })
     
    }}
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
         <h1 className='centerbtn logocolor'>Envoi par code GaalguiMoney</h1>
        <div className='divform'> 
        <form className="formdepot" onSubmit={confirmation} >
        <div className="w3-section">
        <p className='centerbtn'> <label><strong>Nom complet du beneficiaire <b className='redstyle'>*</b></strong></label></p>
          <input className="w3-input w3-border w3-margin-bottom" type="text" 
           name='receveur'
          onChange={handledata} required/>
          <p className='centerbtn'> <label><strong>Nom complet du client <b className='redstyle'>*</b></strong></label></p>
          <input class="w3-input w3-border w3-margin-bottom" type="text"
           name='envoyeur'
           onChange={handledata} required/>
          <p className='centerbtn'> <label><strong>Numero telephone du beneficiaire <b className='redstyle'>*</b> </strong></label></p>
         <p> <PhoneInput
          countries={["SN"]}
          defaultCountry="SN"
          addInternationalOption={false}
          className="w3-input  w3-margin"
          value={data.phonereceveur}
          name='phone'
          onChange={handlephone}
          />
          </p>
          <p className='centerbtn'> <label><strong>Montant <b className='redstyle'>*</b></strong></label></p>
         <p> <input className="w3-input w3-border" type="number"
           name='somme'
           min="1"
           onPaste={handlepaste}
           onKeyPress={handlekeypress}
           onChange={handledata} required />
           </p>
           <p> <label><strong>La commission <b className='redstyle'>*</b></strong></label></p>
           <p>
           <select
           onChange={handledata}
           name='commission'
           required >
           <option  value="" disabled selected >Selectionnez le mode de payement de la commission</option>
           <option value='1' >Commission non incluse</option>
           <option value='2'>Commission incluse</option>
           </select>
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

export default EnvoiCode
