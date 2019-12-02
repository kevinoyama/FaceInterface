import React, { Component } from 'react';

import profile from '../assets/MySite_Skype_High-6169.jpg';

class TechList extends Component{

    state = {

      techs: ['Hello', 'Wilson', 'jose']
    };

    handleInputChange = e => {
      
    }

    render(){
        return (
          <>
            <p>Hello World</p>
            <img src={profile} width="200"/>
            {this.state.techs.map(word => <p key={word}>{word}</p>)}
          </>  
        )
    }
}

export default TechList;