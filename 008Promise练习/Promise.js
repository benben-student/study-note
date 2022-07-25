/*

1.async函数
函数的返回值为promise对象
promise对象的结果由async函数执行的返回值决定

2.await表达式
await右侧的表达式一般为promise对象，但也可以是其他的值
如果表达式是promise对象，await返回的是promise成功的值
如果表达式是其他值，直接将此值作为await的返回值

3.注意：
await必须写在async函数中，但async函数中可以没有await
如果await的promise失败了，就会抛出异常，需要通过try...catch的方法来捕获处理
*/

//自定义函数模块
// (function (window) {
//     const PENDING = 'pending'
//     const RESOLVED = 'resolved'
//     const REJECTED = 'rejected'
//     //Promise构造函数
//     function Promise(excutor) {
//         const self = this
//         self.status = PENDING//给promise对象指定status属性，初始值为pedding
//         self.data = undefined//给promise对象指定一个用于储存结果数据的属性
//         self.callbacks = []//每个元素的结构：{onResolved(){}, onRejected(){}}

//         function resolve(value) {
//             //如果当前状态不是peding，直接结束
//             if (self.status !== PENDING) {
//                 return
//             }

//             //将状态改为resolved
//             self.status = RESOLVED
//             //保存value数据
//             self.data = value
//             //如果有待执行callback函数，立即异步执行回调函数onResolved
//             if (self.callbacks.length > 0) {
//                 setTimeout(() => {//放入队列中执行所有成功的回调
//                     self.callbacks.forEach(callbacksObj => {
//                         callbacksObj.onRejected(value)
//                     });
//                 });
//             }
//         }


//         function reject(reason) {
//             //如果当前状态不是peding，直接结束
//             if (self.status !== PENDING) {
//                 return
//             }

//             //将状态改为reject
//             self.status = REJECTED
//             //保存value数据
//             self.data = reason
//             //如果有待执行callback函数，立即异步执行回调函数onResolved
//             if (self.callbacks.length > 0) {
//                 setTimeout(() => {//放入队列中执行所有成功的回调
//                     self.callbacks.forEach(callbacksObj => {
//                         callbacksObj.onRejected(reason)
//                     });
//                 });
//             }
//         }

//         //立即同步执行excutor
//         try {
//             excutor(resolve, reject)
//         } catch (error) {//如果执行器抛出异常，promise对象变为rejected状态
//             reject(error)
//         }
//     }


//     //Promise原型对象的then()
//     //指定成功和失败的回调函数
//     //返回一个新的promise对象
//     Promise.prototype.then = function (onResolved, onRejected) {
//                                                       // onResolved = typeof onResolved === 'function' ? onResolved : value =>value//向后传递成功的value

//                                                       // //指定默认的失败的回调
//                                                       // onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }//向后传递失败的reason

//                                                       // const self = this
//                                                       // //返回一个新的promise对象
//                                                       // return new Promise((resolve, reject) => {
//                                                       //     //调用指定回调函数处理
//                                                       //     function handle(callback) {
//                                                       //         try {
//                                                       //             const result = callback(self.data)
//                                                       //             //3.如果回调函数返回是promise，return的promise结果就是这个promise的结果
//                                                       //             if (result instanceof Promise) {
//                                                       //                 result.then(
//                                                       //                     // value=>{
//                                                       //                     //     resolve(value)
//                                                       //                     // },
//                                                       //                     // reason=>{
//                                                       //                     //     reject(reason)
//                                                       //                     // }

//                                                       //                     value => resolve(value),//当result成功时，让return的promise也成功
//                                                       //                     reason => reject(reason)//当result失败时，让return的promise也失败

//                                                       //                     // result.then(resolve, reject)
//                                                       //                 )
//                                                       //             } else {
//                                                       //                 //  3.如果回调函数返回不是promise，return的promise就会成功，value就是返回的值
//                                                       //                 resolve(result)
//                                                       //             }
//                                                       //         } catch (error) {
//                                                       //             reject(error)
//                                                       //         }
//                                                       //     }

