import React, { Component } from 'react';
import TodoItems from '../TodoItems';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state={
            tarefa: '',
            items: []
        }
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount(){
        //this.setState({items: localStorage.getItem('items')})
    }

    addItem(e){
        let state = this.state;
        if(this._tarefaInput.value !== ''){
            let newItem = {
                text: this._tarefaInput.value,
                key: Date.now()
            };
            this.setState({ items: [...state.items, newItem]})
            //localStorage.setItem('items', this.state.items);
        }
        e.preventDefault();
        this.setState({ tarefa: ''});
    }

    deleteItem(key){
        let filtro = this.state.items.filter( (item) =>{
            return(item.key !== key)
        })

        this.setState({items:filtro});
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.addItem}>
                    <input type="text" placeholder="Nova Tarefa?" name="tarefa" 
                    value={this.state.tarefa} onChange={(ev) => this.setState({tarefa: ev.target.value})}
                    ref={(event) => this._tarefaInput = event}/>
                    <button type="submit">
                        Adicionar
                    </button>
                </form>
                <div>
                    <TodoItems items={this.state.items} delete={this.deleteItem}/>
                </div>
            </div>
        );
    }
}

export default TodoList;