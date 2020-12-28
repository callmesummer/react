import React,{} from 'react';
import { Input, Button, List } from 'antd';

const TodoListUI = (props) => {
    return (
        <div style={{ marginTop: '10px' }}>
                <div >
                    <Input
                        value={props.inputValue}
                        placeholder='todo'
                        style={{ marginRight: '10px' }}
                        onChange={props.handleInputChange}
                    />
                    <Button onClick={props.handleBtnClick}
                        style={{ marginLeft: 10 }} type="primary">提交</Button>
                </div>
                <List
                    size="small"
                    header={<div>Header</div>}
                    footer={<div>Footer</div>}
                    bordered
                    dataSource={props.list}
                    renderItem={(item,index) => <List.Item onClick={(index) => {props.handleItemDelete(index)}}>{item}</List.Item>}//onclick是一个剪头函数，并不会接收传递过来的index这些参数，可以去掉，后面handleItemDelete方法会自己拿到index的
                />
            </div>
    )
}
export default TodoListUI;