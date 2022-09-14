import React,{useState} from 'react'
import {IonGrid,IonRow,IonCol,IonText,IonLoading} from '@ionic/react'
import axiosInstance from '../axios'
import {toast } from 'react-toastify'
import {useHistory} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'




function CodeConfirmation(props) {
	 let id =props.match.params.id
	 const [code,setcode]=useState()
	 const history=useHistory()
	 const [showLoading, setShowLoading] = useState(true);

 const erreurvide = () => toast.error("Champ obligatoire! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
	  });
 const incorect = () => toast.error("Erreur!Donnees invalides!",{
     position:toast.POSITION.TOP_CENTER,
     autoClose:false
 });

const handlecode=e=>{
   setcode(e.target.value)
}
const handlesubmit=e=>{
	e.preventDefault()
	setShowLoading(true)
	if(code.trim()===""||code== null){
      setShowLoading(false)
    	erreurvide()
    	return;
    }
  axios
    .post('http://127.0.0.1:8000/api/client/verificationtel/', {id:id,code:code})
   //	axiosInstance
  // 	.post('client/getphonecode/',{
   //	phone: formData.phone,
		//}

	.then((res) => {
     console.log(res.data)
    history.push(`/finalisationinscription/${id}`)
    setShowLoading(false)
	 
	})
	.catch(()=>{
     setShowLoading(false)
	   incorect()
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

return(
  <div >
  {!showLoading?
  	<div >
  	  <button className='btndrop' onClick={retour}><ArrowBackIcon /></button>
  <IonGrid  className='container'>
       <IonRow>
       <IonCol size='12'>
       <form className='formmodal' onSubmit={handlesubmit}>
          <IonRow>
            <IonCol size='8'>
            <p className='centerbtn' ><label ><b>Code de verification  du numero de telephone 
         <IonText className='asterix'>*</IonText> </b></label></p>
          </IonCol>
         <IonCol size='8'>
         <p className='centerbtn'>
         <input
         className="w3-input w3-border w3-margin"
         required
          type='number'
        onChange={handlecode}
        onPaste={handlepaste}
        onKeyPress={handlekeypress} 
        min="0"
         />
          </p>    
            </IonCol>
            <IonCol size='8'>
            </IonCol>
              <IonCol size='10' className='centerbtn'>
                  <IonRow>
                <IonCol size='12'  >
                <button className="w3-btn w3-round-xlarge w3-black" type="submit">Confirmer</button>
                </IonCol>
                </IonRow>
                </IonCol>
            </IonRow>
         </form>
        </IonCol>
        </IonRow>
        </IonGrid>
        </div>:
    <IonLoading
    cssClass='my-custom-class'
    isOpen={showLoading}
    onDidDismiss={() => setShowLoading(false)}
    message={'Chargement...'}
    duration={5000}
     />}
  </div>

	)
}



export default CodeConfirmation