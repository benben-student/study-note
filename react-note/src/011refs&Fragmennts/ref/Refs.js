import React, { createRef } from "react"; //需要引入{createRef}
import ReactDOM from "react-dom";
import { message } from "antd";

// //创建refs,引用refs

// class CustomTextInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.myRefs = React.createRef()
//     }
//     getInputValue = () => {
//         console.log(this.myRefs.current.value);
//         const a = document.getElementById("input")
//         console.log(a.value);
//     }

//     render() {
//         return (
//             <div>
//                 <input id="inputs" type="text" value="123" ref={this.myRefs} />
//                 <input type="button" value="button" onClick={this.getInputValue} />
//             </div>
//         )
//     }
// }



// class CopyInputVlaue extends React.Component {
//     constructor(props) {
//         super(props)
//         this.myInputValue = React.createRef()
//     }
//     CopyInputValue = (text) => {
//         // const Url=document.getElementById("input")
//         // Url.select()
//         // document.execCommand("Copy")
//         const inputValue = this.myInputValue.current.value
//         // const copyInput = document.getElementById("input")
//         // copyInput.setAttribute("value", inputValue)
//         // copyInput.select()
//         // document.execCommand('copy');

//         // navigator.clipboard.writeText(inputValue).then(() => {
//         //     this.$Message.success("复制成功")
//         // });
//     }
//     render() {
//         return (
//             <div>
//                 <input id="input" value="github//www.github.com" ref={this.myInputValue} />
//                 <button onClick={this.CopyInputValue}>点击复制链接</button>
//             </div>
//         )
//     }
// }


// //ref转发
// class CustomInput extends React.Component {
//     constructor(props) {
//         super(props)
//         this.textInput = null
//         this.setTextInputRef = element => {
//             this.textInput = element//将element赋值给 this.textInput
//         }
//     }
//     handleSubmit = e => {
//         e.preventDefault()
//         console.log(this.textInput.value);
//     }
//     render() {
//         return (
//             <div>
//                 <input type="text" ref={ele => this.textInput = ele} />
//                 <button onClick={e => this.handleSubmit(e)}>提交</button>
//             </div>
//         )
//     }
// }




// const TextInput = React.forwardRef((props, ref) => (
//     <input type="text" placeholder="请输入表名" ref={ref} />
// ));
// const inputRef = React.createRef();


// class CustomTextInputs extends React.Component {
//     handleSave = () => {
//         console.log(inputRef.current.value);
//     };

//     render() {
//         return (
//             <div>
//                 <TextInput ref={inputRef} />
//                 <button onClick={this.handleSave}>保存</button>
//             </div>
//         );
//     }
// }
// //1. 使用 React.createRef() 创建一个 ref 实例（inputRef）；
// //2. 将 ref 实例指定给组件（TextInput）的 ref 属性;
// //3. React.forwardRef()方法将 ref 实例作为其回调函数的第二个参数向下转发给底层DOM组件（）；
// //4. 在外层组件中能够通过 current对象访问DOM节点值




class Refs extends React.Component {
    constructor(props) {
        super(props)
        this.refsInput = React.createRef()
    }
    onClickCopy = () => {
        const inputValues = this.refsInput.current.value
        console.log(inputValues);
        navigator.clipboard.writeText(inputValues).then(function(){
            alert("成功了")
        })
    }
    render() {
        return (
            <div>
                <input value="github.com" ref={this.refsInput} />
                <button onClick={this.onClickCopy}>复制</button>
            </div>
        )
    }
}

export default Refs