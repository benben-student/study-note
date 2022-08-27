// //补坑
// // class Person {
// //     //readonly的作用  外部的不能修改数据
// //     public readonly _name: string
// //     constructor(name: string) {
// //         this._name = name
// //     }
// // }

// // const person = new Person("js")

// // console.log(person._name);

// //抽象类

// abstract class Girl {
//     abstract skill()
// }

// class Waiter extends Girl {
//     //子类必须有父类的方法
//     skill() {
//         console.log("1");
//     }
// }

// class BaseTeacher extends Girl {
//     //子类必须有父类的方法
//     skill() {
//         console.log("2");
//     }
// }

// class seniorTeacher extends Girl {
//     //子类必须有父类的方法
//     skill() {
//         console.log("3");
//     }
// }