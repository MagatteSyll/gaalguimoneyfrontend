import React,{useState,useEffect,Fragment} from 'react'
import { Document, Page,Image,StyleSheet,PDFViewer,View }  from "@react-pdf/renderer";
import axiosInstance from '../axios'





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
	axiosInstance
	.get('pay/getrcode/')
	.then(res=>{
		setqrcode(res.data)
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
       src={`http://127.0.0.1:8000${qrcode.code}`} 
//src={`https://gaalguimoney.herokuapp.com${qrcode.code}`}
 alt='' />
         
        </Page>
      </Document>
    </PDFViewer>:null} 
    </Fragment>

	)
}


export default QrCodePage