// /*1.函数对象与实例对象
// 函数对象：将函数作为对象使用时，简称为函数对象
// 实例对象：new函数产生的对象，简称为对象 
// */
// function Fn(){  //Fn函数
// }
// const fn=new Fn() //Fn是构造函数  fn是实例对象（简称为对象）
// console.log(Fn.prototype) //Fn是函数对象
// Fn.call({})  //Fn是函数对象

/*2.
(1)同步回调：立即执行，完全执行完了才结束不会放入回调队列中
(2)异步回调：不会立即执行，会放入回调队列中将来执行
*/
//同步回调函数
// const arr=[1,2,3]
// arr.forEach(item=>{//遍历回调，同步回调函数，不会放入队列，一上来就要执行完
//     console.log(item)
// })
// console.log('forEach()之后')

//异步回调函数
setTimeout(() => {//异步回调函数，会放入队列中将来执行
    console.log('timeout callback')
}, 0)
console.log('setTimeout()之后')

/*
3.js中的错误(error)和错误处理
（1）错误的类型
        Error：所有错误的父类型
        ReferenceError：引用的变量不存在
        TypeError：数据类型不正确的错误
        RangeError：数据值不在其所允许的范围内
        SyntaxError：语法错误
  （2）错误处理
        捕获错误：try ... catch
        抛出错误：throw error
   （3）错误对象
        message属性：错误相关信息
        stack属性：函数调用栈记录信息
*/
//1。常见的内置错误
//（1）ReferenceError：引用的变量不存在
console.log(a) //ReferenceError:a is not defined
//（2）TypeError：数据类型不正确的错误
let b
console.log(b.xxx)//TypeError:cannot read property 'xxx' of undefined
b = {}
b.xxx()//TypeError:cannot read property 'xxx' of undefined
//(3)RangeError：数据值不在其所允许的范围内
function fn(){
    fn()
}
fn()//RangeError:Maixmum call stack size exceeded
//(4)SyntaxError：语法错误
const c='''' //SyntaxError:Unexpected string