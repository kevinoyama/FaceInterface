import React, { Component } from 'react';

class Header extends Component{

    render(){
        return (
            <header>
                <nav>
                <img src="https://i.imgur.com/KDIDiSE.png"/>
                <div>
                    <span>Meu Perfil</span>
                    <i className="material-icos">account circle</i>
                </div>
                </nav>
            </header>
        )
    }
}

export default Header;