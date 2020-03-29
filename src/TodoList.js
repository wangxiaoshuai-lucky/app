import React, { Component, Fragment } from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends Component {

    constructor(props) {
        super(props);
        this.change = this.change.bind(this);
        this.add = this.add.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);


        this.state = {
            inputValue: '',
            list: [
            ]
        }
    }


    add() {
        this.setState((preState) => ({
            inputValue: '',
            list: [...preState.list, preState.inputValue],
        }), () => { })
    }

    change() {
        const value = this.input.value;
        this.setState(() => ({
            inputValue: value
        }))
    }
    handleDeleteItem(index) {
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index, 1)
            return { list }
        })
    }

    getItems() {
        return this.state.list.map((item, index) => {
            if (item === '') {
                return (
                    <TodoItem
                        key={index}
                        index={index}
                        deleteItem={this.handleDeleteItem}
                    />
                )
            }
            return (
                <TodoItem
                    key={index}
                    content={item}
                    index={index}
                    deleteItem={this.handleDeleteItem}
                />
            )
        })
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor='inputArea'>输入内容</label>
                    <input
                        className='input'
                        id='inputArea'
                        value={this.state.inputValue}
                        onChange={this.change}
                        ref={(input) => { this.input = input }}
                    />
                    <button onClick={this.add}>添加</button>
                </div>
                <ul>
                    {this.getItems()}
                </ul>
            </Fragment>
        )
    }

}

export default TodoList;