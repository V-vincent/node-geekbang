## Node.js
### 什么是 Node.js？
官网的话：
- Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境。
- Node.js 使用了一个事件驱动、非阻塞式 I/O 的模型，使其轻量又高效。

在 Node.js 里运行 JavaScript 和在 Chrome 里运行 JavaScript 有什么不同？
- 其实，在 Node.js 里写 JS 和在 Chrome 里写 JS，几乎没有什么不一样。
那不一样在哪里呢？
- Node.js 没有浏览器 API，如 document、window 等；
- 加了很多的 Node.js API。

对于开发者来说，Node.js：
- 在 Chrome 里写 JavaScript 控制浏览器。
- Node.js 让我们用类似的方式，控制整个计算机。

### Node.js 能用来做什么？
- Web 服务，如腾讯视频
  - 搜索引擎优化 + 首屏速度优化 = 服务端渲染
  - 服务端渲染 + 前后端同构（前后端用同一套代码）
- 构建工作流，使用 Node.js 做 JS 构建工具，是最保险的选择。
  - 构建工具不会永远不出问题
  - 构建工具不会永远满足需求
- 可扩展性，大型应用需要给使用者自定义模块的能力。使用 Node.js 做复杂本地应用：
  - 可以利用 JS 的灵活性提供外部扩展；
  - JS 庞大的开发者基数让他们的灵活性得到利用
  
客户端应用 - twitch.tv
- 在已有网站的情况下需要新开发客户端应用。
- 用 Node.js 客户端技术（electron）实现，最大限度复用现有工程。

### 技术预研
- 分析要做的需求，找出技术难点
- 针对每个技术难点进行攻克 
BFF 层：Backend for Frontend
- 对用户侧提供 HTTP 服务
- 使用后端 RPC 服务