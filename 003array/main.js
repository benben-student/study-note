//数组可以包含任意数据类型
//(1)数组和字符串一样可以用.length方法获取数组的长度
// var arr=[1,2,3.14,'21',null,true]
// console.log(arr.length)


// (2)可以直接给Array增加lenght值，但新值会导致Array的长度发生变化
// var arr=[1,2,3]
// console.log(arr.length)
// arr.length=5
// console.log(arr)
// arr.length=2
// console.log(arr)


// (3)可以把索引对应的元素修改为新的值
// var arr=[1,2,3]
// arr[1]='2'
// console.log(arr)


//(4)如果索引值超过了数组长度会增加数组长度,多出来的元素为空
// var arr=[1,2,3]
// arr[5]=1
// console.log(arr)


//(5)数组也可以使用indexOf()方法
// var arr=[1,2,3,4]
// var a=arr.indexOf(4)
// var b=arr.indexOf(0)
// var c=arr.indexOf(2)
// console.log(a,b,c)//未找到的元素返回-1//


//(6)数组的 slice() 方法和string的substring()方法类似，都是截取部分元素返回新的数组或
// var arr=[1,2,3,4,5,6,7]
// var a=arr.slice(0,2)//从0~2不包括2
// var b=arr.slice(0,6)//从0~6不包括6
// var c=arr.slice(4)//从4开始到最后
// console.log(a,b,c)


//(7)push()和pop()方法，前者是向数组末尾添加若干元素后者则是删除最后一个元素
// var arr=[1,2,3]
// var a=arr.push('1','2')
// console.log(arr)
// var b=arr.pop()
// console.log(arr)


//(8)unshift()和shift()方法，前者往数组开头添加若干元素，后者则把第一个元素删掉
// var arr=[1,2,3,4]
// var a=arr.unshift('1','2')
// console.log(arr)
// var b=arr.shift()
// console.log(arr)


//(9)sort元素可以对当前数组进行默认排序
// var arr = [3, 4, 1, 'b', 6, 7, 'a', true, 9, 8, null]
// var arr1 = [2, 1, 4, 'd', '9', null, 'a', '3', '1', true]
// var a = arr.sort()
// var b = arr1.sort()
// console.log(a, b)


//(10)reverse()方法会把整个数组内元素给反转过来
// var arr=[1,2,3,4,5,6,7]
// var a=arr.reverse()
// console.log(a)


//-------------------------------------------------------------------------------------------------------重点
//(11)splice()方法 语法：let newArr=arr.splice(起始索引,删除的个数,新增元素1,2...,)并返回删除的元素
//   let arr1=[1,2,3,4,5,6,7,8,9]
// //  //1.let result1=arr1.splice(1)//删除从一开始的所有元素
// //  //console.log(arr1,result1)
// //  //2.let result2=arr1.splice(-2)//删除最后两个元素
// //  //console.log(arr1,result2)
// //  //3.let result3=arr1.splice(1,3)//从索引1开始删除三个元素
// //  //console.log(arr1,result3)
//     //4.let result4=arr1.splice(1,3,'新增元素1','新增元素2')//在做完result3之后在索引1之前增加两个元素
//     //console.log(arr1,result4)
//     arr2=['1','2','3']
//     let result5=arr1.splice(0,0,...arr2)//将arr2合并到arr1
//     console.log(arr1)
//-----------------------------------------------------------------------------------------------------------------


//(12)concat()方法把当前的数组和另一个数组连接起来并返回一个新的数组
// var arr1=['A','B','C']
// var arr2=arr1.concat([1,2,3])
// console.log(arr1,arr2)


//(13)join()方法把当前数组每个元素都用指定的字符串连接起来返回新连接的字符串
// var arr=['1','2','3','4']
// var a=arr.join('-')
// console.log(a)     //join('')  ''中的字符可任意，-，|，*等
// var arr1=['q','s','d','f','g']
// var b=arr1.join('|')
// console.log(b)
//若数组内元素不是字符串，则会转化为字符串进行连接
var d=[1,2,3,4,'a','b','c']
var g=d.join('-');console.log(g)//1-2-3-4-a-b-c


//(14)多维数组  若数组内某个元素也为数组则可以形成多维数组
var arr=[[1,2,3,4],[5,6,7],8,9]
var a=arr[0][1]
var b=arr[1][2]
console.log(a,b)