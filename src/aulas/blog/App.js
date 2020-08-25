import React, { Component } from 'react';
import './style.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            nutri: []
        }
    }

    componentDidMount(){
        let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(url)
        .then((r)=> r.json())
        .then((json)=>{
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            //console.log(this.state);
        })
    }

    render() {
        return (
            <div>
                <header>
                    <strong>React Nutri Project</strong>
                </header>
                <div className="container">
                    {this.state.nutri.map((item)=> {
                        return(
                            <article key={item.id} className="post">
                                <strong className="titulo"> {item.titulo} </strong>
                                <img className="capa" src={item.capa}/>
                                <p className="subtitulo">{item.subtitulo}</p>
                                <button className="botao">Acessar</button>
                            </article>
                        );
                    })};
                </div>
  
            </div>
            
        );
    }
}

export default App;
