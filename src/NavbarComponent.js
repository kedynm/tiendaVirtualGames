import React, {Component} from 'react'
import './Styles/barra.css'
import logo from './Images/logo.PNG'
import carrito from './Images/carrito.png'
import 'bootstrap/dist/css/bootstrap.css';

class NavbarComponent extends Component{
    render(){
        return(
   
            <div className='barra'>
            
                <nav class="navbar transparent fixed-top navbar-expand-lg navbar-dark bg-dark ">
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <a class="navbar-brand" href="#">
                    <img src={logo} width="100" height="50" alt=""/>
                </a>

                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Contáctenos</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Search"/>
                    <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Registrarse</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Iniciar Sesión</a>
                    </li>

                    </ul>
                </div>
                <div class="pos-f-t">
                    
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                    <h4 class="text-white">Collapsed content</h4>
                    <span class="text-muted">Toggleable via the navbar brand.</span>
                    </div>
                </div>
            
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
               
                <a class=""  href="#">
                    <img src={carrito} width="40" height="40"  alt=""/>
                </a>
                </div>

                </nav> 
                 
          
            </div>


        )
    }
}

export default NavbarComponent;