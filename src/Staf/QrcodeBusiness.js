import React,{useState,useEffect} from 'react'
import axiosInstance from '../axios'
import {IonCard} from '@ionic/react'
import {useHistory,Link} from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';






function QrcodeBusiness(props){
   let id=props.match.params.id
   const [data,setdata]=useState("")
   const [load,setload]=useState(false)
   const history=useHistory()


  useEffect(()=>{
  	getcode()
  },[])
   const getcode=()=>{
       axiosInstance
       .post('/staff/getqrcode/',{id:id})
       .then(res=>{
         setdata(res.data.file)
         //console.log(res.data)
         setload(true)
         //console.log(JSON.parse(res.data.file))
       })
   }


return(
 <div className='mt-4 ml-4'>
  {load? 
  <>
  <p>
  <Link to='/accueil' className='link'>
<IonCard className='widthlogo'>Logo</IonCard>
</Link>
 </p>

 <div className=' qrcodedive'>
 <img 
 src={`http://127.0.0.1:8000${data}`} 
// src={`https://gaalguimoney.herokuapp.com${data}`}
 alt='' className='imgqrcode'/>
 </div>
 </>:null}
 
 </div>


)



}



export default QrcodeBusiness