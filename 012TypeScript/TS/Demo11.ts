// //类的访问类型
// //1.private 只能在类的内部使用，不能在外部使用

// //2.protected 与private类似，也是只能在内部使用
// //但是在继承的时候是可以在外部使用的

// //3.public 可以在类的内部和外部都可以使用

// class Person {
//     //类的内部
//     // name: string
//     public name: string;
//     //private name: string   //name 只能在内部使用
//     // protected name:string
//     public sayHello() {
//         console.log(this.name + "say hello");
//     }
// }


// class Teacher extends Person {
//     public sayBye() {
//         this.name  //在继承的时候是可以在外部使用的
//     }
// }


// //类的外部
// const person = new Person()
// person.name = "js"
// person.sayHello()
// console.log(person.name);
