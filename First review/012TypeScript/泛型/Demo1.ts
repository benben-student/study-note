//泛型

//(1)函数里方法的泛型使用
function join  <JS>  (first:JS,second:JS){
    return `${first}${second}`
}

// <> 内数据类型为什么后面 () 里的数据类型就只能是<>里的类型
// join<number>(1,2)
join  <string>  ("1","2")


//(2)泛型中数组的使用   泛型<>里常用T表示
function myFun<ANY>(params:ANY[]){ //另一种写法
    return params;                 //function myFun<ANY>(params:Array<ANY>){}
}

myFun<string>(["123","234"])


//多个泛型的使用
function joins <T,P> (first:T,second:P){
    return `${first}${second}`
}

joins <string,number> ("1",2)
