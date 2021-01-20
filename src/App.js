import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React from 'react';
import Footer from './Footer/Footer'
import Getdata from './profile/Profile';
import Picture from './profile/Image';
import ActionComponent from './data';
import Navigation from './NavbarPro/NavNavigation';
function App() {
  return (
    <div className="App">
     <span><Navigation/></span>

      <Getdata Firstname="wissem" Lastname="ayadi"/>
      <div>
        <Getdata Biblio="je suis ingenieur en informatique"/>
      </div>
     <div>
     <Picture />
       
     </div>
    <ActionComponent />

   <Footer/>

    </div>
  );
}

export default App;
