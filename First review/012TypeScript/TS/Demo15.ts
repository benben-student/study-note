// // const Status = {
// //     MASSAGE: 0,
// //     SPA: 1,
// //     DABAOJIAN: 2
// // }

// //枚举类型
// enum Status {
//     MASSAGE,
//     SPA,
//     DABAOJIAN
//     //内容默认从零开始，所以下面getServer传2也可以打印出我要去dabaojian
// }

// console.log(Status.MASSAGE);
// console.log(Status.SPA);
// console.log(Status.DABAOJIAN);

// function getServer(status: any) {
//     if (status === Status.MASSAGE) {
//         return "message";
//     } else if (status === Status.SPA) {
//         return "SPA";
//     } else if (status === Status.DABAOJIAN) {
//         return 'dabaojian'
//     }
// }

// const result = getServer(2)
// console.log(`我要去${result}`);
