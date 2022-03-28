
import React from 'react';
import AboutUs from '../components/AboutUs';
import Login from '../components/Login';
import Footer from '../components/Footer';
export default function LoginPage() {
  return <div>
      <Login/>
      <AboutUs/>
      <div style={{position:'absolute',bottom:'-60%',width:'99vw'}}>
      <Footer/>
      </div>
  </div>;
}