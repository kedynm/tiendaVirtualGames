import React from "react";
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/registro.css';

import ProfileForm from '../Components/ProfileFormComponent'
import '../Styles/ProfileNew.css'
import axios from 'axios';


class Registro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                firstName:'',
                lastName:'',
                email:'',
                password:'',
                avatarUrl:'https://user-images.githubusercontent.com/5709133/50445980-88299a80-0912-11e9-962a-6fd92fd18027.png'
            }
        }
    }
    handleChange = e =>{
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            },
        })
    }

    render(){
        return(
            <div class="container small">
                <div className='title'>
                  <h1>Mi Cuenta</h1>
                </div>
                <div class="row">
                    <div class="col-5 caja">
                    <h4>Iniciar Sesión</h4>
                        <Form >
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
                            <br></br>
                            <br></br>
                            <Link class="nav" to='/Recuperar' >¿Olvidaste tu contraseña?</Link>
                        </Form>
                    </div>
                    <div class="col-2"> 

                    </div>


                    
                    <div class="col-5 caja ">
                    <ProfileForm 
                                onChange={this.handleChange}
                                formValues={this.state.form} 
                            />
                        

                    </div>
                </div>
            </div>
        )
    }
}
export default Registro