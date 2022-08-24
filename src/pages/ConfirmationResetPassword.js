import axiosInstance from '../axios'
import React, {useState,useEffect} from 'react'
import {toast } from 'react-toastify'
import {IonGrid,IonRow,IonCol,IonText} from '@ionic/react'
import {useHistory} from 'react-router-dom'


function ConfirmationResetPassword(props) {
	let id=props.match.params.id
	const [code,setcode]=useState("")
	const [load,setload]=useState(false)
	const history=useHistory()

	 const erreur = () => toast.error("Numero de telephone invalide!",{
        position:toast.POSITION.TOP_CENTER,
        autoClose:false
      });

    useEffect(()=>{
    	axiosInstance
    	.post('client/verificationcodeid/',{id:id})
    	.then(res=>{
          setload(res.data)
    	})
    },[])
	const handlecode=e=>{
		setcode(e.target.value)
	}
	const handlesubmit=e=>{
		e.preventDefault()
		if(code===""){
         erreur()
         return;
		}
	  axiosInstance
	  .post('client/codereset/',{id:id,code:code})
	  .then(()=>{
	  	history.push(`/changepassword/${id}/resetpassword`)
	  })
	  .catch(()=>{
	  	erreur()
	  	return;
	  })
	}
	
return(
 <div>
 {load?
 <IonGrid>
  <form className='container' onSubmit={handlesubmit}>
          <IonRow>
            <IonCol size='6' className='centerbtn'>
         <label ><b>Code de verification  du numero de telephone 
         <IonText className='asterix'>*</IonText> </b></label>
          </IonCol>
         <IonCol size='6'>
         <p className='centerbtn'>
         <input
         className="w3-input w3-border w3-margin"
         required
          type='number'
        onChange={handlecode}
          />
          </p>    
            </IonCol>
              <IonCol size='6' className='centerbtn'>
              <button className="w3-btn w3-round-xlarge w3-black" type="submit">Confirmer</button>
                </IonCol>
            </IonRow>
            
        </form>
     </IonGrid>:null}
 </div>

);
}

export default ConfirmationResetPassword;