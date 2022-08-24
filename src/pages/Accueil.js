import React from 'react'
import AccueilStaff from '../Staf/AccueilStaff';
import AccueilUser from './AccueilUser'



function Accueil({isstaf,user}) {
   
    
    return ( 
        
        <div> 
        {isstaf?<AccueilStaff user={user} />:
        <AccueilUser user={user}/>}
        </div> 
    )
}

export default Accueil
