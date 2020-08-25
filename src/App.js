import React, { Component } from 'react';
import firebase from './fireConnection';
import { TextField, Container, AppBar, Toolbar, Typography, Button } from '@material-ui/core';

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
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" className="menuTitle">
                        Tela de cadastro
                        </Typography>
                        <Button color="inherit"></Button>
                    </Toolbar>
                </AppBar>

                <Container maxWidth="sm">
                    {this.state.logar === 1 ? 
                    <div>
                        <form onSubmit={this.cadastrar}>
                        <h1>Entrar</h1>
                        <TextField id="outlined-basic" label="E-mail" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/>
                        <TextField id="outlined-basic" label="Senha" type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/><br/><br/>
                        <Button variant="contained" color="primary" disableElevation type="submit">
                            Entrar
                        </Button><br/><br/>
                        </form>
                        <Button variant="contained" color="grey" disableElevation onClick={(e) => { this.setState({ logar: 0 }); this.sair()}}>Não possui cadastro? Cadastre-se</Button>
                    </div>                
                    :
                    <div>
                        <form onSubmit={this.cadastrar}>
                            <h1>Cadastrar</h1>
                            <TextField id="outlined-basic" label="Nome" type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/><br/>
                            <TextField id="outlined-basic" label="E-mail" type="text" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/><br/>
                            <TextField id="outlined-basic" label="Senha" type="text" value={this.state.senha} onChange={(e) => this.setState({senha: e.target.value})}/><br/><br/>
                            <Button variant="contained" color="primary" disableElevation type="submit">
                                Cadastrar
                            </Button><br/><br/>
                        </form> 
                        <Button variant="contained" color="grey" disableElevation onClick={(e) => { this.setState({ logar: 1 })}}>Já tem conta? Fazer login</Button>
                    </div>
                    }
                {this.state.logado === 1 ? <Button variant="contained" color="primary" disableElevation onClick={this.sair}>Sair</Button>:null }
            </Container>
            </div>
        );
    }
}

export default App;