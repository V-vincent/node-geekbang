## RPC 调用
### Remote Procedure Call（远程过程调用）
和 `Ajax` 有什么相同点？
- 都是两个计算机之间的网络通信
- 需要双方约定一个数据格式

和 `Ajax` 有什么不同点？
- 不一定使用 DNS 作为寻址服务
- 应用层协议一般不使用 HTTP
- 基于 TCP 或 UDP 协议

寻址/负载均衡
- `Ajax`：使用 DNS 进行寻址
- RPC：使用特有服务进行寻址

TCP 通信方式：RPC 有多种通信方式
- 单工通信：只能一端往另一端发送信息（单向通信）。
- 半双工通信：同一时间内，只有一端往另一端发送信息，可以看做是轮番单工通信。
- 全双工通信：两端可以随时收发通信。

二进制协议
- 更小的数据包体积
- 更快的编解码速率

### Node.js Buffer 编解码二进制数据包
安装：
```js
npm i protocol-buffers
```
- 大小端问题
  - 几个 `Byte` 里，高位与低位的编排顺序不同。
- 处理方法与 `string` 接近
  - 使用 `concat` 而不是 `+` 来避免 `utf-8` 字符拼接问题。
- `Protocol Buffer`
  - Google 研发的二进制协议编解码库
  - 通过协议文件控制 `Buffer` 的格式
    - 更直观
    - 更好维护
    - 更便于合作

### Node.js net 搭建多路复用的 RPC 通道
- 单工/半双工的通信通道搭建
- 全双工的通信通道搭建
  - 关键在于应用层协议需要有标记包号的字段
  - 处理以下情况，需要有标记包长的字段
    - 粘包
    - 不完整包
  - 错误处理