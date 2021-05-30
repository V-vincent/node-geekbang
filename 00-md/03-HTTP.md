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

### HTTP 服务框架：Express
要了解一个框架，最好的方法是
- 了解它的关键功能
- 推导出它要解决的问题是什么

安装：
```
npm i express
```
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
但是 `express` 的 `next()` 对异步不太友好，只适合执行同步代码。

### HTTP 服务框架：koa
`koa` 就是为了解决 `express` 的一些设计缺陷而诞生的。它的中间件可以通过 `asyncfunction` 来编写，`await next()` 可以中断中间件的执行，等到后面所有中间件执行完之后再执行，通过 `await next()` 来实现洋葱模型。还有一个特点是 `request` 和 `response` 的处理，这两者都挂载在 `ctx` 上使用，返回的内容也可以通过直接赋值来使用：`ctx.response.body = fs.createStream('really_large.xml')`。
并且 `koa` 把路由功能砍掉了，它是通过中间件来实现的，是一种微内核的极简思路。
安装：
```
npm i koa koa-mount
```

核心功能：
- 比 `Express` 更极致的 `request` / `response` 简化
  - `ctx.status = 200`
  - `ctx.body = 'hello world'`
-  使用 `async function` 实现的中间件
  - 有“暂停执行”的能力
  - 在异步的情况下也符合洋葱模型
- 精简内核，所有额外功能都移到中间件里实现。

`Express` vs `Koa`
- `Express` 门槛更低，`Koa` 更强大优雅。
- `Express` 封装更多东西，开发更快速，`Koa` 可定制型更高。

孰“优”孰“劣”？
- 框架之间其实没有优劣之分
- 不同的框架有不同的适用场景