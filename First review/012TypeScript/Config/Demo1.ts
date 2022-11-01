//类型保护

interface Waiter {
    anjiao: boolean;
    say: () => {}
}

interface Teacher {
    anjiao: boolean;
    skill: () => {}
}
//联合类型

//第一种断言的方式 as
// function judgeWho(animal: Waiter | Teacher) {
//     if (animal.anjiao) {
//         (animal as Teacher).skill()
//     } else {
//         (animal as Waiter).say()
//     }
// }

//第二种断言的方式 in
// function judgeWhoTow(animal: Waiter | Teacher) {
//     if ("skill" in animal) {
//         animal.skill()
//     } else {
//         animal.say()
//     }
// }

//typeof 方法的类型保护
// function add(first: string | number, second: string | number) {
//     if (typeof first === "string" || typeof second === "string") {
//         return `${first}${second}`;
//     }
//     return first + second;
// }


class NumberObj {
    count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
    if (first instanceof NumberObj && second instanceof NumberObj) {
        return first.count + second.count;
    }
    return 0;
}