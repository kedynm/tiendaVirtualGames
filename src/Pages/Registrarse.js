import React from "react";
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/registro.css';

class Registro extends React.Component{
    render(){
        return(
            <div class="container small">
                <div className='title'>
                  <h1>Mi Cuenta</h1>
                </div>
                <div class="row">
                    <div class="col-5 caja">
                    <h4>Iniciar Sesión</h4>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nombre de usuario o correo electronico *</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar e-mail" />
                            
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Contraseña *</Form.Label>
                                <Form.Control type="password" placeholder="Contraseña" />
                            </Form.Group>
                            <Form.Group controlId="formBasicChecbox">
                                <Form.Check type="checkbox" label="Recuerdame" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Acceder
                            </Button>
                            <Link class="nav" to='/Recuperar' >¿Olvidaste tu contraseña?</Link>
                        </Form>
                    </div>
                    <div class="col-2"> 

                    </div>


                    
                    <div class="col-5 caja ">
                        <h4>Registrarse</h4>  
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Correo electronico *</Form.Label>
                                <Form.Control type="email" placeholder="Ingresar e-mail" />
                            
                            </Form.Group>
                            <p>
                            Se enviará una contraseña a tu dirección de correo electrónico.
                            </p>
                          
                            <p> 
                            Tus datos personales se utilizarán para procesar tu pedido, mejorar tu experiencia en esta web, gestionar el acceso a tu cuenta y otros propósitos descritos en nuestra política de privacidad.
                            </p>


                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                            
                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}
export default Registro