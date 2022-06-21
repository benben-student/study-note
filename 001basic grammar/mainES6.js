// //(1)let命令 类似于var，但所声明的变量只在let命令所在的代码块中有效
// {
//     let a=1
//     var  b=2
// }
// //console.log(a)
// console.log(b)
    //在for里用var和let的区别就很大了
    /*用var*/
    var a=[]
    for(let i=0;i<10;i++){
        a[i]=function(){
            console.log(i)
        }
    }; console.log(a[6]()) //10
    /*用var*/
    var b=[]
    for(var j=0;j<10;j++){
        b[j]=function(){
            console.log(j)
        }
    };console.log(b[6]())  //6

