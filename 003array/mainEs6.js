// //1.  ...展开语法，是将数组，string或(key-value)对象在语法层面展开
// //(1)在数组中
// function sum(x, y, z) {
//     return x + y + z
// }
// const number = [1, 2, 3]
// //普通方法
// console.log(sum(number[0], number[1], number[2]))
// //...方法
// console.log(sum(...number))
//(2)在时间 new Date
// var dates = [2022, 6, 20]
// var d = new Date(...dates)
// console.log(d)
// //(3)数组拼接
// var arr1=[1,2,3]
// var arr2=[4,5,6]
// var arr3=[...arr1,...arr2]
// console.log(arr3)
//(4)数组拷贝
// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [...arr1]
// console.log(arr2)
// //(5)在对象里
// var obj1 = {
//     foo: '1',
//     bar: '2'
// }
// var obj2 = {
//     foo1: '3',
//     bar1: '4'
// }
// var a = { ...obj1 }; console.log(a)//克隆对象obj1
// var b = { ...obj1, ...obj2 }; console.log(b)//合并obj1和obj2
