import {Link} from 'react-router-dom'
import {IonCard,IonItem,} from '@ionic/react'
import React from 'react'
import Divider from '@mui/material/Divider';


function AccueilMobile({message}){

return(
<div className='mobile'>
{message.length>0?
 <div>
 <h3 className='mt-3'> <strong>Dernières Transactions </strong></h3>
   <div>
  {message.map(m=>
   <div key={m.id}>
   <IonItem> <Link target="_blank" className='link' to={`/recu/${m.id}/${m.nature_transaction}`} >
    {m.message},{new Date(m.created).toLocaleDateString('en-GB',
     {hour: '2-digit', minute:'2-digit'})}</Link></IonItem>
     <Divider/>
     </div>
   )}</div>
  <Link className='link m-4' to='/transaction' >
  Voir l historique  </Link>
 </div>:null}
</div>

	);
}


export default AccueilMobile;