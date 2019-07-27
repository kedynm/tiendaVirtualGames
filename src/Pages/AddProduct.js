import React from "react";
import Form from 'react-bootstrap/Form'
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/registro.css';

import ProductForm from '../Components/ProductFormComponent'
import '../Styles/ProfileNew.css'
import axios from 'axios';


class Registro extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                imgUrl:'',
                name:'',
                price:''
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
               
                <div class="row">

                    <div class="col-3"></div>
                   
                    <div class="col-6 caja"> 
                    <ProductForm 
                                onChange={this.handleChange}
                                formValues={this.state.form} 
                            />
                    
                    </div>

                    <div class="col-3 "></div>

                </div>
            </div>
        )
    }
}
export default Registro