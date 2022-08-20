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
// console.log('start')

// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))

// console.log('middle')

// fn().then(res => {
//   console.log(res)
// })

// console.log('end')

//执行顺序 start middle 1 end success
//无论有多少层函数调用都是先执行同步代码，再执行异步代码，顺序执行同步代码

//6.
// console.log("start");

// Promise.resolve(1).then((res) => {
//   console.log(res);
// })

// Promise.resolve(2).then((res) => {
//   console.log(res);
// })
// //Promise.resolve()返回一个Promise对象，是同步代码

// console.log("end");
//执行顺序 start end 1 2

//7.
// console.log("start");

// setTimeout(() => {
//   console.log("setTimeout");
// });

// Promise.resolve().then((res) => {
//   console.log("resolve");
// })

// console.log("end");
// JS中有优先级的概念

//优先级较高的任务(称为微任务):
//Promise、ObjectObserver、MutationObserver、process.nextTick、async/await

//优先级较低的任务(宏任务)：
//setTimeout，setInterval 和 XHR
//所以执行顺序为： start end resolve setTimout


//8.
// const promise = new Promise((resolve, reject) => {
//   console.log(1);//同步代码
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);//同步代码
// });

// promise.then((res) => {
//   console.log(res);
// });

// console.log(4)//同步代码
//执行顺序 1 2 4 timerStart timeEnd success


//9.
// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })

// }, 0)


// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)
//执行顺序 timer1 promise1 timer2


//10.
console.log('start');
 
 
const promise1 = Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
});
 
 
const timer1 = setTimeout(() => {
  console.log('timer1')
  const promise2 = Promise.resolve().then(() => {
    console.log('promise2')
  })
}, 0)
 
 
console.log('end');
//执行顺序 start end promise1 timer1 promise2 timer2