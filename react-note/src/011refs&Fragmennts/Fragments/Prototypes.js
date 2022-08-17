//引入prop-types 库
import PropTypes from "prop-types";
import React from "react";
import  ReactDOM  from "react-dom";

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
class ChildA extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <h1>hello,{this.props.name}</h1>
            </div>
        )
    }
}
//验证
Father.propTypes = {
    name: PropTypes.string
};

class MyComponent extends React.Component {
    render() {
        // 这必须只有一个元素，否则控制台会打印警告。
        const children = this.props.children;
        return (
            <div>
                {children}
            </div>
        );
    }
}

MyComponent.propTypes = {
    children: PropTypes.element.isRequired
};




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
//渲染出“hello， stringer
const root = ReactDOM.createRoot(document.getElementById('example')); 
root.render(<Greeting />);
export default Greeting