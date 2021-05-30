console.log('start require');
var lib = require('./lib'); // 默认返回一个空对象
console.log('end require', lib);

// lib 引用和 “./lib.js” 里面的引用是同一个引用，可以修改里面的内容
lib.additional = "test";