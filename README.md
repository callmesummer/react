# react
react学习

# UI组件和容器组件
### TodoListUI.js为UI组件，在todolist.js中，直接引用该组件即可完成，同时用props与state的关系来传递数据与方法，onClick={this.props.handleBtnClick}即可简单的从该组件调用父类方法。
+  renderItem={(item,index) => <List.Item onClick={(index) => {this.props.handleItemDelete(index)}}>{item}</List.Item>}
  
  可给父类传递方法对应的参数
