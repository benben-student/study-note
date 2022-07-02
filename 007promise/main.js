//(1)
// console.log('开始了')
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 2000);
// })
//     .then(value => {
//         console.log(value + "world")
//     })
//(2)
// console.log('开始')
// new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve('hello')
//     },2000)
// })
//   .then(value=>{
//       console.log(value)
//       return new Promise(resolve=>{
//           setTimeout(()=>{
//               resolve('world')
//           },2000)
//       })
//   })
//   .then(value=>{
//       console.log(value+'world')
//   })
//(3)
// console.log('开始')
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 2000)
// })
//     .then(value => {
//         console.log(value)
//         console.log('everyone')
//             (function () {
//                 return new Promise(resolve => {
//                     setTimeout(() => {
//                         console.log('ML')
//                         resolve('Ml')
//                     }, 2000)
//                 })
//             }())
//         return false
//     })
//     .then(value => {
//         console.log(value + 'world')
//     })






// console.log('开始了')
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 3000);
// })
//     .then(value => {
//         console.log(value + "world")
//     })

//对已经完成的promise执行then
// console.log('start')
// let promise = new Promise(resolve => {
//     setTimeout(() => {
//         console.log('the promise fulfilled')
//         resolve('hello world')
//     }, 1000);
// })
// setTimeout(() => {
//     promise.then(value => {
//         console.log(value)
//     })
// }, 3000);


//then里不返回promise会怎样
// console.log('here we go')
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 2000)
// })
//     .then(value => {
//         console.log(value)
//         console.log('everyone')
//             (function () {
//                 return new Promise(resolve => {
//                     setTimeout(() => {
//                         console.log('Mr.Laurence')
//                         resolve('Merry Xmas')
//                     }, 2000);
//                 })
//             }())
//         return false
//     })
//     .then(value => {
//         console.log(value + 'world')
//     })


//引出 .then()
