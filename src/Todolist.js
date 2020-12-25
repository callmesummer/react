import React, { Component } from 'react';
import { Input, Button, List } from 'antd';
import store from './store';
import { getInputChangeAction,getAddTodoItemAction,getDeleteTodoItemAction } from './store/actionCreators';


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
        return (
            <div style={{ marginTop: '10px' }}>
                <div >
                    <Input
                        value={this.state.inputValue}
                        placeholder='todo'
                        style={{ marginRight: '10px' }}
                        onChange={this.handleInputChange}
                    />
                    <Button onClick={this.handleBtnClick}
                        style={{ marginLeft: 10 }} type="primary">提交</Button>
                </div>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.state.list}
                    renderItem={(item,index) => <List.Item onClick={this.handleItemDelete.bind(this,index)}>{item}</List.Item>}
                />
            </div>
        )
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