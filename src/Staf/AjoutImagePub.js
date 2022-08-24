import React, {useState} from 'react'
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import axiosInstance from '../axios'
import {toast} from 'react-toastify'
import {useHistory} from 'react-router-dom'
import Button from '@mui/material/Button';

function AjoutImagePub(){
	const [img,setimg]=useState("")
	const [fil,setfil]=useState("")
	const [load,setload]=useState(false)
	const [description,setdescription]=useState("")
  const history=useHistory()
 
const handleimg=e=>{
	setimg(URL.createObjectURL(e.target.files[0]))
	setfil(e.target.files[0])
	setload(true)
}
 
  const notify = () => toast.success("image bien  ajoutée ",
  {
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
  });
const handlesubmit=e=>{
	e.preventDefault()
	if(fil!==""||description!==""){
		let formData= new FormData()
		formData.append('image',fil)
		formData.append('description',description)
		axiosInstance
		.post('staff/ajoutpub/',formData)
	    .then(res=>{
          // console.log(res.data)
           //window.location.reload()
           notify()
           history.goBack()

	    })
	}
}
const handledescription=e=>{
	setdescription(
		e.target.value)
}

return (
   <div className='container'>
   <form onSubmit={handlesubmit}>
   <IonGrid>
   <IonRow>
   <IonCol size='8' className='centerbtn mt-4'>
   <p className='centerbtn'> <label>Choisir l image </label></p>
   <p className='centerbtn'> <input className="w3-input" type="file" accept="image/*" onChange={handleimg}/></p>
   </IonCol>
    <IonCol size='8' className='centerbtn mt-4'>
      <textarea 
   placeholder="Description de la publicite" required onChange={handledescription}
     rows="4" cols="50" name='description' />
      </IonCol>
    {load?
   <IonCol size='8'>
   	<div className='centerbtn'>
   	<img src={img} alt='' className='imglogo'/>
   	</div>
   </IonCol>:null}
    <IonCol size='8' className='centerbtn'>
    <p>
     <Button
        type="submit"
        style={{
        color:"white",
        backgroundColor: "#4B0082",}} variant="contained" >
         Soumettre
     </Button> 
   </p>
    </IonCol>
   </IonRow>
   </IonGrid>
   </form>
   

  </div>
	)


}

export default AjoutImagePub