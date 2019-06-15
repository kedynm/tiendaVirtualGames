import React from 'react';
import './App.css';
import Saludo from './Saludo'
import Footer from './Footer';
import Productos from './Productos'


function App() {
  return (
    <div className="App container-fluid">
       {/* <Saludo />*/}
        <Productos/>
       {/* <Footer/>*/}
    </div>
  );
}

export default App;
