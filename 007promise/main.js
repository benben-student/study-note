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
console.log('开始')
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello')
    }, 2000)
})
    .then(value => {
        console.log(value)
        console.log('everyone')
            (function () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log('ML')
                        resolve('Ml')
                    }, 2000)
                })
            }())
        return false
    })
    .then(value => {
        console.log(value + 'world')
    })