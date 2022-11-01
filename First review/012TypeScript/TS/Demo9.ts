// //interface 接口
// interface Girl {
//     name: string,
//     age: number,
//     bust: number
//     waistline?: number //?:表示此数据可选可不选
//     [propname: string]: any //表示 键是string类型，值是任意类型
//     say(): string
// }

// //接口继承接口
// interface Teacher extends Girl {
//     teach(): string;
// }




// //接口可以限制对象和函数
// const girl = {
//     name: "大脚",
//     age: 18,
//     bust: 94,
//     waistline: 21,
//     sex: "女",  //第七行注释此行则会报错
//     say() {
//         return "欢迎光临，红浪漫洗浴"
//     },
//     teach() {
//         return "我来教你如何做"
//     }
// }



// //接口也可以限制类
// class XiaoJieJie implements Girl {
//     name = "刘英"
//     age = 18
//     bust = 90
//     say(): string {
//         return "欢迎光临，红浪漫洗浴"
//     }
// }

// const screenResume = (girl: Girl) => {
//     girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
//     girl.age >= 24 || girl.bust < 90 && console.log(girl.name + "你被淘汰");
// }

// //Gril改成Teacher
// const getResume = (girl: Teacher) => {
//     console.log(girl.name + "年龄是" + girl.age);
//     console.log(girl.name + "胸围是" + girl.bust);
//     girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline); //有数据打印出数据，没有就不打印
//     girl.sex && console.log(girl.name + "性别是：" + girl.sex);

// }

// // screenResume("小美", 19, 150)
// screenResume(girl)
// getResume(girl)