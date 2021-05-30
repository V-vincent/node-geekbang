console.log('hello world')

// Node 和 Chrome 的全局变量基本上是一样的
console.log(Date)
console.log(Math)

console.log(setTimeout)
console.log(setInterval)
// console.log(requestAnimationFrame) // 微任务：浏览器渲染的下一帧，需要浏览器环境，Node 是没有的
console.log(setImmediate) // 不过 Node 有一个 setImmediate 是类似的功能函数
// console.log(document) // 这个浏览器中的对象， Node 也是没有的

// Node 中特有的全局变量
console.log(__dirname) // 当前运行脚本所在位置
console.log(__filename) // 当前脚本目录所在位置

// 进程对象：记载了 Node.js 运行的一些信息，比如 Node 的 version（版本号）、platform（操作系统）、env（环境变量）、argv（用户敲击的进程，命令行会用到）
console.log(process)