const fs = require('fs');
const express = require('express');

const game = require('./game');
let playerWinCount = 0; // 赢的次数

let playerLastAction = null;
let sameCount = 0; // 相同的次数

const app = express();

// 路由功能
// 通过app.get设定 /favicon.ico 路径的路由
// .get 代表请求 method 是 get，所以这里可以用 post、delete 等。这个能力很适合用于创建 rest 服务
app.get('/favicon.ico', function (request, response) {
  // 一句 status(200) 代替 writeHead(200); end();
  response.status(200);
  return;
})
app.get('/', function (request, response) {
  // fs.createReadStream(__dirname + '/index.html').pipe(response);
  // send接口会判断你传入的值的类型，文本的话则会处理为text/html
  // Buffer的话则会处理为下载
  response.send(fs.readFileSync(__dirname + '/index.html', 'utf-8'))
})
app.get('/game',
  function (request, response, next) {
    if (playerWinCount >= 3 || sameCount == 9) {
      response.status(500);
      response.send('我不会再玩了！');
      return;
    }
    // 通过next执行后续中间件
    next();
    // 当后续中间件执行完之后，会执行到这个位置
    if (response.playerWon) {
      playerWinCount++;
    }
  },
  function (request, response, next) {
    const query = request.query;
    const playerAction = query.action;

    // 当玩家操作与上次相同，则连续相同操作统计次数+1，否则统计清零
    // 当玩家操作连续三次相同，则视为玩家作弊，把sameCount置为9代表有过作弊行为
    if (playerLastAction && playerAction == playerLastAction) {
      sameCount++;
    } else {
      sameCount = 0;
    }
    playerLastAction = playerAction

    if (sameCount >= 3) {
      // response.writeHead(400);
      // response.end('你作弊！');
      response.status(400);
      response.send('你作弊！');
      sameCount = 9;
      return
    }
    response.playerAction = playerAction;
    next();
  },
  function (req, response) {
    let playerAction = response.playerAction;
    // 执行游戏逻辑
    const gameResult = game(playerAction);
    // 先返回头部
    // response.writeHead(200);
    response.status(200);
    // 根据不同的游戏结果返回不同的说明
    if (gameResult == 0) {
      response.send('平局！');
    } else if (gameResult == 1) {
      response.send('你赢了！');
      // 玩家胜利次数统计+1
      // playerWon++;
      response.playerWon = true;
    } else {
      response.send('你输了！');
    }
  }
)
app.listen(3000);