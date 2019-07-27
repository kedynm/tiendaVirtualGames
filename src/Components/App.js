import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Layout from './Layout'
import NotFound from '../Pages/NotFound'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles/App.css';
import Home from '../Pages/Home'
import Contacto from '../Pages/Contacto'
import Registrarse from '../Pages/Registrarse'
import Producto from '../Pages/Productos1'
import Detalles from '../Pages/DetalleProducto'
import Carrito from '../Pages/Carrito'
import Administrador from '../Pages/Profiles'
import AgregarProducto from '../Pages/AddProduct'
function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Switch>
              
              <Route exact path="/Home" component={Home} />
              <Route exact path="/Registrarse" component={Registrarse}/>
              <Route exact path="/Contactenos" component={Contacto} />
              <Route exact path="/Productos1" component={Producto} />
              <Route exact path="/Detalles" component={Detalles} />
              <Route exact path="/Carrito" component={Carrito} />
              <Route exact path="/Administrador" component={Administrador} />
              <Route exact path="/AgregarProductos" component={AgregarProducto} />
              <Redirect from="/" to="/Home" />
              <Route component={NotFound} />
          </Switch>
      </Layout>
    </BrowserRouter>
    
  );
}

export default App;
