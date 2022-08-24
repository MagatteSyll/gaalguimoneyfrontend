import React from 'react'
import {IonGrid,IonRow,IonCol} from "@ionic/react"
import ForOfficialPage from "../component/officiel/ForOfficialPage"
import FooterOfficiel from "../component/officiel/FooterOfficiel"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




function Tarif() {
    return (
        <div>
        <ForOfficialPage/>
        <div className="container">
        <IonGrid>
        <IonRow>
        <IonCol size="4">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="pinkstyle">
          Tarif general
        </Typography>
        <Typography variant="body2" >
          Le coùt d une transaction (envoi d un compte à un autre compte où envoi via code) s élève à 
          <strong className="redstyle"> 1% </strong>
        </Typography>
      </CardContent>
        </Card>
        </IonCol>
        <IonCol size="4">
        <Card sx={{ maxWidth: 345 }}>
          <CardContent>
        <Typography gutterBottom variant="h5" component="div" className="purplestyle">
          GaalguiMoneyPay
        </Typography>
        <Typography variant="body2" >
         Les transferts faits aux comptes professionnels(facture,scolarité,commerciaux...) sont <strong className="rosestyle">
         sans frais </strong>
        </Typography>
      </CardContent>
        </Card>
        </IonCol>
         <IonCol size="4">
         <Card sx={{ maxWidth: 345 }}>
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Depot,Retrait 
        </Typography>
        <Typography variant="body2">
        Vous pouvez faire vos depots et retraits dans n importe lequel de nos  points d acces
        </Typography>
      </CardContent>
        </Card>
        </IonCol>
        <IonCol size="4">
         <Card sx={{ maxWidth: 345 }}>
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
        </Card>
        </IonCol>
        <IonCol size="4">
         <Card sx={{ maxWidth: 345 }}>
          <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
        </Card>
        </IonCol>
        </IonRow>
        </IonGrid>
        </div>
       
       <FooterOfficiel/>
        </div>
    )
}

export default Tarif

/*
<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      */