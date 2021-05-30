// var playerAction = process.argv[process.argv.length - 1];
// console.log(playerAction);
// const game = require('./game.js')
// const result = game(playerAction);
const game = require('./game.js')
var winCount = 0;
// 获取进程的标准输入
process.stdin.on('data', (buffer) => {
  // 回调的是 buffer，需要处理成 string
  const action = buffer.toString().trim();
  const result = game(action);
  if (result == 1) {
    winCount++
    if (winCount == 3) {
      console.log('我不玩儿了！哼！');
      process.exit();
    }
  }
})