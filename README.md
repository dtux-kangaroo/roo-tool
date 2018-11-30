
### roo-tool
袋鼠云前端工具函数
#### Install
```
npm install roo-tool
```
#### 使用
```
<script src="/path/to/roo-tool.js">
//或
</script><script src="/path/to/roo-tool.min.js"></script>
```
####Package Managers
JavaScript RooTool supports npm and yarn under the name roo-tool.
Module Loaders
####Module Loaders
JavaScript RooTool can also be loaded as an AMD, CommonJS or ES6 module.
#### 集成模块
集成npm第三方依赖包，包含其所有功能。
```
js-cookie 
urijs
```
### Basic Usage

```
cosnt {LocalDb,URI,Cookie,Tool} from 'roo-tool';
localDb.set('dux','nblt');
localDb.get('dux');
localDb.clear();

Cookies.set('name', 'value', { path: '' });
Cookies.remove('name'); // fail!
Cookies.remove('name', { path: '' }); // removed!

var url = new URI();
// return http://smoothprogramming.com/tutorials/get-set-query-string-values-from-url-using-uri-js
// This is equivalent to window.location.href command in js.


url = new URI("http://www.smoothprogramming.com:80/tutorials/get-set-query-string-values-from-url-using-uri-js.html");
// Sets URL to http://www.smoothprogramming.com:80/tutorials/get-set-query-string-values-from-url-using-uri-js.html

url;
// return "http://www.smoothprogramming.com:80/tutorials/get-set-query-string-values-from-url-using-uri-js.html"

url.protocol());
// return "http"

url.origin();
// return "http://www.smoothprogramming.com:80"

url.hostname());
// return "www.smoothprogramming.com"

url.host());
// return "www.smoothprogramming.com:80"

url.port());
// return "80"

url.path());
// return "/tutorials/get-set-query-string-values-from-url-using-uri-js.html"

url.directory());
// return "/tutorials"

url.filename());
// return "get-set-query-string-values-from-url-using-uri-js.html"
```
更多URI及Cookie的信息请查看
Cookie操作相关api：https://www.npmjs.com/package/js-cookie
URI操作相关apI: https://www.npmjs.com/package/urijs
*****
#### localDb.js相关API

方法|说明|参数| 返回值
--| : -- : | : -- :| -- :
set|按key存贮数据value到localStorage|(key,value),key存贮数据的唯一标识,value 所要存贮的数据|null
get|通过key从localStorage获取数据|key(获取数据的可以标识)|null/string/object
clear|清空localStorage|-|-
*****
##### Tool.js相关API
方法|说明|参数| 返回值
--| : -- : | : -- :|-- :
getDocumentTop | 获取文档高度 | 无 |number
getWindowHeight| 可视窗口高度 | 无 |number
getScrollHeight| 滚动条滚动高度 | 无 |number
checkURLExist| 校验Url的有效性 | url |bool
getObjectURL| 自定义上传事件获取文件URl方法 | file |string
getStrlen| 计算字符串长度(英文占1个字符，中文汉字占2个字符) | string |number
isJSONStr| 判断是否是JSON string | string |bool
isPhoneNumber| 校验手机号格式 | string |bool
trim| 去除空串 | string |string
####Changelog

moved to Changelog
####如果封装好更加好用的方法函数，欢迎联系补充
 <linhe@dtstack.com>
