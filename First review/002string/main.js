// 1.字符串js的字符串是用''或""括起来的字符表示
//     (1)字符串内有',""可以用\字符来转义
// console.log('i\'am\'ok')
// \n 表示换行，\t 表示制表符，\\表示的字符是\
// console.log('a \n bc')
// console.log('我在\t这')
// console.log('\\')


//     (2)多行字符串，Esc下方按钮``
// console.log(`嘿嘿
//    我在这`)


//     (3)可以用 + 把多行字符串连接起来使用
// var name = 'benebn'
// var age = 20
// var message = '嘿'
// console.log(message + name + '你今年' + age + '岁了')


//    （4）可以用.lenght方法获取字符串的长度
// var a = 'hello world'
// console.log(a.length)


//     (5)可以用类似Array的下标操作来获取字符串某个指定位置的字符
// var b = 'hh ,wzz'
// var aa = b[0]
// var bb = b[1]
// var cc = b[5]
// console.log(aa, bb, cc)
// 字符串不可变，对字符串某个索引赋值无效果也无报错
// var e = 'text'
// e[0] = 'e'
// console.log(e)


//     (6) toUpperCase() 会把一个字符串全变为大写，但不会改变原字符串而是返回新的字符串
// var ss = 'HEllo world'
// var sss = ss.toUpperCase()
// console.log(sss)
// toLowerCase()把一个字符串全变为小写
// var cccc = ss.toLowerCase()
// console.log(cccc)


//     (7)indexOf() 会搜索指定字符串出现的位置
// var ssss = 'hello i am here'
// var ac = ssss.indexOf('here')//指定字符串第一个字符所在的位置
// var ad = ssss.indexOf('ii')//找不到则返回-1
// console.log(ac, ad)


//    （8）substring 会返回指定索引的区间的子串
// var qq = 'i am here,come here'
// var a = qq.substring(0, 1)
// var b = qq.substring(1, 4)
// var c = qq.substring(2, 6)
// var e = qq.substring(7)
// console.log(a, b, c, e)
//substring(a,b)若a=0，b不等0，则从索引a(0)开始到b(结束)，不包括b
                //若a不等0，则从索引b开始到结束（默认b<a）
                