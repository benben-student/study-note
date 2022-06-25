// //1.Object.is()  它用来比较两个值是否严格相等，与===基本一致。
// var a=Object.is('foo','foo')
// var b=Object.is({},{})
// var c=Object.is('1','1')
// console.log(a,b,c)

//2.Object.assign() 
//(1)用于对象的合并
// const target = { a: 1 };
// const source1 = { b: 2 };
// const source2 = { c: 3 };
// Object.assign(target, source1, source2)//第一个是参数，后面的都是复制对象
// console.log(target) 
//(2)如果目标对象与源对象有同名属性，后面的属性会覆盖前面的属性
// const target = { a: 1, b: 1 };
// const source1 = { b: 2, c: 2 };
// const source2 = { c: 3 };
// Object.assign(target, source1, source2);
// console.log(target) 
// //(3)如果只有一个参数会直接返回该参数的对象
// var a={a:1}
// var b=Object.assign(a)
// console.log(a)
//(4)对于嵌套的对象，如果属性同名，则会替换不是添加
// const target = { a: { b: 'c', d: 'e' } }
// const source = { a: { b: 'hello' } }
// var a=Object.assign(target, source)
// console.log(a)
//(5)对数组的处理
var a=[1,2,3]
var b=[4,5]
var c=Object.assign(a,b)
console.log(c)//该方法把数组视为属性名为0，1，2...的对象，所以引用对象的0，1，2...属性把前面的给替换掉了
//(6)
