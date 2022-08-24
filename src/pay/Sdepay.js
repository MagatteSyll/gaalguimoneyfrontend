import React, {useState,useEffect} from 'react'
import SdepayDesk from '../component/desktop/SdepayDesk'
import SdepayMobile from '../component/mobile/SdepayMobile'
import {toast } from 'react-toastify'
import axiosInstance from '../axios'
import {useHistory} from 'react-router-dom'





function Sdepay({isstaf}){
   const [sde,setsde]=useState([])
   const history=useHistory()
   const [load,setload]=useState(false)
   const [data,setdata]=useState({
   nom:"",
   numero:"",
   montant:"",
   debut:"",
   fin:""
  })

const handlekeypress=e=>{
   if (e.key ==="-"||e.key==="+"||e.key==="e"||e.key==="E") {
        e.preventDefault()
        return false
      }

}
const handlepaste=e=>{
  const clipboardData = e.clipboardData || window.clipboardData;
  const pastedData = parseFloat(clipboardData.getData('text'));
  const data=clipboardData.getData('text')

    if (pastedData < 0||data==="e"||data==="E"||data==="-"||data==="+") {
        e.preventDefault();
    }

}


const erreur = () => toast.error("Veuillez remplir tous les champs! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });
const invalide = () => toast.error("Veuillez entrer des donnees valides! ",{
    position:toast.POSITION.TOP_CENTER,
    autoClose:false
    });

const handledata=e=>{
setdata({
 ...data,[e.target.name]: e.target.value.trim()
})}
const handlefin= (newValue) => {
    setdata({...data,fin:newValue});
 };
 const handledebut = (newValue) => {
 setdata({...data,debut:newValue});
};

const handlesubmit=e=>{
  e.preventDefault()
 if(data.nom===""||data.numero===""||data.montant===""||data.nom.match(/^ *$/)!== null){
   erreur()
   return;
 }
if(data.montant<=0||data.numero<=0){
    invalide()
    return ;
}
else{
let formdata=new FormData()
formdata.append('montant',data.montant)
formdata.append('numero',data.numero)
formdata.append('nom_complet_client',data.nom)
  axiosInstance
  .post("pay/payementsde/",formdata)
  .then(res=>{
    //console.log(res.data)
    history.push(`/sdepaysuccess/${res.data.id}/${res.data.alias}`)
  })
 
 }
}



return(
 <div>
 <SdepayDesk data={data} handledata={handledata} handlekeypress={handlekeypress} handlepaste={handlepaste}
  handlesubmit={handlesubmit} handledebut={handledebut} handlefin={handlefin}/>
 <SdepayMobile data={data} handledata={handledata} handlekeypress={handlekeypress} 
 handlepaste={handlepaste}
  handlesubmit={handlesubmit} handledebut={handledebut} handlefin={handlefin}/>
 </div>
 
	)	
}


export default Sdepay