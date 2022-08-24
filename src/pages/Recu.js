import React,{useState,useEffect, Fragment} from 'react'
import RecuDesk from '../component/desktop/RecuDesk'
import RecuMobile from '../component/mobile/RecuMobile'
import { useParams } from 'react-router-dom';
import axiosInstance from '../axios'
import { Document, Page,Image,StyleSheet,PDFViewer,View,Text, Link,
  Font, }  from "@react-pdf/renderer";
import logo from '../component/asset/logo.jpg'





 const styles = StyleSheet.create({
 viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
   // height: window.innerHeight,
   height: 600
  },
  image: {
    width: 100,
    height: 50,
    margin:5,
    borderRadius:20,
  },
  tampon:{
    width: 120,
    height: 50,
    margin:'0 auto',
    marginBottom:30,

 },
  title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    //backgroundColor: '#e4e4e4',
    textTransform: 'uppercase',
    fontFamily: 'Oswald',
  },
  body: {
    flexGrow: 1,
  },
  block: {
    flexGrow: 1,
  },
  text: {
    width: '40%',
    margin: 5,
    fontFamily: 'Oswald',
    textAlign: 'justify',
    color:'black'
  },
  data:{
    color:'black',
    margin:3,
    fontWeight:'bold',
    fontFamily: 'Oswald',
  },
});

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
});

function Recu() {
   const {id}=useParams()
   const {transaction}=useParams()
    const  [code, setcode] = useState(true)
    const  [recu, setrecu] = useState([])
    const  [load, setload] = useState(false)

    useEffect(()=>{
      axiosInstance
      .post('client/messagespecifique/',{'id':id})
      .then(res=>{ 
        console.log(res.data)
        setrecu(res.data)
        setload(true) 
      })

    },[])
  const retour=()=>{
    
  }

    return (
     <Fragment>
       {load && recu.nature_transaction===transaction?
       <div>
        <PDFViewer style={styles.viewer}>
        <Document>
        <Page size="A4" style={styles.page}> 
      <View style={styles.body}>
      <View>
       <Image  style={styles.image}
       src={logo} alt='' />
     <Text style={styles.text}>
           Dakar, rue on s en fiche
        </Text>
        <Text style={styles.text}>
         +(221)772059140 
          </Text>
        <Text style={styles.text}>
        www.gaalguimoney.com
        </Text> 
      </View>
       <View style={styles.title}>
       <Text >Recu de transaction GaalguiMoney</Text>
        </View>
    <View>
   <Text style={styles.data} > 
   Date de la transaction:{new Date(recu.created).toLocaleDateString('en-GB', {hour: '2-digit', minute:'2-digit'})}
   </Text>
   <Text style={styles.data}>
   Nature de la transaction:{recu.nature_transaction}
   </Text>
    {recu.code!=null?
    <Text style={styles.data}>
    Code de la transaction :{recu.code}
   </Text>:null}
    <Text style={styles.data}>
    Montant de la transaction :{recu.montant} CFA
    </Text>
     {recu.commission!=null?
    <Text style={styles.data}>
    Commission: {recu.commission} CFA
   </Text>:null}
   {recu.beneficiaire!=null?
  <Text style={styles.data}>
   Bénéficiaire:{recu.beneficiaire} 
   </Text>:null} 
    </View>
    <View>
   <Image  style={styles.tampon} src={logo} alt='' />
    </View>
    </View>
     </Page>
     </Document>
     </PDFViewer>
   </div>:null}
            
     </Fragment>   
     
       
    )
}

export default Recu
