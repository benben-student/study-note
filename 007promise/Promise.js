//1. Promise
//(1)语法上来说：Promise是一个构造函数
//(2)功能上来说：Promise对象用来封装一个异步操作并可以获取其结果

//2.Promise基本流程                           resolved状态）      then()
//                    -->成功了，执行resolve()-->Promise对象  -->  回调onResolved
// new Promise()-->执行异步操作                                                   -->新的Promise对象
//                    -->失败了，执行reject()-->Promise对象  -->  回调onReject()
//                                            （rejected状态）       then()/catch()

//3. 基本使用
//（1）创建一个新的Promise对象
// const p=new Promise((resolve,reject)=>{//执行器函数
//     //（2）执行异步操作任务
//     setTimeout(() => {
//         const time=Date.now()//如果当前时间是偶数就代表成功否则代表失败
//         if(time%2==0){
//             //如果成功了，调用resolve(value)
//             resolve('成功的数据，time'+time)
//         }else{
//             //如果失败了，调用reject(reason)
//             reject('失败的回调，time'+time)
//         }
//     }, 1000);
// })
// p.then(
//     value=>{//接收得到成功的value数据      onResolved
//         console.log('成功的回调',value);
//     },
//     reason=>{//接收得到的失败的reason数据   onRejected
//         console.log('失败的回调',reason);
//     }
// )

//4.为什么要用Promise
//（1）指定回调函数的方式更加灵活
//旧的：必须在启动异步任务前指定
//Promise：启动异步任务>返回promise对象>给promise对象绑定回调函数
//（2）支持链式调用，可以解决回调地狱
//什么是回调地狱：
//回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件
//回调地狱的缺点：
//不便于阅读，不便于异常处理
//（3）解决方法：promise链式调用
//（4）终极结局方法：async/await方法

//成功的回调函数
// function successCallback(result) {
//     console.log('声音文件创建成功：' + result);
// }
// //失败的回调函数
// function failureCallback(error) {
//     console.log('声音文件创建失败：' + error);
// }
//1).使用纯回调函数
// createAudioFileAsync(audioSetting, successCallback, failureCallback)

//     //2).使用Promise
// const promise = createAudioFileAsync(audioSetting)
// setTimeout(() => {
//     promise.then(successCallback, failureCallback)
// })
//回调地狱
// doSomething(function(result) {
//     doSomethingElse(result, function(newResult) {
//         doThirdThing(newResult, function(finalResult) {
//             console.log('Got the final result:' + finalResult);
//         }, failureCallback)
//     }, failureCallback)
// }, failureCallback)
// 用Promise的链式解决回调地狱
// doSomething()
//     .then(function (result) {
//         return doSomethingElse(result)
//     })
//     .then(function (newResult) {
//         return doThirdThing(newResult)
//     })
//     .then(function (finalResult) {
//         console.log('Got the final result:' + finalResult);
//     })
//     .catch(failureCallback)
// //async/await的终极解决回调地狱方案
// async function request() {
//     try {
//         const result = await doSomething()
//         const newResult = await doSomethingElse(result)
//         const finalResult = await doThirdThing(newResult)
//         console.log('Got the final result:' + finalResult);
//     } catch (error) {
//         failureCallback(error)
//     }
// }

// //5.Promise的API
/*(1)Promise构造函数：Promise(excutor){}
excutor函数：同步执行(resolve,reject)=>{}
resolve函数：内部定义成功时调用的函数 value=>{}
reject函数：内部定义失败时调用的函数reason=>{}
**excutor会在Promise内部立即同步回调，异步操作在执行器中执行

(2)Promise.prototype.then()方法：(onResolved,onRejected)=>{}

(3)Promise.prototype.catch()方法: (onRejected)=>{}

(4)Promise.resolve方法：(value)=>{}

(5)Promise.reject方法：(reason)=>{}

(6)Promise.all方法:  (promise)=>{}

(7)Promise.race()方法:  (promise)=>{}
*/

// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         //resolve('成功的数据')
//         reject('失败的数据')
//     }, 1000);
// }).then(
//     value => {
//         console.log('onResolved()1', value);
//     }).catch(
//         reason => {
//             console.log('onRejected()1', reason);
//         }
//     )
//产生一个成功值为1的promise对象
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)
//     }, 1000);
// })
// const p2 = Promise.resolve(2)
// const p3 = Promise.reject(3)
// p1.then(value => {console.log(value);})
// p2.then(value => {console.log(value);})
// p3.catch(reason => {console.log(reason);})

//All
// const pAll=Promise.all([p1,p2,p3])
// const pAll=Promise.all([p1,p2])
// pAll.then(
//     values=>{
//         console.log('All onResolved',values);
//     },
//     reason=>{
//          console.log('All onRejected',reason);
//     }
// )
//race
// const pRace=Promise.race([p1,p2,p3])
// pRace.then(
//     value=>{
//         console.log('race onResolved',value);
//     },
//     reason=>{
//          console.log('race onRejected',reason);
//     }
// )

