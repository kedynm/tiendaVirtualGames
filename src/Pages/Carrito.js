import React from "react";
import fifa from '../Images/fifa19.jpg'
import battlefield from '../Images/bv.jpg'
import cod4 from '../Images/cod4.jpg'
import '../Styles/card.css'

class Carrito extends React.Component{
    render(){
        return(
            <div className="container">
                <h1 className='title'>Carrito</h1>
                <table class="table table-bordered text-center">
    <thead>
        <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><img id="imagenes" src="https://dprimero.com/wp-content/uploads/2019/03/SKU-000252.jpg"></img></td>
            <td>$109.000</td>
            <td> 1 </td>
            <td>$109.000</td>
        </tr>
        <tr>
        <td><img id="imagenes" src="https://dprimero.com/wp-content/uploads/2019/03/SKU-000225.jpg"></img></td>
            <td>$219.000</td>
            <td> 1 </td>
            <td>$219.000</td>
        </tr>
     
        <tr>
            <td>-</td>
            <td>-</td>
            <td><strong>Total</strong></td>
            <td>$328.000</td>
        </tr>
       
    </tbody>
</table>
<button type="button" class="btn btn-success btn-lg btn-block">Finalizar Compra</button>        
            </div>
            
        )
    }

}
export default Carrito