console.log('this is lib');

// CommonJS 通过 exports 挂载变量
exports.hello = "world"
exports.add = function (a, b) {
  return a + b;
}
exports.obj = { hello: "Node" }

// setTimeout(() => {
//   console.log(exports)
// }, 1000)

// 默认是返回一个对象
// 但是也可以返回其它的类型
module.exports = function minus(a, b) {
  return a - b;
}