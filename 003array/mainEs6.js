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
  

//数组的 解构赋值
// let [a, b, c] = [1, 2, 3];
// //等号两边的模式相同，左边的变量就会被赋予对应的值
// let [foo, [[bar], baz]] = [1, [[2], 3]];
// console.log(foo,barbaz)

// let [ , , third] = ["foo", "bar", "baz"];
// third 

// let [x, , y] = [1, 2, 3];console.log(x,y)

// let [head, ...tail] = [1, 2, 3, 4]
// console.log(head,tail)

// let [x, y, ...z] = ['a'];
// console.log(x,y,z)//如果解构不成功，变量的值就等于undefined

//另一种情况是不完全解构
// let [x, y] = [1, 2, 3];
// console.log(x,y)

// let [a, [b], d] = [1, [2, 3], 4];
// console.log(a,b,d)