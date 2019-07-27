import React ,{Component} from 'react';
import ProfileList from '../Components/ProfileListComponents';
import axios from 'axios'

class Profiles extends Component
{
    constructor(props){
      super(props);

      this.state = {
          listProfiles: [],
      };

    }

  componentDidMount(){ 
      //https://rickandmortyapi.com/api/character/
      axios.get('http://localhost:5700/api/profiles')
      .then(res =>{
          this.setState({
              listProfiles: res.data
          })
      }).catch(err => console.log(err))
  }

      render() {
        return (
          <div className="container">
            
              <div className='title'>
              <h4>Listado de usuarios Registrados</h4>
                 
                </div>

                <div class="row">
                <div class="col-3"></div>
                    <div class="col-6 caja ">
                    
                    <div className="Profiles__list">
                      <div className="Profiles_container"> 
                          <ProfileList profiles = {this.state.listProfiles} /> 
                      </div>

                     </div>
              
                       
                    </div>
                    <div class="col-3"></div>

                </div>
        
          </div>
        );
      }   

}

export default Profiles;