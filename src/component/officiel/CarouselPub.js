import { IonGrid,IonRow,IonCol } from '@ionic/react'
import Carousel from "react-multi-carousel";
import Image from 'react-bootstrap/Image'
import React from 'react'



//Les pubs tape a l oeil de la page officielle


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

function CarouselPub({pub}) {
  
  
    return (
        <div className='  divcarousel'>
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
            alt=""  key={p.id} className='imgcarousel'/>
            )}
       </Carousel>
        </IonCol>
       </IonRow>
         </IonGrid>  
        </div>
    )
}

export default CarouselPub
