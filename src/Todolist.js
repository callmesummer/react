import React, { Component } from 'react';
import store from './store';
import TodoListUI from './TodoListUI';
import { getInputChangeAction,getAddTodoItemAction,getDeleteTodoItemAction,getTodoList } from './store/actionCreators';

class Todolist extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        console.log(this.state);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return <TodoListUI 
        inputValue={this.state.inputValue}
        handleInputChange = {this.handleInputChange}
        handleBtnClick = {this.handleBtnClick}
        list = {this.state.list}
        handleItemDelete = {this.handleItemDelete}
        />
    }

    componentDidMount(){
        const action = getTodoList();
        store.dispatch(action)
    }

    handleInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange() {
        this.setState(store.getState());
    }
    handleBtnClick(e) {
        const action = getAddTodoItemAction(e.target.value);
        store.dispatch(action);
    }
    handleItemDelete(index){
        const action = getDeleteTodoItemAction(index);
        store.dispatch(action);
    }
}




export default Todolist;