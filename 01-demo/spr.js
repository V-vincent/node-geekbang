// 石头剪刀布游戏
// 命令行命令：node spr.js rock
// argv 可以获取到命令行 node 后面输入的行为
var playerAction = process.argv[process.argv.length - 1];
console.log(playerAction)
if (playerAction != 'rock' && playerAction != 'paper' && playerAction != 'scissor') {
  console.log('请输入rock或paper或scissor')
} else {
  // 计算电脑出的东西，电脑随机生成rock或paper或scissor
  var computerAction;
  var random = Math.random() * 3;
  if (random < 1) {
    console.log('电脑出了石头')
    computerAction = 'rock'
  } else if (random > 2) {
    console.log('电脑出了剪刀')
    computerAction = 'scissor'
  } else {
    console.log('电脑出了布')
    computerAction = 'paper'
  }

  if (computerAction === playerAction) {
    console.log('平局')
  } else if (
    (computerAction == 'rock' && playerAction == 'scissor') ||
    (computerAction == 'scissor' && playerAction == 'paper') ||
    (computerAction == 'paper' && playerAction == 'rock')
  ) {
    console.log('你输了')

  } else {
    console.log('你赢了')
  }
}