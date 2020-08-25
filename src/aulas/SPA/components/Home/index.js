import React, { Component } from 'react';

import './styles.css';

import Inicio from '../Inicio';
import Sobre from '../Sobre';
import Contato from '../Contato';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <h1>Pagina Home</h1>
                <Inicio/>
                <Sobre/>
                <Contato/>
            </div>
        );
    }
}

export default Home;