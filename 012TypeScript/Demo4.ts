//type annotation 类型注解
//type inference 类型推断


//type annotation 类型注解
// let count: number;
// count = 123;

// let countInference = 123


//不用写类型注释的
// const one = 1
// const two = 2
// const three = one + two //自动判断类型，不用写


//需要写的，不能自动判断类型的
function getTotal(one: number, two: number){
    return one + two
}
const total = getTotal(1, 2)


//如果 ts 能自动分析变量类型，我们就什么也不需要做
//如果 ts 不能分析变量类型的话，我们就需要使用类型注解