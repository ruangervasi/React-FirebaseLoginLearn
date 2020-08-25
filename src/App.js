import React, { Component } from 'react';
import firebase from './fireConnection';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            email: '',
            senha: '',
            logado: 0,
            nome:'',
            logar: 0
        };
        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.sair = this.sair.bind(this);

        firebase.auth().onAuthStateChanged((user) => {
            if (user){
                alert('Usuario Logado com sucesso!')
                this.setState({logado: 1});
            }
        })

        this.sair();
        
    }  

    cadastrar(e){
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.senha)
        .then((user) => {
            firebase.auth().onAuthStateChanged((userLogado) => {
                firebase.database().ref('usuarios').child(userLogado.uid).set({
                    nome:this.state.nome
                })
            }
        )})
        .catch((error) => {
                alert('Error code: ' + error.code);
        })

        e.preventDefault();
    }

    sair() {
        firebase.auth().signOut();
        this.setState({logado: 0});
    }

    logar(e){
        firebase.auth().signInWithEmailAndPassword(this.state.email,this.state.senha)
        .catch((error) => {
            if (error.code === "auth/wrong-password")
            {
                alert('Error code: ' + error.code + '\nSenha invalida!!!');
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
                {this.state.logar === 1 ? 
                <div>
                    <form onSubmit={this.cadastrar}>
                    <h1>Entrar</h1>
                    <label>E-mail: </label><br/>
                    <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/>
                    <label>Senha: </label><br/>
                    <input type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/><br/>
                    <button type="submit">
                        Entrar
                    </button>
                    </form>
                    <button onClick={(e) => { this.setState({ logar: 0 }); this.sair()}}>Cadastrar</button>
                </div>                
                :
                <div>
                    <form onSubmit={this.cadastrar}>
                        <h1>Cadastrar</h1>
                        <label>Nome: </label><br/>
                        <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/><br/>
                        <label>E-mail: </label><br/>
                        <input type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/>
                        <label>Senha: </label><br/>
                        <input type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/><br/>
                        <button type="submit">
                            Cadastrar
                        </button>
                    </form> 
                    <button onClick={(e) => { this.setState({ logar: 1 })}}>Logar</button>
                </div>
                }
            {this.state.logado === 1 ? <button onClick={this.sair}>Sair</button>:null }
            </div>
        );
    }
}

export default App;