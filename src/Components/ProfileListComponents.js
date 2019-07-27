import React from 'react'
import '../Styles/ProfileList.css'
//import tw_logo from '../images/twitter.png'

class ProfileList extends React.Component{

    render(){
        return (
            <ul className="list-unstyled">
                {this.props.profiles.map(profile => {
                    return(
                        <li key={profile.id} className='Profile__section-name-list'>
                            <img alt="avatar" src={profile.avatarUrl} className='Profile__avatar-list'/>
                            <div>
                                {profile.firstName} {profile.lastName}
                                <br/>
                                {profile.email}
                                <br/>
                                {profile.password}
                                
                              
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default ProfileList;