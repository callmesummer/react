# react

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
