// 'use strict'
// 1.定义函数
// // （1）function abs(x){
// if (x >= 0) {
//     return x;
// } else {
//     return -x
// }
//          }      //abs是函数的名称，(x)内参数两个以上的话用,分隔
// (2)var abs = function (x) {
//     if (x >= 0) {
//         return x;
//     } else {
//         return -x;
//     }
// }       function(x) {... } 是一个匿名函数，他赋值给了变量abs，通过变量abs就可调用该函


// 2.arguments他只在函数内起作用，永远指向传入函数的所有参数，arguments类似数组但它不是数组
// abs()内可以不定义任何参数也能拿到参数的值
// function abs() {
//     if (arguments.lenght === 0) {
//         return 0
//     }
//     var x = arguments[0]
//     return x >= 0 ? x : -x
// }; console.log(
//     abs(), abs(1), abs(4), abs(-3)


// 3.rest参数  他只能写在最后面前面用...标识，rest后不能有任何参数
//    function foo(a, b, ...rest) {
//         console.log('a=' + a)
//         console.log('b=' + b)
//         console.log(rest)
//     }
//    console.log(foo(1, 2, 3, 4, 5))
//    console.log(foo(1)


// 4.函数变量作用域
//    function a() {
//             var aa = 1
//             return aa = aa + 1
//         }
//    function b() {
//             var aa = 'a'
//             return aa = 'a' + aa
//         }; console.log(a(), b())//var声明的aa变量只在格函数体内起作


// 5.变量提升
// 'use strict';
// function foo() {
//     var x = '嘿' + y
//     console.log(x)
//     var y = '这'
// }; console.log(foo())//对js相当于下面代
// function foo() {
//     var y
//     var x = '嘿' + y
//     console.log(x)
//     var y = '这'
// }//所以在函数内声明变量时要先声明所有变


// 6.全局作用域 window
// var aa = '123'
// console.log(aa)
// console.log(window.aa)//直接访问变量aa和访问window.aa是一样的
// //对函数调用也是相同的
// function foo() {
//     alert('1')
// }
// //console.log(foo());
// console.log(window.foo()


// -----------------------------------------------------------------------------------------------重点
// 7.解构赋值
//  var arr = ['1', '2', '3'];
// 把数组内元素分别赋值几个变量
//     (1)传统做法
// var x = arr[0]; var y = arr[1]; var z = arr[2]; console.log(x, y, z)
//     (2)解构赋值
// var [x, y, z] = ['1', '2', '3']; console.log(x, y, z)//一一对应的赋值
//     (3)对本身有嵌套的数组也可用
// let [x, [y, z]] = ['1', ['2', '3']]; console.log(x, y, z)//数组内嵌套位置也要与其位置一样
//     (4)还可以忽略一些元素
// let [, , z] = ['1', '2', '3']; console.log(z)//也是一一对应
//     (5)如果要从一个对象里取出若干属性可以这样做
// var person = {
//     age: 20,
//     city: 'zz',
//     school: 'zz',
//     name: 'benben'
// }
// var { name, age, school, city } = person; console.log(name, age, school, city)
//     (6)对象里有嵌套也是可以的，也需要一一对应
// var person = {
//     age: 20,
//     city: 'zz',
//     school: 'zz',
//     name: 'benben',
//     address: {
//         passport: '123456',
//         street: '145887'
//     }
// }
// var { age, city, address: { passport, street } } = person; console.log(age, city, passport, street)//不能写address，应直接写address内的属性名
//     (7)结构赋值也可以使用默认值
// var person = {
//     age: 20,
//     city: 'zz',
//     school: 'zz',
//     name: 'benben',
// }
// var { name, age, single = true } = person; console.log(name, age, single)
// ----------------------------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------------------------------------- 重点
// 8.this指向
//     (1)给对象绑定一个函数, 成为这个对象的 * 方法 *
//  var obj = {
//     name: 'benben',
//     birth: 2002,
//     age: function () {
//         var y = new Date().getFullYear()
//         return y - this.birth
//     }
// }; console.log(obj.age())//20
// 在一个方法内部this是一个特殊变量他始终指向当前对象obj这个变量，所有this.birth可以拿到obj的birth属
// 但是this有一个设计缺陷
// function getAge() {
//     var y = new Date().getFullYear()
//     return y - this.birth
// }
// var obj = {
//     name: 'benben',
//     birth: 2002,
//     age: getAge
// }
// console.log(
//     obj.age(),//20
//     getAge()//NAN
// )//这时的this指向是全局对象windo
// 试试这样写
// var fn = obj.age; console.log(fn())//NAN  也是不行,所以想要this指向正确必须obj.age()这样调
//     **** 解决办法 （1）* /   先用一个变量that获取this
// var obj = {
//     name: 'benben',
//     birth: 2002,
//     age: function () {
//         var that = this;//一开始就要获取this指向
//         function getAge() {
//             var y = new Date().getFullYear()
//             return y - that.birth//要用that而不是this了
//         }
//         return getAge()
//     }
// }
// console.log(obj.age())
//*****解决办法（2）*/   **apply()方法**
//要指定函数this指向哪个对象,用函数本身的 apply()方法 他接收两个参数，需要绑定的this变量和Array数组
//上面可以这样写
//(1)
// function getAge(){
//     var y=new Date().getFullYear()
//     return y-this.birth
// }
// var obj={
//     name:'benben',
//     birth:2002,
//     age:getAge
// }
// console.log(obj.age())
// console.log(getAge.apply(obj,[]))
//(2)[]内可以自带参数
// var person = {
//     fullName: function(city, country) {
//       return this.firstName + " " + this.lastName + "," + city + "," + country;
//     }
//   }
//   var person1 = {
//     firstName:"Bill",
//     lastName: "Gates"
//   }
//   console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
// ----------------------------------------------------------------------------------------------------------------------------------------0---


