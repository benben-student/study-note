// // //1. 用传统的方法
// // function Point(x,y){
// //     this.x=x
// //     this.y=y
// // }
// // Point.prototype.toString=function(){
// //     return '('+this.x+','+this.y+')'
// // }
// // var p=new Point(1,2)
// // //用class的方式写
// // class Point{
// //     constructor(x,y){
// //         this.x=x
// //         this.y=y
// //     }
// //     toString(){
// //         return '('+this.x+','+this.y+')'
// //     }
// // }

// // //2.类的数据类型就是函数，类本身指向构造函数
// // class Point{
// // }
// // console.log(typeof Point)
// // console.log(Point===Point.prototype.constructor);


// // //3.类的使用 也是直接用new命令
// // class Bar{
// //     doStuff(){
// //         console.log('stuff')
// //     }
// // }
// // const b=new Bar()
// // console.log(b.doStuff());

// //类必须使用new调用不然会报错
// // class Foo{
// //     constructor(){
// //         return Object.create(null)
// //     }
// // }
// // Foo()

// // class Foo{
// //     constructor(){
// //         return Object.create(null)
// //     }
// // }
// // new Foo()
// //生成类的实例的写法也是需要加new不然也会报错
// // class Point{
// // }
// // // var point=Point(2,3)
// // var point=new Point(2,3)

// //4.取值函数getter，和存值函数setter
// class MyClass {
//     constructor() {
//     }
//     get prop() {
//         return 'getter';
//     }
//     set prop(value) {
//         console.log('setter: ' + value);
//     }
// }

// let inst = new MyClass();
// var a = inst.prop = 123;
// var b = inst.prop
// console.log(a, b);


// //5.class表达式  与函数一样类也可以使用表达式的形式定义
// const MyClass = class Me {
//     getClassName() {
//         return Me.name;
//     }
// };
// //外部调用用MyClass，在内部调用用Me

// //6.静态属性  在实例属性的前面加上static关键字就可以增加静态属性了
// // 老写法
// class Foo {
//     // ...
// }
// Foo.prop = 1;

// // 新写法
// class Foo {
//     static prop = 1;
// }

// //7.in 运算符  in运算符判断某个对象是否有私有属性#foo。它不会报错，而是返回一个布尔值。
// class A {
//     #foo = 0;
//     m() {
//         console.log(#foo in this); // true
//         console.log(#bar in this); // false
//     }
// }//判断私有属性时，in只能用在类的内部

// //8.name属性
// class Point { }
// Point.name
//name属性总是返回紧跟在class关键字后面的类名

//9.this指向问题  
//类的方法内部如果含有this，它默认指向类的实例，很可能报错
// class Logger {
//     printName(name = 'there') {
//         this.print(`Hello ${name}`);
//     }
//     print(text) {
//         console.log(text);
//     }
// }

// const logger = new Logger();
// const { printName } = logger;
// printName()
//两种解决办法
//(1)在构造方法中绑定this
class Logger {
    constructor() {
        this.printName = this.printName.bind(this);
    }
    printName(name = 'there') {
        this.print(`Hello ${name}`);
    }
    print(text) {
        console.log(text);
    }
}
const logger = new Logger();
const { printName } = logger;
printName()
//(2)箭头函数
class Obj {
    constructor() {
        this.getThis = () => this;
    }
}
const myObj = new Obj();
console.log(myObj.getThis() === myObj) 