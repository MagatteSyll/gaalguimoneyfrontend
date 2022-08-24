import { IonCard, IonCol, IonGrid, IonItem, IonRow,IonText } from '@ionic/react'
import { Link } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import React from 'react'

function RecuMobile({recu}) {
    
    return (
        <div className='mobile'>
            <IonGrid>
                <IonRow>
                    <IonCol size='8'>
                    <IonItem>
                 <Link to='/accueil'><ArrowBackIcon className='iconsocial'/> </Link> 
                  </IonItem>
                    <IonCard>
                    Logo
                  </IonCard>
                    </IonCol>   
                </IonRow>
            </IonGrid>
            <div className='divrecumobile'>
                <h6><b>Reçu de transaction GaalguiMoney</b></h6>
                <p>Date de la transaction <b>{new Date(recu.created).toLocaleDateString('en-GB',
                     {hour: '2-digit', minute:'2-digit'})}</b></p>
                <p>Nature de la transaction <b>{recu.nature_transaction}</b></p>
               {recu.code!=null? <p>Code de retrait:<b>{recu.code}</b></p>:null}
               <p>Montant de la transaction <b>{recu.montant} CFA </b></p>
               {recu.commission!=null?<p>Commission <b>{recu.commission} CFA</b></p>:null}
              {recu.beneficiaire!=null? <p>Beneficiaire <b>{recu.beneficiaire}</b></p>:null}
            </div>
           <div style={{marginTop:'30px'}}>
               <IonCard>
                   Signature
               </IonCard>
               <IonItem>
             <LocationOnIcon />  Dakar, rue on s en fiche
               </IonItem>
               <IonItem>
                      <IonText> <LocalPhoneIcon/> +(221)772059140</IonText>
                      <IonText className='recutext' > +(221)772197305</IonText>
                  </IonItem>
                  <IonItem>
                  <IonText className='recutext'> www.gaalguimoney.com</IonText>
                  </IonItem>
                      
           </div>

        </div>
    )
}

export default RecuMobile
