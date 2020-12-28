# React学习记录

# Redux进阶
## UI组件和容器组件
TodoListUI.js为UI组件，在todolist.js中，直接引用该组件即可完成，同时用props与state的关系来传递数据与方法，onClick={this.props.handleBtnClick}即可简单的从该组件调用父类方法。
```html
  renderItem={(item,index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
```
  
  可给父类传递方法对应的参数
## 无状态组件
    以如下形式直接包裹html返回标签的形式，直接返回的组件称为无状态组件
```html
const TodoListUI = (props) => {} 
```


+  无状态组件在性能上犹豫之前的组件，之前的class类生成的对象内，还有之前讲到过的对应的生命函数
+  当只进行渲染UI的组件，没有逻辑处理的时候，优先用无状态组件
##  Redux中发送异步请求
   + 引入中间件thunk以后，就可以在actionCreators中返回不再只是对象，而是可以返回函数了。
   这中间要通过配置index.js中的文件，既加载reducer的同时，又加载thunk
```javascript
export const getTodoList = () => {
    return (dispatch) => {//这里的dispatch是返回自动接受的，所以这里不需要在用store来调用dispatch
        axios.get('/data/todolist.json').then((res) => {
            const data = res.data;
            const action = initListAction(data);
            console.log(action);
            dispatch(action)
        })
    }
}
```
+ todolist下的componentDidMount通过thunk，讲非对象的函数返回给store如下
```javascript
 componentDidMount(){
        const action = getTodoList();
        store.dispatch(action)
    }
```

