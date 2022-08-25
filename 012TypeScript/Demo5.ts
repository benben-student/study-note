// //函数返回类型的注释 
// // function getTotal(one:number,two:number):number{
// //     return one+two   //+""
// // }
// // const total=getTotal(1,2)

// // function sayHello(): void { //返回类型 无类型
// //     console.log("hello world");
// // }

// //一直执行不完的函数
// // function errorFunction(): never {
// //     throw new Error()
// //     console.log("hello world");
// // }

// // function forever(): never {
// //     while (true) { }
// //     console.log("hello world");
// // }


// //函数参数是对象的
// function add({ one, two }: { one: number, two: number }) {
//     return one + two
// }
// const total = add({ one: 1, two: 2 })

// function getNumber({ one }: { one: number }) {
//     return one
// }
// const one = getNumber({ one: 1 })