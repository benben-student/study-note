// class Lady {
//     content = "Hi,帅哥！"
//     sayHello() {
//         return this.content
//     }
// }

// // XiaoJieJie继承自 Lady，则 XiaoJieJie 为 Lady 子
// class XiaoJieJie extends Lady {
//     sayHello() {
//         //return "hi honey!" //改写sayHello的内容
//         return super.sayHello() + ".你好！" //super调用父的sayHello方法
//     }

//     sayLove() {
//         return "I love you"
//     }
// }

// const goddess = new XiaoJieJie()
// console.log(goddess.sayHello());
// console.log(goddess.sayLove());
