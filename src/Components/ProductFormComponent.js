import React from 'react';
import axios from 'axios';

class ProductFormComponent extends React.Component{
    state = {};

    handleClick = e => {
        console.log("Han presionado el boton")
    };

    handleSubmit = e => {
        e.preventDefault();
        console.log("Form submit")
        console.log(this.props.formValues)
        axios.post('http://localhost:5700/api/products', this.props.formValues)
        .then(product => alert('Producto agregado correctamente'))
        .catch(err => alert(err))
    };

    render(){
        return(
            <React.Fragment>
                <h4>Agregar producto</h4>

                <form onSubmit={this.handleSubmit} >
                    <div className="form-group">
                        <label>Url de la imagen</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="imgUrl"
                            value={this.props.formValues.imgUrl}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nombre del producto</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="name"
                            value={this.props.formValues.name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Precio del producto</label>
                        <input 
                            onChange={this.props.onChange} 
                            className="form-control" 
                            type="text" 
                            name="price"
                            value={this.props.formValues.price}

                        />
                    </div>
                
                
                    <button onClick={this.handleClick} className="btn btn-primary">Agregar</button>
                </form>
            </React.Fragment>
        )
    }
}

export default ProductFormComponent;