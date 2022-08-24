import React,{Fragment} from 'react'
import Navigation from '../Staf/Navigation';
import axiosInstance from '../axios';
import {useHistory} from 'react-router-dom'
import NavUser from './NavUser'


//Navigation de la page personnelle
function Nav({isstaf,islog,user}) {
  const history=useHistory()
  

   const deconnexion=()=>{
    localStorage.removeItem('__jmdf__');
    localStorage.removeItem('__jvmdf__');
    axiosInstance.defaults.headers['Authorization'] = null;
    window.location.reload()
    history.push('/');
 
   }
   
     
  
  
    return (
      <Fragment>
       {isstaf? <Navigation user={user}/>:
        <NavUser deconnexion={deconnexion} user={user}/>}
      </Fragment>
      
    );
}

export default Nav


