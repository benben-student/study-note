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
const aa={value:1,time:3000}
const tap=(p)=>{
    const data=Object.assign(aa,p)
    const {value,time}=data ||{}
    setTimeout(() => {
        console.log(value)
    },time);
}
tap({value:2})
tap({time:1000})
tap({value:100,time:4000})