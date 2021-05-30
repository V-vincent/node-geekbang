const glob = require('glob');

// 阻塞 I/O 的调用方式
// var res = null;
// console.time('glob');
// res = glob.sync(__dirname + "/**/*");
// console.timeEnd('glob'); // 花费了 36.73ms
// console.log(res)

// 非阻塞 I/O 的调用方式
var result = null;
console.time('glob');
glob(__dirname + '/**/*', function(err, res) {
  result = res;
  // console.log(result);
  console.log('get result')
})
console.timeEnd('glob'); // 花费了 2.552ms
// IO完成之前还可以做别的事
console.log(1 + 1);