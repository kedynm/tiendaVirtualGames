import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import '../Styles/footer.css'
import facebook from '../Images/face.png'
import twitter from '../Images/twitter.png'
import instagram from '../Images/instagram.png'
import youtube from '../Images/youtube.png'
import pago from '../Images/pago.png'
import whatsapp from '../Images/what.png'


class FooterComponent extends Component{
    render(){
        return(
            <div className="footer" >


            <div class="container ">
                    <div class="row">
                        <div class="col-md-4">
                            <Link  class="nav-link small" to="/" >Nosotros</Link >
                            <Link class="nav-link small" to="/Contactenos">Contactenos</Link>
                        </div>
                    <div class="col-md-4">
                         <Link  class="nav-link small" to="/" >Preguntas frecuentes</Link >
                        <Link class="nav-link small" to="/">Terminos y condiciones</Link>
                    </div>
                        <div class="col-md-4" >
                            <Link class="nav-link small" to="/" >Politicas de privacidad</Link>
                        </div>
                    </div>
             

                    <div class="row">
                        <div class="col-sm-8 d-block w-100" >
                        <img src={pago} />
                        </div>
                        <div class="col-sm-4 justify-inline">
                        
                           
                                    <a class="icono" href="http://www.facebook.com" target="_blank"> 
                                <img src={facebook} width="40px" height="40px" alt=""/>
                                    </a>
                               
                                    <a  class="icono" href="http://www.twitter.com" target="_blank"> 
                                        <img src={twitter} width="40px" height="40px" alt=""/>
                                    </a>
                             
                           
                        
                          
                           <a class="icono" href="http://www.instagram.com" target="_blank"> 
                               <img src={instagram} width="40px" height="40px" alt=""/>
                           </a>
                           <a class="icono" href="http://www.youtube.com" target="_blank"> 
                               <img class="margen-10" src={youtube} width="40px" height="40px" alt=""/>
                           </a>
                           <a class="icono" href="https://www.whatsapp.com/" target="_blank"> 
                               <img class="margen-10" src={whatsapp} width="40px" height="40px" alt=""/>
                           </a>
                           
                        </div>

                </div> 
            </div>
            </div>

        )

    }
}

export default FooterComponent;