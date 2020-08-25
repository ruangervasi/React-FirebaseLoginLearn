import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state={
            filmes: [],
        }
        this.loadFilms = this.loadFilms.bind(this);
    }
      

    componentDidMount(){
        this.loadFilms();
    };

    loadFilms(){
        let url= 'https://sujeitoprogramador.com/r-api/?api=filmes'; 
        fetch(url)
        .then((response) => response.json())
        .then((json)=>{
            this.setState({filmes: json});
        });
        
    };

    render() {
        return (
            <div className="container">
                <div className="listaFilmes">
                {this.state.filmes.map((filme) =>{
                    return(
                        <article className="filme" key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <img src={filme.foto} alt="capa"/>
                            <Link to={`/filme/${filme.id}`}>
                                Acessar
                            </Link>

                        </article>
                    )
                })
                
                }
                </div>
            </div>
        );
    }
}

export default Home;