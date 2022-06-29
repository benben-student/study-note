
//class继承  
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



//用class重新定义Cat，并从已有的Animal继承并新增一个方法say()返回字符串'Hello, xxx!'：
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


//(1)
// console.log('开始了')
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 2000);
// })
//     .then(value => {
//         console.log(value + "world")
//     })
//(2)
// console.log('开始')
// new Promise(resolve=>{
//     setTimeout(()=>{
//         resolve('hello')
//     },2000)
// })
//   .then(value=>{
//       console.log(value)
//       return new Promise(resolve=>{
//           setTimeout(()=>{
//               resolve('world')
//           },2000)
//       })
//   })
//   .then(value=>{
//       console.log(value+'world')
//   })
//(3)
console.log('开始')
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello')
    }, 2000)
})
    .then(value => {
        console.log(value)
        console.log('everyone')
            (function () {
                return new Promise(resolve => {
                    setTimeout(() => {
                        console.log('ML')
                        resolve('Ml')
                    }, 2000)
                })
            }())
        return false
    })
    .then(value => {
        console.log(value + 'world')
    })