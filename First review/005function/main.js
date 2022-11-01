'use strict';
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
// //(2)apply和call的
// var xw = {
//     name: '小王',
//     gender: '男',
//     age: 24,
//     say: function (school, grade) {
//         return this.name + "," + this.gender + ",今年" + this.age + ",在" + school + "上" + grade
//     }
// }
// var xh = {
//     name: '小红',
//     gender: '女',
//     age: 18
// }
// //对于call
// var a=xw.say.call(xh,'一高','高一');   console.log(a)
// //对于apply
// var b=xw.say.apply(xh,['一高','高一']);  console.log(b)
// //他们的第二个参数的元素都是与say方法中参数一一对应的，而apply的第二个参数是一个数组
// //若用 bind 这样做可以这样
// var c=xw.say.bind(xh)('一高','高一');   console.log(c)
// //-----------------------------------------


//12.map
//(1)要把pow函数作用在arr数组上可以用map实现
// function pow(x) {
//     return x * x;
// }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// var results = arr.map(pow);
// console.log(results)
//(2)把数组所有数字转化为字符串
// var arr=[1,2,3,4,5,6,7,8,9]
// var a=arr.map(String);   console.log(a)


//13.reduce  把一个函数作用在这个数组的每一项上，这个函数必须接收两个参数，reduce()把结果继续和序列的下一个元素做 **累积计算**
//对一个数组求和
// var arr = [1, 3, 5, 7, 9];
// var a=arr.reduce(function (x, y) {
//     return x + y;
// });   console.log(a)

//14.filter  把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素
//(1)删掉偶数，只保留奇数
// var arr = [1, 2, 4, 5, 6, 9, 10, 15];
// var r = arr.filter(function (x) {
//     return x % 2 !== 0;
// });
// console.log(r);
// //(2)把一个数组中的空字符串删掉
// var arr = ['A', '', 'B', null, undefined, 'C', '  '];
// var r = arr.filter(function (s) {
//     return s && s.trim();
// });
// console.log(r);
//(3).trim方法  去除字符串的头尾空格
// var str='   123   '
// var b=str.trim()
// console.log(b)


//15.every  判断数组的所有元素是否满足测试条件
// var arr = ['123', '456', '1'];
// console.log(arr.every(function (s) {
//     return s.length > 0;
// })); 

//16.find  查找符合条件的第一个元素如果找到了回这个元素否则返回undefined
// var arr = ['', '123', '456', '1'];
// var arr1=['','1','123']
// console.log(arr.find(function (s) {
//     return s.length > 0;
// })); 
// console.log(arr1.find(function (s) {
//     return s.length > 0;
// // })); 

// //17.findIndex  查找符合条件的第一个元素返回这个元素的索引，如果没有找到返回-1
// var arr = ['','2','1'];
// var arr1=['','','1']
// var arr2=['','','']
// console.log(arr.findIndex(function (s) {
//     return s.length > 0;
// })); 
// console.log(arr1.findIndex(function (s) {
//     return s.length > 0;
// })); 
// console.log(arr2.findIndex(function (s) {
//     return s.length > 0;
// })); 


// //18.forEach   把每个元素依次作用于传入的函数但不会返回新的数组,常用于遍历数组
// var arr = ['Apple', 'pear', 'orange'];
// arr.forEach(console.log);


//箭头函数
//(1)基本表示
//普通写法           function (x) {
//                      return x * x;
//                   }
//                  function x(x){
//                      return x*x
//                   }

//箭头函数写法         x => x * x 
//                    var x=x=>x*x  //调用的话 x();
//(2)如果参数不是一个，就需要用括号()括起来
// var fn=(x, y) => x * x + y * y
// console.log(fn(1,2))
//(3)如果要返回一个对象,对象要加{}
// x => ({ foo: x })


//19. this指向问题  箭头函数完全修复了this的指向，不再需要 var that = this 写法
//原写法
// var obj = {
//     birth: 2002,
//     getAge: function () {
//         var b = this.birth; // 1990
//         var fn = function () {
//             return new Date().getFullYear() - this.birth; // this指向window或undefined
//         };
//         return fn();
//     }
// };
// console.log(obj.getAge())  //会报错

//20 箭头函数写法
// var obj = {
//     birth: 2002,
//     getAge: function () {
//         var b = this.birth; // 1990
//         var fn = () => new Date().getFullYear() - this.birth; //修改后this指向obj对象
//         return fn();
//     }
// // };
// // console.log(obj.getAge(2022))


// //21 匿名函数
// //(1)什么是匿名函数,
// //单独只写一个匿名函数会报错,需要给 匿名函数包裹一个括号，使之成为表达式
// //被小括号包裹的内容会被js识别为一个函数表达式
// // (function(){
// //     console.log('123')
// // })
// //(2)如何调用  后面加括号即可
// // (function(){
// //     console.log('123')
// // })();


// //22闭包
// //语法：函数套函数，子函数调用父函数变量，子函数被外界引用
// //好处：缓存数据
// //缺点：内存泄漏（占用内存）
// //(1)
// // function person() {
// //     var arr = 10
// //     function person1() {
// //         return arr
// //     }
// //     return person1
// // }
// // var a = person()
// // console.log(a())
// // //优化
// // function person2() {
// //     var arr1 = 20
// //     return function () {
// //         return arr1
// //     }
// // }
// // var b = person2()
// // console.log(b())
// //(2)也可以用数组的形式
// // function person(){
// //     var a=1
// //     var b=2
// //     return function(){
// //         return [a,b]
// //     }
// // }
// // var a=person()
// // var b=a()[0]
// // var c=a()[1]
// // console.log(a(),b,c)
// //另一种改写方式
// // function person(){
// //     var a=1
// //     var b=2
// //     return[
// //         function(){
// //             return a
// //         },
// //     function(){
// //         return b
// //     }
// //     ]
// // }
// // var a=person()
// // var b=a[0]()
// // // var c=a[1]()
// // // console.log(b,c)
// // //(3)对象的形式
// // function fun(){
// //     var a=10
// //     var b=20
// //     return {
// //         getA:function(){
// //             return a
// //         },
// //         getB:function(){
// //             return b
// //         }
// //     }
// // }
// // var f=fun()
// // var a=f.getA()
// // var b=f.getB()
// // console.log(a,b)
// //优化 框架里常见的形式
// // function fun() {
// //     var a = 10
// //     var b = 20
// //     function getA() {
// //         return a
// //     }
// //     function getB() {
// //         return b
// //     }
// //     return {
// //         getA: getA,
// //         getB: getB
// //     }
// // }
// // var f = fun()
// // var a = f.getA()
// // var b = f.getB()
// // console.log(a, b)
// //在模块里的，与自调用函数的结合形式
// var moduel=(function fun() {
//         var a = 10
//         var b = 20
//         function getA() {
//             return a
//         }
//         function getB() {
//             return b
//         }
//         return {
//             getA: getA,
//             getB: getB
//         }
//     })();
// var a=moduel.getA()
// var b=moduel.getB()
// console.log(a,b)