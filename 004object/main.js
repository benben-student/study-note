//1.对象 是一种无序的集合数据类型，它由若干键值对组成
//(1)
// var benben={
//     name:'benben',
//     age:20,
//     city:'zz',
//     birth:2002,
//     'middle school':'NO1school'
// }
// console.log(benben)
// //获取对象属性值
// var a=benben.name
// var b=benben.age
// var c=benben.birth;
// console.log(a,b,c)
// //获取属性名加""的方式，必须用['xxx']的方式
// var d=benben['middle school'];  console.log(d)
//(2) 可以自由给一个对象添加或删除属性
// var obj={
//     age:10,
//     city:'zz',
//     like:'ball'
// }
// obj.name='benben'
// obj.birth=2002
// console.log(obj)
// delete obj.age
// delete obj.like
// console.log(obj)
//(3) in 操作符可以检测对象是否有某一属性,有true否则为false
// var person={
//     age:20,
//     birth:2002,
//     name:'benben'
// }
// var a='age' in person
// var b='name' in person
// var c='school' in person
// console.log(a,b,c)
// //除toString属性外，in都可以
// var d='toString' in person
// console.log(d)
// //判断是对象自身拥有而不是继承得到的可以用hasOwnProperty()方法
// var dd={
//     age:20
// }
// var a=dd.hasOwnProperty('age')
// var b=dd.hasOwnProperty('toString')
// console.log(a,b)


//对象的解构赋值
// let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo,bar)
// //对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
// let { bar, foo } = { foo: 'aaa', bar: 'bbb' };
// console.log(foo,bar)

// //如果解构失败，变量的值等于undefined。
// let { baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz)


//**注意**，foo是匹配的模式，baz才是变量。真正被赋值的是变量baz，而不是模式foo。
// let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
// console.log(baz,foo)


// /解构也可以用于嵌套结构的对象
// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };


// let { p: [x, { y }] } = obj;
// console.log(x, y)//这时p是模式，不是变量，因此不会被赋值
// //如果p也要作为变量赋值，可以写成下面这样
// //(1)
// let obj = {
//     p: [
//         'Hello',
//         { y: 'World' }
//     ]
// };
// let { p, p: [x, { y }] } = obj;
// console.log(x, y, p)
// //(2)
// const node = {
//     loc: {
//         start: {
//             line: 1,
//             column: 5
//         }
//     }
// };
// let { loc, loc: { start }, loc: { start: { line } } } = node;
// console.log(line, loc, start)