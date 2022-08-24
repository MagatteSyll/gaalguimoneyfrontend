import {IonGrid,IonRow,IonCol,IonText} from '@ionic/react'
import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {useHistory} from 'react-router-dom'
import {toast } from 'react-toastify'

function VerificationPhone(props){
	const history=useHistory()
	let id=props.match.params.id
	let nom=props.match.params.nom
    let code_id=props.match.params.code
    const [user,setuser]=useState([])
    const [load,setload]=useState(false)
    const [code,setcode]=useState("")

    
   useEffect(()=>{
        getnewuser()
   },[])
    const getnewuser=()=>{
    	axiosInstance
    	.post('client/getnewuser/',{id:id})
    	.then(res=>{
    		setuser(res.data)
    		setload(true)
    	})
    }

   const erreurmdp = () => toast.success("Inscription reussie",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
   const verifier = () => toast.error("Code invalide!",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });

    const handlecode=e=>{
    	setcode(e.target.value)
    	//console.log(e.target.value)

    }
    const handleconfir=e=>{
       e.preventDefault()
       axiosInstance
       .post('client/verificationphoneinscription/',{
       	code_id:code_id,id:id,code:code
       })

      .then(()=>{
      	history.push('/connexion')
      })
      .catch(()=>{
      	verifier()
      })
    }


return(
 <div className='container'>
 {load && nom===user.prenom+""+user.nom && user.active==false ?
    <div>
      <IonGrid>
       <IonRow>
       <IonCol size='12'>
       <form className='formmodal' onSubmit={handleconfir}>
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
    </div>:null}
  
 </div>

);
}


export default VerificationPhone;