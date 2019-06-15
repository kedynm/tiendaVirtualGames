import React from 'react';
//import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css'
export default class Productos extends React.Component
{
    productos = [{'nombre_producto':'AGENTS MAYHEM','precio':'$89.900','imagen_url':'https://i11d.3djuegos.com/juegos/13362/agents_of_mayhem/fotos/ficha/agents_of_mayhem-3685651.jpg'},
    {'nombre_producto':'ACE COMBAT 7 SKIES UNKNOWN','precio':'$199.900','imagen_url':'https://images-na.ssl-images-amazon.com/images/I/61pEQCBb%2BKL._SX342_.jpg'},
    {'nombre_producto':'ACE COMBAT 7 SKIES UNKNOWN','precio':'$199.900','imagen_url':'https://images-na.ssl-images-amazon.com/images/I/61pEQCBb%2BKL._SX342_.jpg'},
    {'nombre_producto':'ACE COMBAT 7 SKIES UNKNOWN','precio':'$199.900','imagen_url':'https://images-na.ssl-images-amazon.com/images/I/61pEQCBb%2BKL._SX342_.jpg'},
    {'nombre_producto':'ACE COMBAT 7 SKIES UNKNOWN','precio':'$199.900','imagen_url':'https://images-na.ssl-images-amazon.com/images/I/61pEQCBb%2BKL._SX342_.jpg'}]
    render() {
        return (
            <div className="container">
                <h2>VIDEOJUEGOS</h2>
                 <div className="row table-responsive">
                     <div className="md-"></div>
                    <table className="table table-bordered table-striped mi_tabla_productos">
                        <thead>
                            <tr>
                                <th>NOMBRE PRODUCTO</th>
                                <th>PRECIO</th>
                                <th>IMAGEN</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                        {this.productos.map((producto, i) => (
                                                <ProdcutoRow key={i} i={i} producto={producto} object={this} />
                                                    )
                                        )}
                        </tbody>
                    </table>
                </div>
                <button className="btn btn-default">Cargar mas resultados</button>
                <button className="btn btn-default btn_comprar">Agregar al Carrito</button>
            </div>
            );
    }
}


class ProdcutoRow extends React.Component {
    render() {
        return (<tr key={this.props.i}>
                <td>{this.props.producto.nombre_producto}</td>
                <td>{this.props.producto.precio}</td>
                <td><img src={this.props.producto.imagen_url} /></td>
                          </tr>)
        }
}
        
    









