import React from 'react';

import './App.css';
import { Navbar } from 'react-bootstrap';
import NavbarComponent from './NavbarComponent';
import Carrusel from './Carrusel'
import FooterComponent from './FooterComponent'

function App() {
  return (
    <div className="App">
      
      <NavbarComponent/>
      <Carrusel/>
      <FooterComponent/>
    </div>
  );
}

export default App;
