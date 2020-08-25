import React, { Component } from 'react';
import firebase from './fireConnection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            idadeInput: '',
            nomeInput: '',
            lista: [],
        };

        this.cadastrar = this.cadastrar.bind(this);

        firebase.database().ref('usuarios').on('value', (snapshot) => {
            let state = this.state;
            state.lista = [];
            snapshot.forEach((childItem) => {
                state.lista.push({
                    key: childItem.key,
                    nome: childItem.val().nome,
                    idade: childItem.val().idade
                })
            })
        this.setState({state});
        });
            //insert and update data in firebase
            //firebase.database().ref('token').set(this.state.tokenInput);
            //update a chield
            //firebase.database().ref('usuarios').child(1).child('cargo').set(this.state.tokenInput);
            //remove 
            //firebase.database().ref('usuarios').child(1).child('cargo').remove();
    }  
    
    cadastrar(e){
        let usuarios = firebase.database().ref('usuarios');
        let chave = usuarios.push().key;
        usuarios.child(chave).set({
            nome: this.state.nomeInput,
            idade: this.state.idadeInput
        });


        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.cadastrar}>
                    <input type="text" value={this.state.nomeInput}
                    onChange={(e) => this.setState({nomeInput: e.target.value})}/>
                    <input type="text" value={this.state.idadeInput}
                    onChange={(e) => this.setState({idadeInput: e.target.value})}/>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
                <ul>
                {this.state.lista.map((item) => {
                    return(
                        <div>
                            <li key={item.key} onClick={() => firebase.database().ref('usuarios').child(item.key).remove()}>
                                Ola, {item.nome}, que tem {item.idade} anos
                            </li>
                            
                        </div>
                    );
                })}
                </ul>
            </div>
        );
    }
}

export default App;