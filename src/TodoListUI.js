import React,{Component} from 'react';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component{
    render () {
        return (
            <div style={{ marginTop: '10px' }}>
                <div >
                    <Input
                        value={this.props.inputValue}
                        placeholder='todo'
                        style={{ marginRight: '10px' }}
                        onChange={this.props.handleInputChange}
                    />
                    <Button onClick={this.props.handleBtnClick}
                        style={{ marginLeft: 10 }} type="primary">提交</Button>
                </div>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={this.props.list}
                    renderItem={(item,index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
                />
            </div>
        )
    }
}
export default TodoListUI;