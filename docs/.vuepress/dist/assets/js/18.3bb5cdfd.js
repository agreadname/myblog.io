(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{519:function(t,a,s){"use strict";s.r(a);var n=s(1),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"通用规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 通用规范")]),t._v(" "),s("h2",{attrs:{id:"命名规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命名规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 命名规范")]),t._v(" "),s("h4",{attrs:{id:"_1-尽量以有意义的单词词组命名，避免拼音命名，单词小写，多单词用下划线分隔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-尽量以有意义的单词词组命名，避免拼音命名，单词小写，多单词用下划线分隔","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.尽量以有意义的单词词组命名，避免拼音命名，单词小写，多单词用下划线分隔")]),t._v(" "),s("h4",{attrs:{id:"_2-项目名：同（1），以dc开头，下划线加项目英文名称-如dc-bulesky"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-项目名：同（1），以dc开头，下划线加项目英文名称-如dc-bulesky","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.项目名：同（1），以dc开头，下划线加项目英文名称, 如dc_bulesky")]),t._v(" "),s("h4",{attrs:{id:"_3-目录名：src根目录基本不变，pages内各组件目录名同（1）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-目录名：src根目录基本不变，pages内各组件目录名同（1）","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.目录名：src根目录基本不变，pages内各组件目录名同（1）")]),t._v(" "),s("h4",{attrs:{id:"_4-js文件命名：同（1），以功能模块命名，如，-组件example-》example-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-js文件命名：同（1），以功能模块命名，如，-组件example-》example-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 4.js文件命名：同（1），以功能模块命名，如， 组件example=》example.js")]),t._v(" "),s("h4",{attrs:{id:"_5-样式文件命名：同（1）和（4），-如，组件example-》example-scss"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-样式文件命名：同（1）和（4），-如，组件example-》example-scss","aria-hidden":"true"}},[t._v("#")]),t._v(" 5.样式文件命名：同（1）和（4）， 如，组件example=》example.scss")]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),s("p",[t._v("(1)  公共基础样式，只能"),s("em",[t._v("覆盖")]),t._v("、不能直接修改；")]),t._v(" "),s("p",[t._v("(2)  主框架的样式文件，以DC_ 为开头，以做区分及避免冲突；")]),t._v(" "),s("p",[t._v("(3)  需要通过全局更改主框架的样式文件时建议用样式穿透，如 dc_main /deep/ .el-select{//.....}")])]),t._v(" "),s("h2",{attrs:{id:"语法规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#语法规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 语法规范")]),t._v(" "),s("h4",{attrs:{id:"_1-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-html","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.HTML")]),t._v(" "),s("table",[s("tr",[s("td",[t._v("在属性上，使用双引号，不要使用单引号")])]),t._v(" "),s("tr",[s("td",[t._v("不要在自动闭合标签结尾处使用斜线")])]),t._v(" "),s("tr",[s("td",[t._v("网站首页及其子页面，都需要加上description标签和keyword标签。")])])]),t._v(" "),s("h4",{attrs:{id:"_2-javascript代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-javascript代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.Javascript代码")]),t._v(" "),s("table",[s("tr",[s("td",[t._v("一条js语句独占一行，且必须以“;”标识语句结束，如：a=0;")])]),t._v(" "),s("tr",[s("td",[t._v("变量名、方法名小驼峰，常量大写所有单词，专有名词除外；")])]),t._v(" "),s("tr",[s("td",[t._v("命名要体现变量、函数的功能")])])]),t._v(" "),s("h4",{attrs:{id:"_3-css代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-css代码","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.css代码")]),t._v(" "),s("p",[t._v("一.常用的CSS命名参考（仅为参考，注意类名的语义性和加上注释即可）")]),t._v(" "),s("ol",[s("li",[t._v("页面结构："),s("br"),t._v("\na.\t容器： container\nb.\t页头：header\nc.\t内容：content/container\nd.\t页面主体：main\ne.\t页尾：footer\nf.\t导航：nav\ng.\t侧栏：sidebar\nh.\t栏目：column\ni.\t页面外围控制整体布局宽度：wrapper\nj.\t左右中：left right center")]),t._v(" "),s("li",[t._v("导航："),s("br"),t._v("\na.\t导航：nav\nb.\t主导航：mainnav\nc.\t子导航：subnav\nd.\t顶导航：topnav\ne.\t边导航：sidebar\nf.\t左导航：leftsidebar\ng.\t右导航：rightsidebar\nh.\t菜单：menu\ni.\t子菜单：submenu\nj.\t标题：title\nk.\t摘要：summary")]),t._v(" "),s("li",[t._v("功能："),s("br"),t._v("\na.\t标志：logo\nb.\t广告：banner\nc.\t登陆：login\nd.\t搜索：search\ne.\t功能区：shop\nf.\t标题：title\ng.\t状态：status\nh.\t按钮：btn\ni.\t滚动：scroll\nj.\t标签页：tab\nk.\t文章列表：list\nl.\t提示信息：msg\nm.\t当前的：current\nn.\t小技巧：tips\no.\t图标：icon")])]),t._v(" "),s("p",[t._v("二 css命名方法")]),t._v(" "),s("blockquote",[s("p",[t._v("dc-组件名-语义名，如dc-login-header"),s("br"),t._v("\ndc-组件名-语义名-状态,如dc-login-button-active")])]),t._v(" "),s("h2",{attrs:{id:"组件规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件规范","aria-hidden":"true"}},[t._v("#")]),t._v(" 组件规范")]),t._v(" "),s("p",[t._v("例，组件exam1"),s("br"),t._v("\n1.vue文件:")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("red"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("模板"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" \n        "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("     \n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token script language-javascript"}},[t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Exam1 "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'./index.js'")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" Exam1"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("style")]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{attrs:{class:"token attr-value"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scss"),s("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{attrs:{class:"token attr-name"}},[t._v("scoped")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token style language-css"}},[t._v("\n        @import  "),s("span",{attrs:{class:"token string"}},[t._v('"./index.scss"')]),t._v("\n    ")]),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("style")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("2.js文件")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("GetData"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'@/api/exam1.js'")]),t._v("\n "),s("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("data")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v("'课程资源'")]),t._v("\n    "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{attrs:{class:"token function"}},[t._v("created")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("3.scss文件"),s("br"),t._v("\n规范同语法规范的 "),s("a",{attrs:{href:"#%E8%AF%AD%E6%B3%95%E8%A7%84%E8%8C%83"}},[t._v("css代码")])])])}],!1,null,null,null);e.options.__file="README.md";a.default=e.exports}}]);