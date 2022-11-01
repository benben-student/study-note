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
// //     })


// //Promise解决回调地狱
// const ID_BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
// const ROBOT_IMG_BASE_URL = 'https://robohash.org'
// //获取机器人的id
// function getRobotId(url, callback) {
//     $.get(url, function (data) {
//         const id = data.id
//         callback(id)
//     })
// }

// //创建机器人
// function createRobot(id) {
//     const img = document.createElement('img')
//     img.src = ROBOT_IMG_BASE_URL + `/${id}?size=200*200`
//     document.body.appendChild(img)
// }

// //回调地狱
// // const result = getRobotId(ID_BASE_URL + '/1', function (id) {
// //     createRobot(id)

// //     getRobotId(ID_BASE_URL + '/2', function (id) {
// //         createRobot(id)

// //         getRobotId(ID_BASE_URL + '/3', function (id) {
// //             createRobot(id)

// //             getRobotId(ID_BASE_URL + '/4', function (id) {
// //                 createRobot(id)

// //                 getRobotId(ID_BASE_URL + '/5', function (id) {
// //                     createRobot(id)
// //                 })
// //             })
// //         })
// //     })
// // })

// //获取机器人的id (Promise形式)
// function getRobotIdPromise(url) {
//     const promise = new Promise((resolve, reject) => {
//         $.get(url, function (data) {
//             const id = data.id
//             console.log('id', id)
//         })
//     })
//     return promise
// }
// getRobotIdPromise(ID_BASE_URL + '/1').then(function (id) {
//     createRobot(id)

//     return getRobotIdPromise(ID_BASE_URL + '/2')
// }).then(function (id) {
//     createRobot(id)

//     return getRobotIdPromise(ID_BASE_URL + '/3')
// }).then(function (id) {
//     createRobot(id)
// })