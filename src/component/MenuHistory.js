import React,{useState} from 'react'
import {IonIcon, IonSegment, IonSegmentButton, IonText,IonLabel,IonItem,IonCard} from '@ionic/react'
import {Link} from 'react-router-dom'
import Pagination from './Pagination'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';





const searchnature=(message,nature)=>{
   if(message.some(m=> m.nature_transaction ===nature)){
    return true
} else{
    return false
}
  }
function MenuHistory({messages}) {
  const [ghisto, setghisto] = useState(true)
  const [direct, setdirect] = useState(false)
  const [code, setcode] = useState(false)
  const [pay, setpay] = useState(false)
  const [retrait, setretrait] = useState(false)
  const [depot, setdepot] = useState(false)
  const [reception, setreception] = useState(false)
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    if(newValue===0){
    setdirect(false)
     setghisto(true)
     setcode(false)
     setpay(false)
     setretrait(false)
     setdepot(false)
     setreception(false)
    setValue(newValue)  
    }
    if(newValue===1){
     setdirect(true)
     setghisto(false)
     setcode(false)
     setpay(false)
     setretrait(false)
     setdepot(false)
     setreception(false)
    setValue(newValue)
     
    }
   if(newValue===2){
    setcode(true)
    setghisto(false)
    setdirect(false)
    setpay(false)
    setretrait(false)
    setdepot(false)
    setreception(false)
    setValue(newValue);
   

   }
  if(newValue===3){
    setdepot(true)
    setghisto(false)
    setdirect(false)
    setcode(false)
    setpay(false)
    setretrait(false)
    setreception(false)
    setValue(newValue);
    
  }
if(newValue===4){
    setreception(true)
    setghisto(false)
    setdirect(false)
    setcode(false)
    setpay(false)
    setretrait(false)
    setdepot(false)
    setValue(newValue);
    

}
if(newValue===5) {
    setpay(true)
    setghisto(false)
    setdirect(false)
    setcode(false)
    setretrait(false)
    setdepot(false)
    setreception(false)
    setValue(newValue);
    

}
if(newValue===6){
    setretrait(true)
    setghisto(false)
    setdirect(false)
    setcode(false)
    setpay(false)
    setdepot(false)
    setreception(false)
    setValue(newValue);


}
  };


  
  


    return (
        <div className='displayside'>
         <Box sx={{  bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
        <Tab label="Tout"/>
        <Tab label="Envoi direct" />
        <Tab label="Envoi code" />
        <Tab label="Depot" />
        <Tab label="Reception" />
        <Tab label="Payement" />
        <Tab label="Retrait" />
      </Tabs>
    </Box>
    <div className='divhistory'>
        {ghisto?<HistoriqueGenerales messages={messages}/>:null}
        {direct?<HistoryEnvoiDirectMobile messages={messages} />:null}
        {code?<HistoryCodeMobile messages={messages} />:null}
        {pay?<HistoryPayementMobile messages={messages} />:null}
        {retrait?<HistoryRetraitMobile messages={messages} />:null}
        {depot?<HistoryDepotMobile messages={messages}/>:null}
        {reception?<HistoriqueReceptionMobile messages={messages}/>:null}
        </div>
        </div>
    )
}



function HistoriqueGenerales({messages}) { 
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
   return (
       <div >
          <IonCard>
          {messages.length>0?
           <div className='mt-3'>
               {currentPosts.map(m=>
           <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
            {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link>
            </IonItem>)}
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      />
         </div>:<IonItem> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
        </IonCard>
       </div>
   )
}
function  HistoriqueReceptionMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div>
           {messages.length>0?
            <>
           {searchnature(messages,"reception")?
            <div className='mt-3'>
                {messages.map(m=>
              m.nature_transaction==="reception"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/{m.nature_transaction}`} className='link'>
           {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link> 
             </IonItem>:null )}
            <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
          paginate={paginate}
      />  
          </div>:<IonItem> <IonLabel>Aucun transfert reçu</IonLabel></IonItem>}
    </>:<IonItem> <IonLabel>Aucune transaction</IonLabel></IonItem>}
        </div>
    )
}


function  HistoryCodeMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div >
           {messages.length>0?
            <>
            {searchnature(messages,"envoi via code")?
            <div className='mt-3'>
                {messages.map(m=>
              m.nature_transaction==="envoi via code"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/{m.nature_transaction}`} className='link'> 
           {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link>
             </IonItem>:null
          )}
            <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      />
 </div>:<IonItem> <IonLabel> Oups vous n avez effectué aucun envoi via code . </IonLabel></IonItem>}
 </>:<IonItem> <IonLabel> Oups vous n avez effectué aucune transaction . </IonLabel></IonItem>}
        </div>
    )
}

function HistoryDepotMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
   return ( 
       <div>
          {messages.length>0?
            <>
            {searchnature(messages,"depot")?
           <div className='mt-3'>
               {messages.map(m=>
            m.nature_transaction==="depot"?
           <IonItem key={m.id}>
          <IonItem className='centerbtn' >
          <Link to={`/recu/${m.id}/{m.nature_transaction}`} className='link'> 
          {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</Link></IonItem>
            </IonItem>:null)}
         <Pagination
        postsPerPage={postsPerPage}
        totalPosts={messages.length}
        paginate={paginate}
      />
         </div>:<IonItem> <IonLabel>Oups vous n avez effectué aucun depot</IonLabel></IonItem>}
      </>: <IonItem> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}</div>
   )
       
}

function HistoryEnvoiDirectMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
   
    return (
        <div >
           {messages.length>0?
            <>
            {searchnature(messages,"envoi direct")?
            <div className='mt-3'>
                {messages.map(m=>
            m.nature_transaction==="envoi direct"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
                 {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
                 </Link>
             </IonItem>:null
          )}
           <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
         paginate={paginate}
        />
          </div>:<IonItem><IonLabel>Oups vous n avez effectué aucun envoi direct</IonLabel></IonItem>}
          </>:<IonItem><IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
          </div>
            
        
    )
}

  function HistoryPayementMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div >
           <IonCard>
           {messages.length>0?
            <>
            {searchnature(messages,"payement")?
            <div className='mt-3'>
                {messages.map(m=>
            m.nature_transaction==="payement"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'>
                {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
                </Link>
             </IonItem>:null)}
            <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
         paginate={paginate}
        /> 
          </div>:<IonItem> <IonLabel>Oups vous n avez effectué aucun payement</IonLabel></IonItem>}
          </>:<IonItem> <IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
         </IonCard>

        </div>
    )
}

function  HistoryRetraitMobile({messages}) {
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = messages.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div >
           
            {messages.length>0?
            <>
            {searchnature(messages,"retrait")?
            <div className='mt-3'>
                {messages.map(m=>
                  m.nature_transaction==="retrait"?
            <IonItem key={m.id}>
           <Link to={`/recu/${m.id}/${m.nature_transaction}`} className='link'> 
            {m.message},{new Date(m.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
            </Link>
             </IonItem>:null
          )}
          <Pagination
          postsPerPage={postsPerPage}
          totalPosts={messages.length}
         paginate={paginate}
        />
          </div>:<IonItem><IonLabel>Oups vous n avez effectué aucun retrait</IonLabel></IonItem>}
         </>:<IonItem><IonLabel>Oups vous n avez effectué aucune transaction</IonLabel></IonItem>}
        </div>
    )
}










export default MenuHistory

