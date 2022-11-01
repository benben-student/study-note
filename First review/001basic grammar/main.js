// 1.语法
// js的代码每个语句以; 结束，语句块用{... }，但并不强制在每个语句后加;


// 2.注释  有两种方法
//   （1）以//开头到行末  行内注释
//   （2）用/* */把多行字符串包裹起来  块级注释


// 3.数据类型
//   (1)Number:
// var a = 1 + 2;
// var b = (1 + 2) * 5 / 2
// var c = 2 / 0
// var d = 0 / 0
// var e = 10 % 3
// var h = 10.5 % 3
// console.log(a, b, c, d, e, h) //3  7.5  Infinity   NaN   1  1.5   %是取余运算符


// 4.布尔值 分为true和false两种值
// 可以用true和false表示布尔值也可以通过布尔运算算出来
// var a = true
// var b = false
// var c = 2 > 1
// var d = 2 >= 3
// console.log(a, b, c, d)
//     （1）&& 是与 运算，只有所有都为true, 运算结果才是true
// var a = 1 > 2 && 1 < 2
// var b = 1 < 2 && 2 > 1
// console.log(a, b)
// // （2）|| 是 或运算，只要其中有一个为true，运算结果才是true 
// var c = 3 > 1 || 3 < 1
// var d = 3 > 1 || 4 > 1
// console.log(c, d)
// //  （3）! 是非运算，单目运算符，把true变为false，false变为true
// var e = !true
// var f = !false
// var g = !(1 < 2)
// var gg = !(1 > 2)
// console.log(e, f, g, gg)



// 5.比较运算符  js有两种比较运算符 == ， ===
//       （1）== 他会自动转换数据类型作比较，大多时候结果很诡异
//       （2）=== 不会自动转换数据类型比较，若数据类型不同则返回false
// 由于js的设计缺陷大多使用 ===
//   NaN这个特殊的Number与所以其他值都不等包括自己本身
// var a = NaN === NaN
// console.log(a) 只能通过 isNaN()函数进行比较
// var b = isNaN(NaN)
// console.log(b)



// 6.null和undefined
//       null表示一个‘空’的值
// undefined表示值未定义
// 大多数时候都应该用null，undefined仅在判断函数参数是否传递的情况下用



// 7.数组  是一组按顺序排列的集合，集合内每个值称为元素，数组可以包括任意数据类型
//      （1）var a = [1, 2, 3.14, 'Hello', null, true] && true;
// console.log(a)
// 数组用[]表示，元素之间用, 隔开
//      （2）可以用 new Array(1, 2, 3)来创建新数组，但建议直接使用[]
//      （3）数组的元素可以通过索引的方式来访问，索引值起始为0
// var arr = [1, 2, 3.14926, 'hello', null, true]
// var b = arr[0]
// var c = arr[1]
// var d = arr[4]; console.log(b, c, d)



// //8.对象 是由一组由键-值组成的无序集合
// var person = {
//   name: 'ben',
//   age: 20,
//   tage: ['js', 'web', 'mobile'],
//   city: 'zhengzhou',
//   hasCar: true,
//   zipcode: null
// }//js对象的键都是字符串类型，值可以是任意数据类型，每个键又称为对象的属性
// //要获取一个对象的的属性，可以用 对象.属性名 的方式
// var a = person.name
// var b = person.city; console.log(a, b)



// 9。变量  可以是数字也可以是任意数据类型
// 变量名是大小写英文，数字，$和_的组合，开头不能用数字，也不能是js的关键字(if,while...)
// 变量名也可以用中文，但最好不要
//      （1）
// var a
// var $b = 1
// var _s007 = '007'
// var Answer = truevar
// var t = null
//   (2) js中可以用 = 把任意数据类型的值赋给变量，同一变量可以反复赋值，但var只能声明一次
// var a = 123
// var a = 234;
// var b = 2345
// d = 456
// console.log(a, b)



// 10. strict严格模式  启用strict模式的方法是在JavaScript代码的第一行写上：'use strict';
// 'use strict'
//     （1）严格模式
// h = 10
// console.log(h)
//     （2）无严格模式：
// i = 100
// console.log(i)







