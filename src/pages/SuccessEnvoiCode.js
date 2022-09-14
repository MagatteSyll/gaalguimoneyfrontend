import React,{useState,useEffect, Fragment} from 'react'
import {useHistory } from 'react-router-dom'
import axiosInstance from '../axios'
import { useParams } from 'react-router-dom';
import SuccessEnvoiCodeDesk  from '../component/desktop/SuccessEnvoiCodeDesk'
import SuccesEnvoiCodeMobile from '../component/mobile/SuccesEnvoiCodeMobile'

function SuccessEnvoiCode() {
    const {id} =useParams()
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);
    const history=useHistory()

    useEffect(()=>{
        axiosInstance
        .post('client/recucode/',{'id':id})
        .then(res=>{
            
            setrecu(res.data)
            setload(true)
        }) 
  },[])
 const retour=()=>{
   history.go(-3)
 }
    return (
  <Fragment>
  {load?
  <div>
   <SuccessEnvoiCodeDesk recu={recu} retour={retour}/> 
   <SuccesEnvoiCodeMobile recu={recu} retour={retour} />
  </div>:null}
  </Fragment>
    )
}

export default SuccessEnvoiCode
