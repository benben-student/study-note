"use strict";
var Components;
(function (Components) {
    class Header {
        constructor() {
            const ele = document.createElement("div");
            ele.innerText = "This is Header";
            document.body.appendChild(ele);
        }
    }
    Components.Header = Header;
    class Content {
        constructor() {
            const ele = document.createElement("div");
            ele.innerText = "This is Header";
            document.body.appendChild(ele);
        }
    }
    Components.Content = Content;
    class Footer {
        constructor() {
            const ele = document.createElement("div");
            ele.innerText = "This is Header";
            document.body.appendChild(ele);
        }
    }
    Components.Footer = Footer;
})(Components || (Components = {}));
var Home;
(function (Home) {
    class Page {
        constructor() {
            new Components.Header();
            new Components.Content();
            new Components.Footer();
        }
    }
    Home.Page = Page;
})(Home || (Home = {}));
//让编译后的文件综合到一个文件里
//"outFile": "./build/page.js",
//不过需要把 "module": "commonjs",改为 "module": "amd",
//这样html里就可以只引入一个文件
//<script src="./build/page.js"></script>
