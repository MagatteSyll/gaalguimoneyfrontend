import React from 'react'
import ReactPaginate from 'react-paginate';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {IonItem} from '@ionic/react'
import Divider from '@mui/material/Divider';
import {Link} from 'react-router-dom'




function HistoriqueDesk({messages,next,previous,handledisplay,count,retour}) {
	
return(
 <div className='desk displayside'>
 <button className='btndrop' onClick={retour}><ArrowBackIcon /></button>
 <div className='mt-3'>
  {messages.map(m=>
  <div  key={m.id}>
  <IonItem>
  <Link target="_blank" to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
  {m.message},{new Date(m.created).toLocaleDateString('en-GB',
  {hour: '2-digit', minute:'2-digit'})} 
  </Link>
  </IonItem>
  <br/>
  <Divider/>
  </div>)}
  </div>
   <div className='divpagination'>
  {count>1?
<ReactPaginate
  breakLabel="..."
  nextLabel={next!=null && count>4?<ArrowForwardIcon className='logocolor'/>:null}
  marginPagesDisplayed={2}
  containerClassName={"pagination"}
  pageClassName={"page-item paginationsuivant "}
  pageLinkClassName={"page-link"}
  nextClassName={' paginationsuivant'}
  previousClassName={ 'paginationsuivant '}
  breakClassName={'page-item'}
  breakClassNameLink={'page-link'}
  onPageChange={handledisplay}
  pageRangeDisplayed={2}
  pageCount={count}
  previousLabel={previous!=null && count>4?<ArrowBackIcon className='logocolor'/>:null}
  renderOnZeroPageCount={null}
   />:null}
   </div>
 </div>

)
}


export default HistoriqueDesk