import React from 'react'
import '../Styles/card.css'
import {Link} from 'react-router-dom'

class CardList extends React.Component{
    render(){
        return (
          <div className="card-group">
                {this.props.cards.map((card)=>{
                    return(
                      
                            <div id="card" className="card" key={card.id}>
                            
                                <img id="imagenes" className="card-img-top" src={card.imagen_url} className=''/>
                                <div className="card-body">
                                    <h5 className="card-title small text-center"><strong>{card.name}</strong> </h5>
                                    <p id='precio' className="card-text"><strong>{card.precio}</strong></p>
                                    <Link class="btn btn-primary d-block mx-auto" to="/Detalles">Ver detalles</Link>
                                   
                 
                                </div>
                    
                            </div>
                        
                    )
                })}
            </div>
        )
    }
}

export default CardList;
