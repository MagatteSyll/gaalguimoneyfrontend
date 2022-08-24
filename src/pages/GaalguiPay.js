import React,{useState,useEffect} from 'react'
import {IonGrid,IonRow,IonCol} from "@ionic/react"
import ForOfficialPage from "../component/officiel/ForOfficialPage"
import FooterOfficiel from "../component/officiel/FooterOfficiel"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardHeader from '@mui/material/CardHeader';
import axiosInstance from "../axios"


function GaalguiPay() {
    const [pay,setpay]=useState([])
    const [load,setload]=useState(false)


useEffect(()=>{
   getpay()
},[])
const getpay=()=>{
    axiosInstance
    .get("pay/getpayofficiel/")
    .then(res=>{
        setpay(res.data)
        setload(true)
    })
}



return (
 <div>
 {load?
 <>
 <IonGrid>
 <ForOfficialPage/>
 {pay.length>0?
 <div className="container">
 <h3>Services que vous payez avec GaalguiMoney</h3>
  <IonRow>
  {pay.map(p=>
    <IonCol size="4">
     <Card sx={{ maxWidth: 100 }}>
     <CardHeader
      title={p.alias}
     />
      <CardMedia
        component="img"
        alt="green iguana"
        height="70"
        image={`http://127.0.0.1:8000${p.logo}`} 
     //  src={`https://gaalguimoney.herokuapp.com${p.logo}`}}
      />
    </Card>
    </IonCol>)}
  </IonRow>
 </div>:<h2> Animation</h2>}
 <FooterOfficiel/>
 </IonGrid>
 </>:null}
 </div>
    )
}

export default GaalguiPay
