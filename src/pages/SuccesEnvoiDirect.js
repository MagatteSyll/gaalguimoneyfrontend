import React,{useState,useEffect, Fragment} from 'react'
import  {arrowBackOutline,checkmarkDoneOutline}  from 'ionicons/icons'
import axiosInstance from '../axios'
import { useParams } from 'react-router-dom';
import SuccessDirectDesk from '../component/desktop/SuccessDirectDesk'
import {useHistory} from 'react-router-dom'
import SuccesEnvoiDirectMobile from '../component/mobile/SuccesEnvoiDirectMobile'



function SuccesEnvoiDirect() {
    const {id} =useParams()
    const history=useHistory()
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)
    const [showLoading, setShowLoading] = useState(true);

    useEffect(()=>{
        let formdta=new FormData()
        formdta.append('id',id)
        axiosInstance
        .post('client/recudirect/',formdta)
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
         <SuccessDirectDesk recu={recu} retour={retour}/>
         <SuccesEnvoiDirectMobile recu={recu} retour={retour}/>
         </div>:null}

        </Fragment>
    )
}

export default SuccesEnvoiDirect
