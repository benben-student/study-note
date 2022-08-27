//泛型在类中的使用

//普通写法
// class SelectGirl {
//     constructor(private girls: string[] | number[]) { }
//     getGirl(index: number): string | number {
//         return this.girls[index]
//     }
// }

// const selectGirl = new SelectGirl(["大脚", "刘英", "晓红"]);
// console.log(selectGirl.getGirl(1));


//泛型的写法（1）
// interface Girl {
//     name: string
// }

// class SelectGirl<T extends Girl> {
//     constructor(private girls: T[]) { }
//     getGirl(index: number): string {
//         return this.girls[index].name
//     }
// }

// //{}内必须写name属性
// const selectGirl = new SelectGirl([
//     { name: "大脚" },
//     { name: "刘英" },
//     { name: "晓红" },
// ]);
// console.log(selectGirl.getGirl(1));

//（2）
class SelectGirl<T extends number | string>{
    constructor(private girls: T[]) { }
    getGirl(index: number): T {
        return this.girls[index]
    }
}
const selectGirl = new SelectGirl<string>(["大脚", "刘英", "晓红"])
console.log(selectGirl.getGirl(1));
