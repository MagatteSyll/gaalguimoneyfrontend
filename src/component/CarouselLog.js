import React,{useState,useEffect} from 'react'
import Carousel from "react-multi-carousel";
import axiosInstance from '../axios'
import Image from 'react-bootstrap/Image'
import { IonGrid,IonRow,IonCol } from '@ionic/react'





const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

function Carouselog(){
  const [pub,setpub]=useState([])
  const [load,setload]=useState(false)

  useEffect(()=>{
    axiosInstance
  .get('client/getpub')
  .then(res=>{
     setpub(res.data)
     setload(true)
     //console.log(res.data)
  })
 
 },[])

return(
  <div >
  {load?
        <IonGrid> 
        <IonRow>
        <IonCol size='12'>
        <Carousel
        responsive={responsive}
         containerClass="carousel-container" 
        infinite={true}
         autoPlay={true}
         autoPlaySpeed={5000}
         transitionDuration={500} >
           {pub.map(p=>
          <Image  
         // src={`http://127.0.0.1:8000${p.image}`} 
           src={`https://gaalguimoney.herokuapp.com${p.image}`}
          alt=""  key={p.id} className='imgcarousellog'/>
            )}
       </Carousel>
        </IonCol>
       </IonRow>
         </IonGrid>  
         :null} 
  </div>

);
}
export default Carouselog;