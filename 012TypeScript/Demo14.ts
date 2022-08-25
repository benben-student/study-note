class Person {
    //readonly的作用  外部的不能修改数据
    public readonly _name: string
    constructor(name: string) {
        this._name = name
    }
}

const person = new Person("js")

console.log(person._name);
