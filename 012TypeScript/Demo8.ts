// //interface 接口
// interface Girl {
//     name: string,
//     age: number,
//     bust: number
//     waistline?: number //?:表示此数据可选可不选
// }

// const girl = {
//     name: "大脚",
//     age: 18,
//     bust: 94,
//     waistline: 21
// }

// const screenResume = (girl: Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name + "你被淘汰");
// }

// const getResume = (girl: Girl) => {
//     console.log(girl.name + "年龄是" + girl.age);
//     console.log(girl.name + "胸围是" + girl.bust);
//     girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline); //有数据打印出数据，没有就不打印

// }

// // screenResume("小美", 19, 150)
// screenResume(girl)
// getResume(girl)