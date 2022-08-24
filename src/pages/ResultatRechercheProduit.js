import React,{useState,useEffect,} from 'react'
import axiosInstance from '../axios';
import {Card} from  '../../node_modules/react-bootstrap'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link,} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify'
import {IonLoading,IonIcon} from '@ionic/react'
import { starSharp } from 'ionicons/icons'





function ResultatRechercheProduit(props){
  /* const search = 'produit/search'
    const  [load, setload] = useState(false)
  const [produit, setproduit] = useState([]);
    const  [user, setuser] = useState({})
    const [showLoading, setShowLoading] = useState(true)
    const isStaf=props.isStaf
    const handlebadge=props.handlebadge
    item=props.match.params.produit
  

  useEffect(() => {
    axiosInstance
        .get(search + '/' + window.location.search)
        .then((res) => {
      //const allPosts = res.data;
      setproduit(res.data);
            setload(true)
      console.log(res.data);
    }); 
    },[])
    useEffect(()=>{
        axiosInstance
        .get('utilisateur/getuser/')
        .then(res=>{
            setuser(res.data)
        })
    },[])

    useEffect(() => {
        axiosInstance
        .get('utilisateur/isauthenticated/')
        .then(res=>{
            //setislogged(res.data)
           // console.log(res.data)
        })
     }, [])

   
    const notify = () => toast.success("produit ajouté au panier ",
    {
      position:toast.POSITION.TOP_CENTER,
      autoClose:false
    });


    const  HandleAddCart = id =>{
        axiosInstance
      .post("produit/addcart/",{id})
       .then(res=>{
       // console.log(res.data)
       handlebadge()
       notify()

        
        })
    }
    /*
 

  return(
       <div>
        hey
        </div>

 )
}

export default ResultatRechercheProduit;



/*
   {load?
      <div>
        <div className=" row -3 m-3">  
        { produit.length>0 ? produit.map(pi=>  
          <div className="col-md-3 mt-1 ">
             {pi.nom}
      </div>):<h1 style={{textAlign:'center',color:'magenta'}}>
           Oups aucun produit ne correspond a la recherche</h1>}
      </div>
      </div>:<IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Chargement...'}
        duration={5000}
    />} 
    */