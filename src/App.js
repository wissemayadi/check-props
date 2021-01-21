import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Footer from './Footer/Footer'
import Getdata from './profile/Profile';
import Picture from './profile/Image';
import ActionComponent from './data';
import Navigation from './NavbarPro/NavNavigation';


function App() {
  const styleObject={color:"red",fontSize:"150%",size:"50px",fontFamily:'Times New Roman, Times, serif',textShadow:' 20px 20px blue'} 
  const ImageStyle={ padding:'10px'}
  return (
    <div className="App">
     <span><Navigation/></span>
      
      
      <div  style={styleObject}>
      <Getdata Firstname="Wissem" 
      Lastname=" Ayadi"
      Biblio=" Je suis ingenieur en informatique"
      />
      </div><br/>
     <div style={ImageStyle}> 
     <Picture  />
       
     </div>
    <ActionComponent Firstname="wissem"/>

   <Footer/>

  
    </div>
  );
}

export default App;
