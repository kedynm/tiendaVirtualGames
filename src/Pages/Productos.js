import React from 'react';
import { Link } from 'react-router-dom'

import CardList from '../Components/CardListComponent';



class Cards extends React.Component{
    // Debemos tener en cuenta que el constructor es especifico para recibir nuestros props
    //estos mismos props debemos utilizarlos para inicializar la super!! clase
    //SUGERENCIA: Al ser el constructor el primero a ejecutar es recomendable acá inicializar
    //NUESTROS ESTADOS
    constructor(props){
        super(props)
        // No podemos decir state solo, usamos la palabra reservada this
        this.state = {
            //INICIALIZAMOS NUESTRA DATA VACIO
            producto: []
        };
        console.log('1. AJA! Primero el constructor!!');
    }
    //Componente did mount se convierte en un excelente lugar para recibir nuestra DATA
    //quiere decir que es ideal inicializar nuestro estado vacío y vamos a SIMULAR con
    //una función asincrona que recibimos la información (acá obtendríamos información de
    //nuestra api) USAMOS SETTIMEOUT
    componentDidMount(){
        console.log('3. Oh mi gudneeeesss =x el tercero es el DidMount')
        this.timeoutId = setTimeout(() => {
            //Esta funcion lo que realiza es una actualización de nuestro estado
            this.setState({
                producto : [
                {'id':'001','name':' FIFA 19  ','precio':'$109.000','imagen_url':'https://dprimero.com/wp-content/uploads/2019/03/SKU-000252.jpg'},
                {'id':'002','name':'CALL OF DUTY BLACK','precio':'$105.000','imagen_url':'https://dprimero.com/wp-content/uploads/2019/03/SKU-000267.jpg'},
                {'id':'003','name':'CRASH TEAM RACING','precio':'$149.000','imagen_url':'https://dprimero.com/wp-content/uploads/2019/03/SKU-000377.jpg'},
                {'id':'004','name':'POKEMON PIKACHU','precio':'$219.000','imagen_url':'https://dprimero.com/wp-content/uploads/2019/03/SKU-000225.jpg'},
                {'id':'005','name':'ACE COMBAT 7 ','precio':'$199.900','imagen_url':'https://images-na.ssl-images-amazon.com/images/I/61pEQCBb%2BKL._SX342_.jpg'}  ]
            })
        }, 0);

    }

    // Junto a actualizar nuestros Datos llamamos a componentDidUpdate, el cual recibe
    // dos argumentos el primero seria nuestros props previos y el segundo el state que
    // teniamos antes
    componentDidUpdate(prevProps, prevState){
        console.log('5. si señor ahora estamos en DidUpdate ea ea ea ea ea')
        //imprimimos los valores que tenia antes 
        console.log({
            prevProps: prevProps, prevState: prevState
        })
        //Y LOS VAMOS A COMPARAR CON LOS VALORES QUE TENEMOS AHORA!!!
        console.log({
            props: this.props, state: this.state
        })
    }

    // Por ultimos tenemos nuestro component willunmount, este es el momento ideal para realizar
    // algun proceso necesario antes de que se vaya el componente del DOM, que salga de escena
    componentWillUnmount(){
        console.log('6. Ups!! ya me vooooyyy chaaaaiii!')
        //Para causar este efecto simplemente es pulsar en algun boton que me redireccione
        //a otra página
        clearTimeout(this.timeoutId)
    }

    render(){
        console.log('2/4. :O!!! El segundo es el render y tambien cuatro???')
        return (
            <React.Fragment>
              
                <div className="Profiles__list">
                    <div className="Profiles_container">   
                        <CardList cards={this.state.producto} />
                    </div>

                </div>
            </React.Fragment>
            
        )
    }
}

export default Cards