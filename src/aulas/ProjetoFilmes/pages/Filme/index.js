import React, { Component } from 'react';
import './style.css';

class Filme extends Component {
    constructor(props) {
        super(props);
        this.state={
            filme:[],
        }
    }

    componentDidMount(){
        const { id } = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((response) => response.json())
        .then((json) => {
            this.setState({ filme: json});
            console.log(json);
        })
    }
    
    render() {
        return (
            <div className="filmeInfo">
                <h1>{this.state.filme.nome}</h1>
                <img src={this.state.filme.foto} alt="capa"/>
                <h3>Sinopse</h3>
                {this.state.filme.sinopse}
            </div>
        );
    }
}

export default Filme;