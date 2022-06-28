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