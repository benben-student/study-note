//数组类型注解的方法
const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ["a", "b", "c"]
const undefinedArr: undefined[] = [undefined, undefined]
//有数字有字符串
const arr: (number | string)[] = [1, "string", 2]


//类型别名
type Lady = { name: string, age: number }
//class的方式
class Madam {
    name: string;
    age: number;
}

//有对象类型的数据
const xiaoJieJies: Lady[] = [
    { name: "刘英", age: 18 },
    { name: "大脚", age: 18 }
]