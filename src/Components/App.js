import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Layout from './Layout'
import NotFound from '../Pages/NotFound'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/App.css';
import Home from '../Pages/Home'
import Contacto from '../Pages/Contacto'
import Registrarse from '../Pages/Registrarse'
import Producto from '../Pages/Productos'
import Detalles from '../Pages/DetalleProducto'
import Carrito from '../Pages/Carrito'
function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
              
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Registrarse" component={Registrarse}/>
              <Route exact path="/Contactenos" component={Contacto} />
              <Route exact path="/Productos" component={Producto} />
              <Route exact path="/Detalles" component={Detalles} />
              <Route exact path="/Carrito" component={Carrito} />
              <Redirect from="/" to="/Home" />
              <Route component={NotFound} />
          </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
