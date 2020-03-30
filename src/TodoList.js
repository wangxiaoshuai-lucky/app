import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { createChangeInputAction, createAddItemAction, createDeleteItemAction } from './store/actionCreator';

const TodoList = (props) => {
    const { inputValue, list, changeInputValue, deleteItem, addTodoItem } = props;
    return (
        <Fragment>
            <div>
                <input
                    value={inputValue}
                    onChange={changeInputValue}
                />
                <button
                    onClick={addTodoItem}
                >提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (
                            <li
                                key={index}
                                onClick={deleteItem(index)}
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </Fragment>
    )
}

const mapStatetoProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            dispatch(createChangeInputAction(e.target.value))
        },
        addTodoItem() {
            dispatch(createAddItemAction())
        },
        deleteItem(index) {
            return (e) => {
                dispatch(createDeleteItemAction(index))
            }
        }
    }
}

export default connect(mapStatetoProps, mapDispathToProps)(TodoList);