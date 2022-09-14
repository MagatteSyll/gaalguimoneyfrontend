import React,{useState,useEffect,Fragment} from 'react'
import { Document, Page,Image,StyleSheet,PDFViewer,View }  from "@react-pdf/renderer";
import axiosInstance from '../axios'
import axios from 'axios'





const styles = StyleSheet.create({
  page: {
   // backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
 image: {
    width: 400,
    height: 350,
  },
});

function QrCodePage(){
	const [qrcode,setqrcode]=useState()
	const [load,setload]=useState(false)
	

	useEffect(()=>{
		getqrcode()
	},[])
	const getqrcode=()=>{
    axios
    .get('http://127.0.0.1:8000/api/client/getuserqrcode/',
    {headers:{
  'Authorization': `JWT ${localStorage.getItem('__jmdf__')}`
    }})
	//axiosInstance
	//.get('client/getuserqrcode/')
	.then(res=>{
    console.log(res.data)
		setqrcode(res.data.qrcode)
		setload(true)
	})

	}

return(
	<Fragment>
	{load?
   <PDFViewer style={styles.viewer}>
      <Document>
        <Page size="A4" style={styles.page}>
          <Image  style={styles.image}
       //src={`http://127.0.0.1:8000${qrcode}`} 
src={`https://gaalguimoney.herokuapp.com${qrcode}`}
 alt='' />
         
        </Page>
      </Document>
    </PDFViewer>:null} 
    </Fragment>

	)
}


export default QrCodePage