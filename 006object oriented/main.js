// //1.用构造函数的方法来创建对象
// // 
// function Student(name) {
//     this.name = name;
//     this.hello = function () {
//         alert('Hello, ' + this.name + '!');
//     }
// }
// var xiaoming = new Student('小明');
// var a=xiaoming.name; 
// var b=xiaoming.hello();  console.log(a,b)//可以用关键字new来调用这个函数，并返回一个对象


// //2.要让创建的对象共享一个hello函数可以
// function Student(name) {
//     this.name = name;
// }

// Student.prototype.hello = function () {
//     alert('Hello, ' + this.name + '!');
// };//我们只要把hello函数移动到对象共同的原型上就可以了，也就是Student.prototype
// var xiaoming = new Student('小明')
// var xiaohong = new Student('小红')
// console.log(xiaoming.hello === xiaohong.hello)


// //3.用构造函数定义Student，并让所有Student有一个name属性，并共享方法say(),返回字符串‘Hello，xxx！’
// // function Student(name) {
// //     this.name = name;
// // }
// // Student.prototype.say = function () {
// //     return `Hello, ${this.name}!`;
// // }
// // // 测试:
// // var kitty = new Student('Kitty');
// // var doraemon = new Student('哆啦A梦');
// // if (kitty && kitty.name === 'Kitty'
// //     && kitty.say
// //     && typeof kitty.say === 'function'
// //     && kitty.say() === 'Hello, Kitty!'
// //     && kitty.say === doraemon.say
// // ) {
// //     console.log('测试通过!');
// // } else {
// //     console.log('测试失败!');
// // }

// //4.class继承  
// function Student(name) {
//     this.name = name;
// }
// Student.prototype.hello = function () {
//     alert('Hello, ' + this.name + '!');
// }

// //class可以这样写  原型对象的构造函数不用考虑了直接通过extends来实现 
// class Person extends Student {
//     constructor(name, grade) {
//         super(name); // 记得用super调用父类的构造方法!
//         this.grade = grade;
//     }
//     myGrade() {
//         alert('I am at grade ' + this.grade);
//     }
// }
// //必须通过super(name)来调用父类的构造函数否则报错
// var xiaoming=new Student('小明')
// var a=xiaoming.hello();  console.log(a)



//5.用class重新定义Cat，并从已有的Animal继承并新增一个方法say()返回字符串'Hello, xxx!'：
// class Animal {
//     constructor(name) {
//         this.name = name;
//     }
// }
// class Cat extends Animal {
//     constructor(name) {
//         super(name);
//     }
//     say() {
//         return ('Hello, ' + this.name + '!');
//     }
// }
// // 测试:
// var kitty = new Cat('Kitty');
// var doraemon = new Cat('哆啦A梦');
// if ((new Cat('x') instanceof Animal)
//     && kitty
//     && kitty.name === 'Kitty'
//     && kitty.say
//     && typeof kitty.say === 'function'
//     && kitty.say() === 'Hello, Kitty!'
//     && kitty.say === doraemon.say) {
//     console.log('测试通过!');
// } else {
//     console.log('测试失败!');
// }


//Date   对象用来表示日期和时间
var now = new Date();
console.log(now);
//获取年份
var a=now.getFullYear(); 
//获取月份
var c=now.getMonth()+1; //要加1，因为js设计是0~11为1~12月
//获取当月多少日
var aa=now.getDate(); 
//获取星期几
var cc=now.getDay(); 
//获取小时 24小时制
var aaa=now.getHours(); 
//获取分
var ccc=now.getMinutes();
//获取秒
var e=now.getSeconds();
console.log(a,c,aa,cc,aaa,ccc,e)

