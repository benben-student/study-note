// 1.  同步代码块一
// console.log("start")

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
// })

// console.log("end");  
//  执行顺序 start 1 end
//     (1)同步的代码块总是从上到下顺序执行
//         (2)调用 new Promise(callback)时，回调函数会立即执行


//2. 异步代码
// console.log("start");//同步代码

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
// })//同步代码

// promise1.then(res => {
//     console.log(res);//异步代码
// })

// console.log("end");//同步代码

// 执行顺序 start 1 end 2
// JS总是先执行 同步代码 再执行 异步代码


//3. 
// console.log("start");

// const promise1 = new Promise((resolve, jreject) => {
//     console.log(1);
//     resolve(2)
//     console.log(3);
// })

// promise1.then(res => {
//     console.log(res);
// })

// console.log("end");
//执行顺序 start 1 3 end 2


//4.resolve未被调用
// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
// })

// promise1.then(res => {
//     console.log(res);
// })

// console.log("end");
//promise1里resolve从未被调用，所以promise1.then(...)从未执行过，所有2不会打印


//5.

console.log('start')
 
const fn = () => (new Promise((resolve, reject) => {
  console.log(1);
  resolve('success')
}))
 
console.log('middle')
 
fn().then(res => {
  console.log(res)
})
 
console.log('end')

//执行顺序 start middle 1 end success
//无论有多少层函数调用都是先执行同步代码，再执行异步代码，顺序执行同步代码