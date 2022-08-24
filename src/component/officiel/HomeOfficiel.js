import Nouveautes from './Nouveautes';
import CarouselPub from './CarouselPub';
import React from 'react'

//page accueil  officielle 


function HomeOfficiel({pub}) {

    return (
        <div> 
        <CarouselPub pub={pub}/>
         <Nouveautes/> 
        </div>
    )
}

export default HomeOfficiel