//                                                       //     //假设当前状态还是pending状态，将回调函数保存起来
//                                                       //     if (self.status === PENDING) {
//                                                       //         self.callbacks.push({
//                                                       //             onResolved(value) {
//                                                       //                 handle(onResolved)
//                                                       //             },
//                                                       //             onRejected(reason) {
//                                                       //                 handle(onRejected)
//                                                       //             }
//                                                       //         })
//                                                       //     } else if (self.status === RESOLVED) {
//                                                       //         //如果当前是resolved状态，异步执行onResolved并改变return的promise状态
//                                                       //         setTimeout(() => {
//                                                       //             handle(onResolved)
//                                                       //         });
//                                                       //     } else {
//                                                       //         //如果当前是onRejected状态，异步执行onRejected并改变return的promise状态
//                                                       //         setTimeout(() => {
//                                                       //             setTimeout(() => {
//                                                       //                 handle(onRejected)
//                                                       //             });
//                                                       //         });
//                                                       //     }


//                                                       // })
//     }

//     //Promise原型对象的catch()
//     //指定失败的回调函数
//     //返回一个新的promise对象
//     Promise.prototype.catch = function (onRejected) {
//         return this.then(undefined,onRejected)
//     }

//     //Promise函数对象的resolve方法
//     //返回一个指定结果的成功的promise
//     Promise.resolve = function (value) {

//     }

//     //Promise函数对象的reject方法
//     //返回一个指定reason的失败的promise
//     Promise.reject = function (reason) {

//     }

//     //Promise函数对象的all方法
//     //返回一个promise，只有当所有promise都成功时才成功   
//     Promise.all = function (promises) {

//     }

//     //Promise函数对象的race方法
//     //返回一个promise，其结果由第一个完成的promise决定
//     Promise.race = function (promises) {

//     }


//     //向外暴露Promise函数
//     window.Promise = Promise
// })(window)





// function mock1() {
//     return new Promise((resolve, reject) => {
//       const aa = { value: 3, time: 1000 }
//       const tap = (p) => {
//         const data = Object.assign(aa, p)
//         const { value, time } = data || {}
//         setTimeout(() => {//小于0.5失败，大于0.5成功
//           if (Math.random() > 0.5) {
//             resolve(value)
//           } else if (Math.random() < 0.5) {
//             reject(value)
//           }
//         }, time);
//       }
//       tap({ value: 10, time: 2000 })//指定返回的时间，数值
//     })
//   }
//   const result = mock1()
//   result.then(
//     value => {
//       console.log('success', value);//成功的
//     },
//     reason => {
//       console.log('fail', reason);//失败的
//     }
//   )
//  mock({ responseData: 1, delay: 3000, responseType: 'success' }).then((res) => {
//   console.log(res);
// })

// mock({ responseData: 1, delay: 3000, responseType: 'fail' }).then((res) => {
//   console.log(res);
// }).catch((error) => {
//   console.log(error);
// })

// try {
//   const res = await mock({ responseData: 1, delay: 3000, responseType: 'random' })
//   console.log(res);
// } catch (error) {
//   console.log(error);
// }


// function mock1() {
//   const aa = { value: '---3', time: 1000, result: 'faill' }
//   return new Promise((resolve, reject) => {
//     const tap = (p) => {
//       const data = Object.assign(aa, p)
//       const { value, time, result } = data || {}
//       setTimeout(() => {
//         if (Math.random() > 0.5) {
//           resolve('success' + value)
//         } else if (Math.random() < 0.5) {
//           reject('fail' + value)
//         } else {
//           console.log('随机' + result)
//         }
//       }, time);
//     }
//     tap({ value: '---4000', time: 100, result: 'succccc' })//指定返回的类型
//   })
// }

// async function mock3() {
//   try {
//     const value = await mock1()
//     console.log('成功', value);
//   } catch (error) {
//     console.log('失败', error);
//   }
// }
// mock3()

