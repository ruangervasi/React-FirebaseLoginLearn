import React, { Component } from 'react';
import Feed from './components/Feed';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            feed:[
                {id: 1, username: "Ruan", curtidas: 1, comentarios:2},
                {id: 2, username: "Priscila", curtidas: 100, comentarios:2},
                {id: 3, username: "Livia", curtidas: 1000, comentarios:42},
                {id: 4, username: "Jucelia", curtidas: 10, comentarios:2},
            ]
        }
    }
    
    render() {
        return (
            <div>
                {this.state.feed.map((item)=>{
                    return(
                    <Feed id={item.id} username={item.username} curtidas={item.curtidas} comentarios={item.comentarios}/>
                    );
                })
            }
            </div>
        );
    }
}

export default App;