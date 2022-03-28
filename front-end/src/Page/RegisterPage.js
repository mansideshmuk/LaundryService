


import React from 'react';
import AboutUs from '../components/AboutUs';
import Register from '../components/Register';
import Footer from '../components/Footer';
export default function RegisterPage() {
  return <div>
      <Register/>
      <AboutUs/>
      <div style={{position:'absolute',bottom:'-60%',width:'99vw'}}>
      <Footer/>
      </div>
  </div>;
}