//-------------------------------------------------------------------------------------------------------重点
//9. call()方法  可以通过call()使用属于另一个对象的方法
//(1)
// var person={
//     aa:function(){
//         return this.bb+this.aaa+this.cc
//     }
// }
// var person1={
//     aaa:'&&&',
//     bb:'1',
//     cc:'2'
// }
// var aa=person.aa.call(person1);
// console.log(aa)

//(2)
// var person3={
//     aa:function(){
//         return this.cc+this.bb+this.dd
//     }
// }
// var person4={
//     bb:'**',
//     cc:'123',
//     dd:'444'
// }
// var a=person3.aa.call(person4)
// console.log(a)
//-----------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------重点
//10. bind()方法  他会创建一个函数的实例，其this值会绑定到传给bind()函数的值
// window.color='red'
// var o={color:'blue'}
// function changeColor(){
//     console.log(this.color)
// }
// var change=changeColor.bind(o)
// console.log(change())//调用change时后面一定要加()
//------------------------------------------------------------------------------------------


//-----------------------------------------
//11. 
//(1)call(),apply(),bind()三者的区别
// var xw={
//     name:'小王',
//     gender:'男',
//     age:24,
//     say:function(){
//         return this.name+","+this.gender+',今年'+this.age
//     }
// }
// var xh={
//     name:'小红',
//     gender:'女',
//     age:18
// }
// console.log(xw.say())//结果一定是  小王,男,今年24
// //对于call可以这样：
// var a=xw.say.call(xh);   console.log(a)
// //对于apply可以这样：
// var b=xw.say.apply(xh);   console.log(b)
// //对于bind **只能** 这样：
// var c=xw.say.bind(xh)();   console.log(c)
//(2)apply和call的
var xw = {
    name: '小王',
    gender: '男',
    age: 24,
    say: function (school, grade) {
        return this.name + "," + this.gender + ",今年" + this.age + ",在" + school + "上" + grade
    }
}
var xh = {
    name: '小红',
    gender: '女',
    age: 18
}
//对于call
var a=xw.say.call(xh,'一高','高一');   console.log(a)
//对于apply
var b=xw.say.apply(xh,['一高','高一']);  console.log(b)
//他们的第二个参数的元素都是与say方法中参数一一对应的，而apply的第二个参数是一个数组
//若用 bind 这样做可以这样
var c=xw.say.bind(xh)('一高','高一');   console.log(c)
//-----------------------------------------