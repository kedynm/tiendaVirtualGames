import React from 'react'
import '../Styles/ProductList.css'

import {Link} from 'react-router-dom'
class ProductList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {this.props.products.map(profile => {
                    return(
                        <div class="container">
                        <div class="row">
                        <li key={profile.id} className='Product__section-name-list'>
                            <div class="col">
                               <img alt="avatar" src={profile.imgUrl} className='Product__avatar-list'/>
                            </div>
                            
                            
                                
                                      
                                            <div class="col letra">
                                                {profile.name} 
                                            </div>
                                            <div class="col letra">
                                            {profile.price}
                                            </div>
                                            <div class="col letra">
                                                <Link class="btn btn-primary d-block mx-auto" to="/Detalles">Ver detalles</Link>
                                            </div>
                                    
                             
                                    
                                  
                                    
                                
                           
                        </li>
                        </div>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default ProductList;