// //get 和 set 的使用
// class XiaoJieJie {
//     constructor(private _age: number) { }
//     get age() { //可以用get方法，外部就可以获取到age的数据
//         return this._age - 10 //可以把数据进行修改
//     }

//     set age(age: number) {
//         this._age = age + 3
//     }
// }

// const dajiao = new XiaoJieJie(28)
// dajiao.age = 25

// console.log(dajiao.age);


// //static 静态类
// class Girl {
//     // sayLove() {
//     //     return "I love you"
//     // }

//     static sayLove() {
//         return "I love you"
//     }
// }
// //普通写法
// // const girl = new Girl()
// // console.log(girl.sayLove);

// //static写法
// console.log(Girl.sayLove());
