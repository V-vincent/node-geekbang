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

### Express
要了解一个框架，最好的方法是
- 了解它的关键功能
- 推导出它要解决的问题是什么
官网地址：`https://www.npmjs.com/package/express`
核心功能：`Features`
- 路由
- `request`/`response` 简化
  - `request`: `pathname`、`query` 等
  - `response`: `send()`、`json()`、`jsonp()` 等
- 中间件
  - 更好地组织流程代码
  - 异步会打破 Express 的洋葱模型

这些核心功能都是为了让我们更加方便、简洁地写出 HTTP 服务，大大减轻我们的开发负担；让我们快速上手开发。