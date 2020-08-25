import React, { Component } from 'react';
import firebase from './fireConnection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            senha: ''
        };
        this.cadastrar = this.cadastrar.bind(this);
    }  

    cadastrar(e){
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
        .catch((error) => {
            if (error.code === "auth/invalid-email")
            {
                alert('Error code: ' + error.code + '\nEmail digitado invalido!!!');
            }
            if (error.code === "auth/weak-password") 
            {
                alert('Error code: ' + error.code + '\nSenha Fraca!!!');
            }
            else
            {
                alert('Error code: ' + error.code);
            }
        })
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.cadastrar}>
                    <label>E-mail: </label><br/>
                    <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/>
                    <label>Senha: </label><br/>
                    <input type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/><br/>
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </div>
        );
    }
}

export default App;