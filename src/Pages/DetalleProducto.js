import React from "react";
import fifa from '../Images/fifa19.jpg'
import '../Styles/detalle.css'
import tarjetas from '../Images/tarjetas.png'

class DetalleProducto extends React.Component{
    render(){
        return(
            <div className='container'>
                <div class="row">
                    <div class="col-md-4">
                        <img
                        className="d-flex w-100" 
                        src={fifa}
                    
                    />
                    </div>
                    <div class="col-md-4">
                        <h2 className="">
                            Fifa 19
                       </h2>
                        <br></br>
                       <h5 class="small text-justify"><strong>TU TEMPORADA EMPIEZA YA</strong></h5>
                       <br></br>
                        <p className='small text-justify'>
                        La <strong>UEFA</strong> Champions League es el lugar donde los sueños se hacen realidad y se 
                        forjan las leyendas. Sé uno de los primeros en jugar este prestigioso 
                        torneo con la demo de <strong>FIFA 19</strong>. 
                        </p>
                        <br></br>
                        
                        <h5 class="small text-justify"><strong>EXPERIENCIA DE JUEGO</strong></h5>
                        <br></br>
                        <p className='small text-justify'>
                        
                            Conoce a fondo las últimas novedades de <strong>FIFA 19</strong>, como las 
                            finalizaciones exactas, el sistema de toque activo, las tácticas dinámicas y 
                            los balones divididos.
                        </p>
                        <br></br>
                        <h5 class="small text-justify"><strong>UEFA CHAMPIONS LEAGUE</strong></h5>
                        <br></br>
                        <p className='small text-justify'>
                            Disputa la competición de clubes más prestigiosa del mundo en todos los 
                            modos de <strong>FIFA 19</strong>.
                        </p>
                            <br></br>

                            <p className='small text-justify'> 
                            • Incluye costo de envío.
                            </p>
                            <br></br>
                        <p className='small text-justify'> 
                            • Disponible para envío inmediato.
                        </p>

                    </div>
                    <div class="col-md-4">
                        <div className="pagar">
                            <h5>Precio</h5>
                            <h2>$109.000</h2>  
                            <p>De 2 A 3 dias hábiles para el envío</p>
                            <button type="button" class="btn btn-success btn-lg ">Añadir al carrito</button>  
                            <div className='tarjeta'>
                                <img className="d-flex w-100"   src={tarjetas} />     
                                </div>                     
                           
                        </div>
                    </div>
                </div>  
            </div>
            
        )
    }

}
export default DetalleProducto