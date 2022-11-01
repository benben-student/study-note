//1.
//(1)用setTimeout函数打印一个数值
// const tap = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 3000);
// }
// tap()
//(2)用户可以传进一个参数
// const tap=(value)=>{
//     setTimeout(() => {
//         console.log(value)
//     }, 3000);
// }
// tap(1)
//(3)传两个参数
// const tap=(value,time)=>{
//     setTimeout(() => {
//         console.log(value)
//     }, time);
// }
// tap(12,3000)
//(4)优化
// const tap=({value,time})=>{
//     setTimeout(() => {
//         console.log(value)
//     }, time);
// }
// tap({value:1,time:3000})
//(5)用户少传，不传，增加默认值
// const aa={value:1,time:3000}
// const tap=(p)=>{
//     const data=Object.assign(aa,p)
//     const {value,time}=data ||{}
//     setTimeout(() => {
//         console.log(value)
//     },time);
// }
// tap({value:2})
// tap({time:1000})
// tap({value:100,time:4000})

//try catch 方法
// //基本的语法:
//           try{ 
//              // 可能会导致错误的代码
//             } catch(error){ 
//              // 在错误发生时怎么处理
//             }finally{
//              //无论上面结果如何finally都会执行
//             } 
//正确的形式
// var array=[1,2]
// try {
//    console.log(array.length)   
// } catch (error) {
//    console.log('错误信息：'+error.message)
//    arr=[]
//  }
 //错误的形式
//  var array=null
// try {
//    console.log(array.length)   
// } catch (error) {
//    console.log('错误信息：'+error.message)
//    arr=[]
//  }
//加finall
var array=null
try {
   console.log(array.length)   
} catch (error) {
   console.log('错误信息：'+error.message)
   arr=[]
 }finally{
     console.log(1)
 }