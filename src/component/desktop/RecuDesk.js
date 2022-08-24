import { IonCard, IonCol, IonGrid, IonIcon, IonItem, IonRow, IonText } from '@ionic/react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from 'react'
import logo from '../asset/logo.jpg'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Document, Page,Image,StyleSheet,PDFViewer,View,Text, Link,
  Font, }  from "@react-pdf/renderer";



const styles = StyleSheet.create({
 viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
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

function RecuDesk({recu,retour}) {  
 
    return (
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
     
     

        {/*
        <div className='desk'>
     <div className='recu'>
         <IonGrid>
         <IonRow>
          <IonCol size='6'>
                 <h2> <button className='btndrop mr-4' onClick={retour}> <ArrowBackIcon/> </button>
                  <img src={logo} className='logoimgdesk logomargin'/> <strong>GaalguiMoney</strong></h2> 
                  </IonCol>
                 <IonCol size='6' >
                  <IonItem> 
                      <IonText> <LocationOnIcon />  Dakar, rue on s en fiche </IonText>
                  </IonItem>
                  <IonItem>
                      <IonText> <LocalPhoneIcon/> +(221)772059140</IonText>
                      <IonText className='recutext' > +(221)772197305</IonText>
                      <IonText className='recutext' > www.gaalguimoney.com</IonText>
                  </IonItem>
                 </IonCol>
             </IonRow>
         </IonGrid>
        
         <div className='centerbtn'>
         <h2 className='centerbtn'><strong> Recu de transaction GaalguiMoney</strong></h2>
             <IonGrid>
                 <IonRow>
                     <IonCol size='5'>
                     <h3>Date de la transaction</h3>
                     <h2><strong>{new Date(recu.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}
                     </strong>
                     </h2>
                     </IonCol>
                     <IonCol size='5' >
                     <h3>Nature de la transaction </h3>
                     <h2><strong>{recu.nature_transaction}</strong></h2>
                      </IonCol>
                     {recu.code!=null?
                     <IonCol size='5'>
                    <h3>code de la transaction</h3>
                     <h2> <strong>{recu.code}</strong></h2>
                         </IonCol>:null}
                     <IonCol size='5'>
                     <h3>Montant de la transaction </h3>
                     <h2> <strong>{recu.montant} CFA </strong></h2>
                     </IonCol>
                     {recu.commission!=null?
                     <IonCol size='5' >
                     <h3>Commission </h3>
                     <h2> <strong>{recu.commission} CFA</strong></h2>
                     </IonCol>:null}
                     {recu.beneficiaire!=null?
                     <IonCol size='5' >
                     <h3>Beneficiaire </h3>
                     <h2><strong>{recu.beneficiaire} </strong></h2>
                     </IonCol>:null}  
                 </IonRow>
             </IonGrid>
         </div>
         <div className='cartsignature'>
             <IonCard>
             Signature
             </IonCard>    
         </div>       
     </div>  
     </div>

    <View style={styles.row}>
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

 */}
     </Page>
     </Document>
     </PDFViewer>
     )
}

export default RecuDesk


