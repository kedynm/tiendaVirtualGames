import React ,{Component} from 'react';
import ProductList from '../Components/ProductListComponents';
import axios from 'axios'
import {Link} from 'react-router-dom'
import '../Styles/registro.css';

class Products extends Component
{
    constructor(props){
      super(props);

      this.state = {
          listProducts: []
      };

    }

  componentDidMount(){ 
    //https://rickandmortyapi.com/api/character/
    axios.get('http://localhost:5700/api/products')
    .then(res =>{
        this.setState({
            listProducts: res.data
        })
    }).catch(err => console.log(err))
}
      render() {
        return (
          <div className="container ">
              <div class="row">
                    <div class="col-2"></div>
                    <div class="col-8 caja">
                    <h4>Listado de productos</h4>
                        <div className="Profiles__list">
                            <div className="Profiles_container small"> 
                                <ProductList products = {this.state.listProducts} /> 
                            </div>

                        </div> 
                        <Link class="btn btn-primary" to="/AgregarProductos">Agregar productos</Link>
                    </div>
                    <div class="col-2"></div>
                   
            </div>
             
               
                 
        </div>

      
        );
      }   

}

export default Products;