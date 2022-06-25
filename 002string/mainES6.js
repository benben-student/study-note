//ES6新增实例方法
//1. includes(), startsWith(), endsWith() 
//(1)includes()：*返回布尔值*，表示是否找到了参数字符串。
//(2)startsWith()：**，表示参数字符串是否在原字符串的头部
//(3)endsWith()：**，表示参数字符串是否在原字符串的尾部
// let obj='hello world!'
// var a=obj.startsWith('hello')
// var b=obj.endsWith('!')
// var c=obj.includes('o')
// console.log(a,b,c)
//这三个方法都支持第二个参数，表示开始搜索的位置
// let person='heihei i am! here'
// var a=person.startsWith('am',9)
// var b=person.endsWith('!',9)
// var c=person.includes('m',10)
// console.log(a,b,c)


//2.实例方法：repeat() 返回一个新字符串，表示将原字符串重复n次
// var a='a'.repeat(3)
// var b='haha'.repeat(4)
// var c='here'.repeat(0)
// //参数如果是小数则会取整
// var d='tu'.repeat(3.5)
// console.log(a,b,c,d)


//3.实例方法 padStart()用于头部补全，padEnd()用于尾部补全
//他们一共接受两个参数，第一个是字符串补全生效的最大长度，第二个参数是用来补全的字符串
// var a='x'.padStart(5, 'ab') 
// var b='x'.padStart(4, 'ab') 
// var c='x'.padEnd(5, 'ab') 
// var d='x'.padEnd(4, 'ab') 
// console.log(a,b,c,d)
// //如果补全的字符串长度超过了最大长度，则会截去超出的字符串
// var e='abc'.padStart(10, '0123456789')
// console.log(e)
// //如果省略第二个参数，默认使用空格补全长度。
// var aa='x'.padStart(4) 
// var bb='x'.padEnd(4) 
// console.log(aa,bb)


//4.实例方法   trimStart()，trimEnd() 
//trimStart()消除字符串头部的空格，trimEnd()消除尾部的空格
// const s = '  abc  ';
// var a=s.trim() 
// var b=s.trimStart() 
// var c=s.trimEnd() 
// console.log(a,b,c)

//5.实例方法：at()接受一个整数作为参数，返回参数指定位置的字符，支持负索引
const str = 'hello';
var a=str.at(1) 
var b=str.at(-1) 
console.log(a,b)