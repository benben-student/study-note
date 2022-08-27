//父命名空间
namespace Components {

    //子命名空间
    export namespace SubComponents {
        export class Test { }
    }

    export class Header {
        constructor() {
            const ele = document.createElement("div")
            ele.innerText = "This is Header"
            document.body.appendChild(ele)
        }
    }

    export class Content {
        constructor() {
            const ele = document.createElement("div")
            ele.innerText = "This is Header"
            document.body.appendChild(ele)
        }
    }

    export class Footer {
        constructor() {
            const ele = document.createElement("div")
            ele.innerText = "This is Header"
            document.body.appendChild(ele)
        }
    }

}