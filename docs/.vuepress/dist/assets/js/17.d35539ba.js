(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{518:function(t,s,a){"use strict";a.r(s);var n=a(1),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"快速配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速配置","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速配置")]),t._v(" "),a("ul",[a("li",[t._v("这个路由的注册方式基本没有改变过，就增加了一个非菜单路由的注册")])]),t._v(" "),a("h4",{attrs:{id:"_1-src-文件夹的-router-basic-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-src-文件夹的-router-basic-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 1. src 文件夹的 router/basic.js")]),t._v(" "),a("ul",[a("li",[t._v("注册基础路由,不用控制权限的路由都在这里注册，如登陆,注册，公共页面等等界面，这个是正常的路由注册文件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@layout/login'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("这里是控制权限的路由配置，颗粒度到某个按钮")])]),t._v(" "),a("h4",{attrs:{id:"_2-src-文件夹的-router-dynamic-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-src-文件夹的-router-dynamic-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.src 文件夹的 router/dynamic.js")]),t._v(" "),a("p",[a("strong",[t._v("权限路由是动态加载的")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("只有一级菜单的路由注册")]),t._v(" "),a("ol",[a("li",[t._v("id 为后端发送的菜单字符串进行匹配的关键词")]),t._v(" "),a("li",[t._v("data 是正常的路由注册内容")]),t._v(" "),a("li",[t._v("redirect 必须写上，统一重定向到完整路径 "),a("code",[t._v("/home/index")])]),t._v(" "),a("li",[t._v("children 路径统一为 index")])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("\n   "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/town'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'town'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//这个默认不变的主界面组件（头部，侧边栏等）")]),t._v("\n      redirect"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" to "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/town/index"')]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'town_index'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//")]),t._v("\n        component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Town"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//对应中间区域的组件")]),t._v("\n        children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("有二级菜单的路由注册")]),t._v(" "),a("ol",[a("li",[t._v("id 为后端发送的菜单字符串进行匹配的关键词")]),t._v(" "),a("li",[t._v("data 是正常的路由注册内容")]),t._v(" "),a("li",[t._v("redirect 必须写上，统一重定向到完整路径 "),a("code",[t._v("/form/form1")])]),t._v(" "),a("li",[t._v("父子路由分开写，不要嵌套到"),a("code",[t._v("children")]),t._v("里面，这个很重要，这个文件是要和后端给的菜单字符串进行对比合并成真正的路由，不要写成"),a("strong",[t._v("树形结构")]),t._v("，要写成"),a("strong",[t._v("链式结构")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//父组件注册")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'/form'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'form'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Layout"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  redirect"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" to "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/form/form1"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//重定位要写上，可以重定位到第一个也可以第二个")]),t._v("\n  children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token comment"}},[t._v("//这里的不写")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token comment"}},[t._v("//form的两个子路由")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("3")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'form1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'form1'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Form1"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("id"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("4")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'form2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'form2'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Form2"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h4",{attrs:{id:"_3-src-文件夹的-router-nomenu-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-src-文件夹的-router-nomenu-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 3.src 文件夹的 router/nomenu.js")]),t._v(" "),a("p",[a("em",[t._v("（例子可以看底包侧边栏的表格=》【to other URL】 ）")])]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("受到权限限制的非菜单栏路由")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("fid")]),t._v("为相应的菜单栏的 id 比如菜单栏的表格 id 为 9，对应的 fid 为 9")]),t._v(" "),a("li",[a("code",[t._v("meta")]),t._v(" 元信息写上"),a("code",[t._v("title")]),t._v("，即 tag 标签要显示的文字")]),t._v(" "),a("li",[t._v("注意路径不用"),a("code",[t._v("\\")])])])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    fid"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token number"}},[t._v("9")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"other"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//要注意不用/")]),t._v("\n        name"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"other"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        component"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'@/views/other'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        meta"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'title'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'其他'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{attrs:{class:"token comment"}},[t._v("//很重要")]),t._v("\n        children"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"mock-菜单权限字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mock-菜单权限字符串","aria-hidden":"true"}},[t._v("#")]),t._v(" Mock-菜单权限字符串")]),t._v(" "),a("h4",{attrs:{id:"导航权限路由-src-文件夹的-mock-login-js-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导航权限路由-src-文件夹的-mock-login-js-文件","aria-hidden":"true"}},[t._v("#")]),t._v(" 导航权限路由 src 文件夹的 mock/login.js 文件")]),t._v(" "),a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("需配置")]),t._v(" "),a("p",[t._v("用 mock 直接模拟获取权限菜单，有后端数据时直接修改请求地址即可，导航权限数据格式如下:\n记得是个 json 字符串")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("/*json模拟后端传递数据,后端传json标题来控制权限,决定菜单栏显示内容的地方*/")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" json "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token template-string"}},[a("span",{attrs:{class:"token string"}},[t._v('`[\n    {//一级\n        "id": 1,\n        "title": "首页",\n        "child": [],\n        "icon": "dc-icon-iospaperoutline"\n    },\n    {//有二级的\n        "id": 2,\n        "title": "表单",\n        "icon": "dc-icon-iosbolt",\n        "child": [\n            {\n                "id": 3,\n                "title": "表单组件一",\n                "icon": "dc-icon-androidexi",\n                "child": []\n            },\n            {\n                "id": 4,\n                "title": "表单组件二",\n                "icon": "dc-icon-database",\n                "child": []\n            }\n        ]\n    }\n]`')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("到了这里，基本就可以正常使用了，下面是路由相关底层文件的说明，不看不影响使用")])]),t._v(" "),a("h2",{attrs:{id:"补充说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充说明","aria-hidden":"true"}},[t._v("#")]),t._v(" 补充说明")]),t._v(" "),a("h4",{attrs:{id:"_1-src-文件夹的-library-router-dyroute-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-src-文件夹的-library-router-dyroute-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 1.src 文件夹的 library/router/dyroute.js")]),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("基本不用改变")]),t._v(" "),a("p",[t._v("动态添加路由封装函数在这个文件，基本不用改变，可不看，需要动态添加路由的地方，引起这个文件，导出 addDynamic 函数")])]),t._v(" "),a("ol",[a("li",[t._v("作用")])]),t._v(" "),a("ul",[a("li",[t._v("将后端给的菜单字符串和本地注册的路由表进行合并形成真正的路由表")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("思路")])]),t._v(" "),a("ul",[a("li",[t._v("将后端给的"),a("a",{attrs:{href:"#mock-%E8%8F%9C%E5%8D%95%E6%9D%83%E9%99%90%E5%AD%97%E7%AC%A6%E4%B8%B2"}},[t._v("菜单字符串")]),t._v("存于 sessionstorage,key 值为"),a("code",[t._v("Getjson")])]),t._v(" "),a("li",[t._v("addDynamic 函数将获取的菜单字符串用双层循环进行遍历匹配 id，如果 id 相同则将路由信息 push 进路由变量"),a("code",[t._v("routerString")]),t._v("和菜单栏变量"),a("code",[t._v("nav")])]),t._v(" "),a("li",[t._v("用 route 动态添加路由的 api 将处理好的"),a("code",[t._v("routerString")]),t._v(" push 进去")]),t._v(" "),a("li",[t._v("用 export 抛出一个 promise 对象，解决异步问题，等路由加载完毕再执行路由跳转或者其他业务逻辑")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("//路由加载完毕，目前这个函数在login.js和main.js这两个地方使用")]),t._v("\n"),a("span",{attrs:{class:"token function"}},[t._v("addDynamic")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("json"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("then")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token comment"}},[t._v("//业务代码")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$message"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("success")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"登录成功!"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$router"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("replace")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"/home/index"')]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[a("p",[t._v("用法")]),t._v(" "),a("ul",[a("li",[t._v("在需要动态加载权限路由的地方"),a("code",[t._v('import {addDynamic} from "@/library/router/dyroute.js";')])]),t._v(" "),a("li",[t._v("在 sessionStorage 或者请求获取菜单字符串 json,"),a("code",[t._v("addDynamic(json).then(()=>{//业务代码})")])])]),t._v(" "),a("p",[a("em",[t._v("后期改成 addDynamic 递归写法，包括左侧菜单栏，上次测试过 element 的菜单栏用递归写法，收缩时有 bug，在 GitHub 提了 issue，看他们是否解决了")])])])]),t._v(" "),a("h4",{attrs:{id:"_2-src-文件夹的-library-router-index-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-src-文件夹的-library-router-index-js","aria-hidden":"true"}},[t._v("#")]),t._v(" 2.src 文件夹的 library/router/index.js")]),t._v(" "),a("h5",{attrs:{id:"作用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#作用","aria-hidden":"true"}},[t._v("#")]),t._v(" 作用")]),t._v(" "),a("ol",[a("li",[t._v("注册基础路由")]),t._v(" "),a("li",[t._v("添加路由守卫")])]),t._v(" "),a("ul",[a("li",[t._v("判断是否未登陆页，是则清除缓存，否则进入下一判断")]),t._v(" "),a("li",[t._v("判断是否登陆"),a("code",[t._v("isLogin")]),t._v(" 未登陆，重定位到登录页，并清除缓存")]),t._v(" "),a("li",[t._v("已登陆：判断是否为未注册路由，是则重定位到 404 页面，否则")]),t._v(" "),a("li",[t._v("判断是否为首页，是则直接进入页面，否则")]),t._v(" "),a("li",[t._v("处理 Tag 和面包屑，判断是否已经存在当前路由的"),a("code",[t._v("Tag")]),t._v("，已经存在则修改面包屑并进入页面")]),t._v(" "),a("li",[t._v("否则添加"),a("code",[t._v("Tag")]),t._v(",修改面包屑并进入页面\n"),a("em",[t._v("在合并路由过程中，meta 元信息已经将二级路由的上级路由信息存入字段 father 中，为了解决面包屑问题")])])])])}],!1,null,null,null);o.options.__file="README.md";s.default=o.exports}}]);