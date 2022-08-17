import React from "react";
import { Fragment } from 'react'
class Demo extends React.Component {
    render() {
        return ( //第一种写法
            <Fragment>
                <ChildA />
                <ChildB />
                <ChildC />
            </Fragment>
        )
    }
}

class Columns extends React.Component {
    render() {
        return ( //第二种写法
            <React.Fragment>
                <ChildA />
                <ChildB />
                <ChildC />
            </React.Fragment>
        )
    }
}




class ChildA extends React.Component {
    render() {
        return (
            <div>1</div>
        )
    }
}
class ChildB extends React.Component {
    render() {
        return (
            <div>2</div>
        )
    }
}
class ChildC extends React.Component {
    render() {
        return (
            <div>3</div>
        )
    }
}
export default Demo
