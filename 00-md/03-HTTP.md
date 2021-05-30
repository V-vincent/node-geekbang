## HTTP 服务
### 什么是 HTTP 服务？
HTTP 协议是什么？
- 一个应用层协议，超文本协议，一个在计算机世界里专门在两点之间传输文字、图片、音频、视频等超文本数据的约定和规范。

一个网页请求，包含两次 HTTP 包交换：
- 浏览器向 HTTP 服务器发送请求 HTTP 包
- HTTP 服务器向浏览器返回 HTTP 包

HTTP 服务要做什么事情?
- 解析进来的 HTTP 请求报文
- 返回对应的 HTTP 返回报文

### 实现一个简单的 HTTP 服务器
```js
const http = require('http')

http.createServer(function (request, response) {
  response.writeHead(200);
  response.end('hello')
}).listen(3000)
```
推荐一个好用的 npm 模块：`http-server`。