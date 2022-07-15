
//class继承  
// function Student(name) {
//     this.name = name;
// // }
// // Student.prototype.hello = function () {
// //     alert('Hello, ' + this.name + '!');
// // }

// // //class可以这样写  原型对象的构造函数不用考虑了直接通过extends来实现 
// // class Person extends Student {
// //     constructor(name, grade) {
// //         super(name); // 记得用super调用父类的构造方法!
// //         this.grade = grade;
// //     }
// //     myGrade() {
// //         alert('I am at grade ' + this.grade);
// //     }
// // }
// // //必须通过super(name)来调用父类的构造函数否则报错
// // var xiaoming=new Student('小明')
// // var a=xiaoming.hello();  console.log(a)



// //用class重新定义Cat，并从已有的Animal继承并新增一个方法say()返回字符串'Hello, xxx!'：
// // class Animal {
// //     constructor(name) {
// //         this.name = name;
// //     }
// // }
// // class Cat extends Animal {
// //     constructor(name) {
// //         super(name);
// //     }
// //     say() {
// //         return ('Hello, ' + this.name + '!');
// //     }
// // }
// // // 测试:
// // var kitty = new Cat('Kitty');
// // var doraemon = new Cat('哆啦A梦');
// // if ((new Cat('x') instanceof Animal)
// //     && kitty
// //     && kitty.name === 'Kitty'
// //     && kitty.say
// //     && typeof kitty.say === 'function'
// //     && kitty.say() === 'Hello, Kitty!'
// //     && kitty.say === doraemon.say) {
// //     console.log('测试通过!');
// // } else {
// //     console.log('测试失败!');
// // }


// //(1)
// // console.log('开始了')
// // new Promise(resolve => {
// //     setTimeout(() => {
// //         resolve('hello')
// //     }, 2000);
// // })
// //     .then(value => {
// //         console.log(value + "world")
// //     })
// //(2)
// // console.log('开始')
// // new Promise(resolve=>{
// //     setTimeout(()=>{
// //         resolve('hello')
// //     },2000)
// // })
// //   .then(value=>{
// //       console.log(value)
// //       return new Promise(resolve=>{
// //           setTimeout(()=>{
// //               resolve('world')
// //           },2000)
// //       })
// //   })
// //   .then(value=>{
// //       console.log(value+'world')
// //   })
// //(3)
// console.log('开始')
// new Promise(resolve => {
//     setTimeout(() => {
//         resolve('hello')
//     }, 2000)
// })
//     .then(value => {
//         console.log(value)
//         console.log('everyone')
//             (function () {
//                 return new Promise(resolve => {
//                     setTimeout(() => {
//                         console.log('ML')
//                         resolve('Ml')
//                     }, 2000)
//                 })
//             }())
//         return false
//     })
//     .then(value => {
//         console.log(value + 'world')
//     })


//Promise解决回调地狱
const ID_BASE_URL = 'https://jsonplaceholder.typicode.com/todos'
const ROBOT_IMG_BASE_URL = 'https://robohash.org'
//获取机器人的id
function getRobotId(url, callback) {
    $.get(url, function (data) {
        const id = data.id
        callback(id)
    })
}

//创建机器人
function createRobot(id) {
    const img = document.createElement('img')
    img.src = ROBOT_IMG_BASE_URL + `/${id}?size=200*200`
    document.body.appendChild(img)
}

//回调地狱
// const result = getRobotId(ID_BASE_URL + '/1', function (id) {
//     createRobot(id)

//     getRobotId(ID_BASE_URL + '/2', function (id) {
//         createRobot(id)

//         getRobotId(ID_BASE_URL + '/3', function (id) {
//             createRobot(id)

//             getRobotId(ID_BASE_URL + '/4', function (id) {
//                 createRobot(id)

//                 getRobotId(ID_BASE_URL + '/5', function (id) {
//                     createRobot(id)
//                 })
//             })
//         })
//     })
// // })

// //获取机器人的id (Promise形式)
// function getRobotIdPromise(url) {
//     const promise = new Promise((resolve, reject) => {
//         $.get(url, function (data) {
//             const id = data.id
//             console.log('id', id)
//         })
//     })
//     return promise
// }
// getRobotIdPromise(ID_BASE_URL + '/1').then(function (id) {
//     createRobot(id)

//     return getRobotIdPromise(ID_BASE_URL + '/2')
// }).then(function (id) {
//     createRobot(id)

//     return getRobotIdPromise(ID_BASE_URL + '/3')
// }).then(function (id) {
//     createRobot(id)
// })


//1.
//(1)用setTimeout函数打印一个数值
// const tap = () => {
//     setTimeout(() => {
//         console.log(1);
//     }, 3000);
// }
// tap()
//(2)用户可以传进一个参数
// const tap=(value)=>{
//     setTimeout(() => {
//         console.log(value)
//     }, 3000);
// }
// tap(1)
//(3)传两个参数
// const tap=(value,time)=>{
//     setTimeout(() => {
//         console.log(value)
//     }, time);
// }
// tap(12,3000)
//(4)优化
// const tap=({value,time})=>{
//     setTimeout(() => {
//         console.log(value)
//     }, time);
// }
// tap({value:1,time:3000})
//(5)用户少传，不传，增加默认值
// const aa={value:1,time:3000}
// const tap=(p)=>{
//     const data=Object.assign(aa,p)
//     const {value,time}=data ||{}
//     setTimeout(() => {
//         console.log(value)
//     },time);
// }
// tap({value:2})
// tap({time:1000})
// tap({value:100,time:4000})

//try catch 方法
// //基本的语法:
//           try{
//              // 可能会导致错误的代码
//             } catch(error){
//              // 在错误发生时怎么处理
//             }finally{
//              //无论上面结果如何finally都会执行
//             }
//正确的形式
// var array=[1,2]
// try {
//    console.log(array.length)
// } catch (error) {
//    console.log('错误信息：'+error.message)
//    arr=[]
//  }
 //错误的形式
//  var array=null
// try {
//    console.log(array.length)
// } catch (error) {
//    console.log('错误信息：'+error.message)
//    arr=[]
//  }
// //加finall
// var array=null
// try {
//    console.log(array.length)
// } catch (error) {
//    console.log('错误信息：'+error.message)
//    arr=[]
//  }finally{
//      console.log(1)
//  }


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

