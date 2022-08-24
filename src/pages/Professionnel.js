import React from 'react'
import ForOfficialPage from "../component/officiel/ForOfficialPage"
import FooterOfficiel from "../component/officiel/FooterOfficiel"
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {IonGrid,IonRow,IonCol} from '@ionic/react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PanToolAltIcon from '@mui/icons-material/PanToolAlt';


function Professionnel() {
    return (
        <div>
        <ForOfficialPage/>
         <IonGrid>
         <IonRow>
         <IonCol size="6">
         <Card sx={{ minWidth: 275 }}>
         <CardContent>
        <Typography sx={{ fontSize: 12 }}  className='orangestyle' variant='h3' gutterBottom>
         Vous avez un business?
        </Typography>
        <Typography variant="h5" component="div">
          GaalguiMoney vous propose des comptes speciaux destinés à vous rapprocher
          de vos clients et de vos partenaires .En un simple click <PanToolAltIcon/>, vos clients peuvent payer leurs services et cela sans frais 
          Pour beneficier de ces incroyables "kheweuls",rendez vous au point d acces le plus proche <Button size="small"> <LocationOnIcon className='iconsocial'/></Button>
          ou simplement ,joindre  <Button size="small">Le service client</Button>
        </Typography>
         </CardContent>
       </Card>
         </IonCol>
         <IonCol size='6'>
         <Card sx={{ minWidth: 275 }}>
         <CardContent>
        <Typography sx={{ fontSize: 12 }}  className='darkmagentastyle' variant='h3' gutterBottom>
         Vous avez une grande entreprise ?
        </Typography>
        <Typography variant="h5" component="div">
          GaalguiMoney vous offre la possibilité d avoir votre propre calpé sur la plateforme où vos cients peuvent payer n importe 
          lequel de vos services en un rien de temps ,pour plus de renseignement,contactez  
          <Button size="small">notre service client</Button>
        </Typography>
         </CardContent>
       </Card>
         </IonCol>
         </IonRow>
         </IonGrid>
        <FooterOfficiel/>

        </div>
    )
}

export default Professionnel


