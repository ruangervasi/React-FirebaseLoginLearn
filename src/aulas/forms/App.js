import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state ={
            form: {
                nome: '',
                email: '',
                senha: '',
            }            
        }
        this.alteraDados = this.alteraDados.bind(this);
    }

    alteraDados(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form});
    }

    cadastrar(e){
        alert('Cadastrado!')
        
        
        //e.preventDefault() faz com que não se atualize a pagina depois do submit
        e.preventDefault();
    }
    
    render() {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={ this.cadastrar}>
                    Nome: <input type="text" name="nome" value={this.state.form.nome} onChange={this.alteraDados} /><br/>
                    Email: <input type="email" name="email" value={this.state.form.email} onChange={this.alteraDados} /><br/>
                    Senha: <input type="password" name="senha" value={this.state.form.senha} onChange={this.alteraDados} /><br/>
                    Sexo: 
                    <select name="sexo" value={this.state.form.sexo} onChange={ this.alteraDados }>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                    </select>
                    <div>
                        <h3>{this.state.form.nome}</h3>
                        <h3>{this.state.form.email}</h3>
                        <h3>{this.state.form.senha}</h3>
                        <h3>{this.state.form.sexo}</h3>
                    </div>
                    <button type="submit">Gravar</button>
                </form>
            </div>
            
        );
    }
}

export default App;
