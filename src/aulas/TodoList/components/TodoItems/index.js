import React, { Component } from 'react';

class TodoItems extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.delete = this.delete.bind(this);
    }    

    delete(key){
        this.props.delete(key);
    }

        render() {
            return (
                <div>
                    <ul>
                    {this.props.items !== null &&
                        this.props.items.map((item)=>{
                            return(
                            <li onDoubleClick={ () => this.delete(item.key)} key={item.key}>
                                {item.text}
                            </li>
                            );
                        })}
                    </ul>
                </div>
            );
    }
}

export default TodoItems;