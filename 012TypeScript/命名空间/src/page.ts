namespace Home {

    export class Page {
        constructor() {
            new Components.Header()
            new Components.Content()
            new Components.Footer()
        }
    }

}




//让编译后的文件综合到一个文件里
//"outFile": "./build/page.js",
//不过需要把 "module": "commonjs",改为 "module": "amd",

//这样html里就可以只引入一个文件
//<script src="./build/page.js"></script>