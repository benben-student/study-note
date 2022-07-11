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
function successCallback(result) {
    console.log('声音文件创建成功：' + result);
}
//失败的回调函数
function failureCallback(error) {
    console.log('声音文件创建失败：' + error);
}
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
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1)
    }, 1000);
})
const p2 = Promise.resolve(2)
const p3 = Promise.reject(3)
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
const pRace=Promise.race([p1,p2,p3])
pRace.then(
    value=>{
        console.log('race onResolved',value);
    },
    reason=>{
         console.log('race onRejected',reason);
    }
)