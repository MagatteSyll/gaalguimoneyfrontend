import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {useHistory} from 'react-router-dom'
import React, {useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonText} from '@ionic/react'
import {toast } from 'react-toastify'






function CompteProfessionnel(){
  const history=useHistory()
    const [region,setregion]=useState([])
    const [load,setload]=useState(true)
    const [cityload,setcityload]=useState(false)
    const [pays,setpays]=useState()
    const [img,setimg]=useState("")
    const [imgload,setimgload]=useState(false)
    const [data,setdata]=useState({
        nom:'',
        description:'',
        phonegaalguimoney:'',
        contact:'',
        document:'',
        logo:'',
        region:''
    })
useEffect(()=>{
   getregion()
},[])

const getregion=()=>{
    axiosInstance
    .get('staff/getregion/')
    .then(res=>{
        setregion(res.data)
        setload(true)
      // console.log(res.data)
    })
}
 const erreur = () => toast.error("Veuillez remplir tous les champs!",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
 const notify = () => toast.success("Compte professionnel bien cree",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
 const badresponse=() => toast.error("Veuillez verifier les donnees entrees !",{
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });
   
const handledata=e=>{
setdata({
 ...data,[e.target.name]: e.target.value.trim()
})

}
const handlelogo=e=>{
    setdata({
        ...data,logo:e.target.files[0]
    })
setimg(URL.createObjectURL(e.target.files[0]))
setimgload(true)
}
const handledocument=e=>{
    setdata({...data,document:e.target.files[0]})
}
const handlesubmit=e=>{
    e.preventDefault()
   // console.log(data)
    if(data.nom===""|| data.phonegaalguimoney==="" ||
        data.contact===""||data.document===""||
        data.nom.match(/^ *$/)!== null||data.description===""||data.logo==""){
    erreur()
    return;}
    else{
      let   formdata=new FormData()
        formdata.append('nom',data.nom)
        formdata.append('business_desription',data.description)
        formdata.append('phone',data.phonegaalguimoney)
        formdata.append('contact',data.contact)
        formdata.append('logo',data.logo)
        formdata.append('region',data.region)
        formdata.append('document',data.document)
        axiosInstance
        .post('staff/createprofessionnel/',formdata)
        .then(res=>{
           //console.log(res.data)
            history.push(`/qrcodeprofessionnel/${res.data.id}/${res.data.alias}`)
            notify()
        })
        .catch(()=>{
          badresponse()
        })

    }
}




return(
 <div className='mt-4'>
        {load?
        <>
       <h1 className='container mb-4'>Creation de  Compte professionnel GaalguiMoney</h1>
     <form className=' container mt-4' onSubmit={handlesubmit}>
     <div className="w3-section formbusiness divform ">
      <p className='centerbtn'> <label  className="w3-container"><b>Nom de l entreprise </b></label></p>
     <p> <input className="w3-input w3-border" type="text" name='nom' onChange={handledata} required /></p>
      <p className='centerbtn mt-4'> <textarea placeholder="Petite description de l entreprise " required 
     rows="4" cols="50" name='description' onChange={handledata}
     /></p>
    <p className='centerbtn'> <label  className="w3-container"><b>Numero de telephone lie au compte GaalguiMoney</b></label></p>
     <p> <input className="w3-input w3-border" type='tel' name="phonegaalguimoney" onChange={handledata}  required /></p>
     <p className='centerbtn'> <label  className="w3-container"><b>Contact de l entreprise
      (<IonText className='redstyle'> tel ,email ...</IonText>)</b></label></p>
     <p> <input className="w3-input w3-border" type="text" name='contact' onChange={handledata}  required /></p>
      <p >
           <select 
           className='pselect'
        // className='marginselect'
         onChange={handledata}
           name='region'
           >
           <option  value="" disabled selected >Location de l entreprise</option>
           {region.map(r=>
            <option value={r.id}>{r.region}</option>)}
           </select>
             </p>
    <p className='mt-4'><label  className="w3-container"><b>logo de l entreprise </b></label>
    <input type='file' accept="image/*"  required onChange={handlelogo}/></p>
    {imgload?
    <p> <img src={img} alt='' className='imglogo'/>
    </p>:null}
    <p className='mt-4'><label  className="w3-container"><b>Document administratif de l entreprise </b></label>
    <input type='file' onChange={handledocument} required/></p>
    
      <p className='centerbtn'> 
      <button className="w3-button w3-round-xxlarge w3-green w3-margin" type="submit">Valider</button></p>  
      </div>
     </form>
     </>:null}
        </div>


	)
}

export default CompteProfessionnel