//6.如何改变promise的状态
//（1）resolve(value)
//(2)reject(reason)
//(3)抛出异常：当前是pedding就会变成rejected
// const   p=new Promise((resolve,reject)=>{
//     // resolve(1)  //promise变为resolved状态
//     // reject(2)   //promise变为rejected状态
//     //throw new Error('出错了')  //抛出异常，promise变为rejected状态，reason为抛出的error
//     throw 3  //抛出异常，promise变为rejected状态，reason为抛出的3
// })
// p.then(
//     value=>{},
//     reason=>{
//         console.log('reason',reason);
//     }
// )



// //7.一个promise指定多个成功/失败回调函数，都会调用吗
// //当promise改变为对应状态时都会调用
// p.then(
//     value=>{},
//     reason=>{
//         console.log('reason2',reason);
//     }
// )
// p.then(
//     value=>{},
//     reason=>{
//         console.log('reason3',reason);
//     }
// )



//8.改变promise状态和指定回调函数谁先谁后
//常规：先指定回调函数，后改变的状态
// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(1)  //后改变的状态(同时指定数据)，异步执行回调函数
//     }, 1000)
// }).then(//先指定回调函数，保存当前的回调函数
//     value => { },
//     reason => {
//         console.log('reason', reason);
//     }
// )

// //先改状态，后指定回调函数
// new Promise((resolve, reject) => {
//     resolve(1)  //先改变的状态(同时指定数据)
// }).then(//后指定回调函数，异步执行回调函数
//     value => { console.log('value', value) },
//     reason => {
//         console.log('reason', reason);
//     }
// )

/*9.promise.then()返回的新promise的结果状态由什么决定？
(1)简单表达：由then()指定的回调函数执行的结果决定
(2)详细表达：
    1)如果抛出异常，新promise变为rejected，reason为抛出的异常
    2)如果返回的是非promise的任意值，新promise变为resolved，value为返回的值
    3)如果返回的是另一个新promise，此promise的结果就会成为新promise的结果
*/
// new Promise((resolve,reject)=>{
//     resolve(1)
//     //reject(2)
// }).then(
//     value=>{
//         console.log('value',value);
//         // return 2
//         // return Promise.resolve(3)
//         // return Promise.reject(4)
//         throw 5
//     },
//     reason=>{
//         console.log('reason',reason);
//     }
// )


//10. promise如何*串联*多个操作任务
//(1)promise的then()返回一个新的promise，可以形成then的链式调用
//(2)通过then的链式调用串联多个同步/异步任务


// new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('执行任务1(异步)');
//         resolve(1)
//     }, 1000);
// }).then(
//     value => {
//         console.log('任务1的结果', value);
//         console.log('执行任务2(同步)');
//         return 2
//     }
// ).then(
//     value => {
//         console.log('任务2的结果', value);
//         //再有异步任务需要封装在Promise里面，Promise是封装异步操作的
//         return new Promise((resolve, reject) => {
//             //启动任务3(异步)
//             setTimeout(() => {
//                 console.log('执行任务(异步)');
//                 resolve(3)
//             }, 1000);
//         })
//     }
// ).then(
//     value => {
//         console.log('任务3的结果', value);
//     }
// )


//11.promise异常穿透
//(1)当使用promise的then链式调用时，可以在最后指定失败的回调
//(2)前面任何操作出了异常，都会传到最后失败的回调函数中处理
// new Promise((resolve, reject) => {
//     //resolve(1)
//     reject(1)
// }).then(
//     value => {
//         console.log('onResolved1()', value);
//         return 2
//     },
//     //默认写为 reason=> {throw reason}
//     //或者写为  reason=>Promise.reject(reason)
// ).then(
//     value => {
//         console.log('onResolved2()', value);
//         return 3
//     },
//     //默认写为 reason=> {throw reason}
//     //或者写为  reason=>Promise.reject(reason)
// ).then(
//     value => {
//         console.log('onResolved3()', value);
//     },
//     //默认写为 reason=> {throw reason}
//     //或者写为  reason=>Promise.reject(reason)
// ).catch(
//     reason => {
//         console.log('onRejected1()', reason);
//     }
// )


//12.中断promise链
new Promise((resolve, reject) => {
    //resolve(1)
    reject(1)
}).then(
    value => {
        console.log('onResolved1()', value);
        return 2
    }
).catch(
    reason => {
        console.log('onRejected1()', reason);
        //throw reason
        //return Promise.reject(reason)
        return new Promise(()=>{})//返回一个pedding的promise，中断promise链
    }
).then(
    value => {
        console.log('onResolved3()', value);
    },
    reason => {
        console.log('onReject4()', reason);
    }
)