import React from "react";
import { Button } from 'antd'
//context的作用
//Context 提供了一种在组件之间共享此类值的方式，而不必显式地通过组件树的逐层传递 props。


//普通写法 props


//1.复制到剪贴板废弃方法的替代写法 
navigator.clipboard.writeText(inputValues).then(function () {
    alert("成功了")
})


//2.Fragment
    //引入  import { Fragment } from 'react'
    //（1）第一种写法：
    < Fragment >
<ChildA />
<ChildB />
<ChildC />
</Fragment >
//（2）第二种写法
<React.Fragment>
<ChildA />
<ChildB />
<ChildC />
</React.Fragment>


//3.Prototype

   //可以指定props的默认值
Greeting.defaultProps={
    name:"Stringer"
}




class Greeting extends React.Component {
    render() {
        return (
            <h1>hello,{this.props.name}</h1>
        )
    }
}
//指定props的默认值
Greeting.defaultProps={
    name:"Stringer"
}



class Father extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "小梦",
            children: "1"
        }
    }
    render() {
        return (
            <div>
                <ChildA name={this.state.name} />
                <MyComponent children={this.state.children} />
                <Greeting name={this.state.name} />
            </div>
        )
    }
}
//渲染出“hello， stringer
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);