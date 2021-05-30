const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');

const game = require('./game');
let playerWinCount = 0; // 赢的次数
// 玩家的上一次游戏动作
var lastPlayerAction = null;
let sameCount = 0; // 相同的次数

const app = new koa();
app.use(
  mount('/favicon.ico', function (ctx) {
    ctx.status = 200;
    return;
  })
)

const gameKoa = new koa();
app.use(
  mount('/game', gameKoa)
)
gameKoa.use(
  async function (ctx, next) {
    if (playerWinCount >= 3) {
      ctx.status = 500;
      ctx.body = '我不会再玩了！';
      return;
    }
    // 通过next执行后续中间件
    await next();
    // 当后续中间件执行完之后，会执行到这个位置
    if (ctx.playerWon) {
      playerWinCount++;
    }
  }
)
gameKoa.use(
  async function (ctx, next) {
    const query = ctx.query;
    const playerAction = query.action;
    if (!playerAction) {
      ctx.status = 400;
      return;
    }
    if (sameCount == 9) {
      ctx.status = 500;
      ctx.body = '我不会再玩了！'
    }
    if (lastPlayerAction == playerAction) {
      sameCount++
      if (sameCount >= 3) {
        ctx.status = 400;
        ctx.body = '你作弊！我再也不玩了'
        sameCount = 9
        return;
      }
    } else {
      sameCount = 0;
    }
    lastPlayerAction = playerAction;
    ctx.playerAction = playerAction;
    await next();
  }
)
gameKoa.use(
  async function (ctx, next) {
    const playerAction = ctx.playerAction;
    const result = game(playerAction);
    // 对于一定需要在请求主流程里完成的操作，一定要使用await进行等待
    // 否则koa就会在当前事件循环就把http response返回出去了
    await new Promise(resolve => {
      setTimeout(() => {
        ctx.status = 200;
        if (result == 0) {
          ctx.body = '平局'
        } else if (result == -1) {
          ctx.body = '你输了'
        } else {
          ctx.body = '你赢了'
          ctx.playerWon = true;
        }
        resolve();
      }, 500)
    })
  }
)

app.use(
  mount('/', function (ctx) {
    ctx.body = fs.readFileSync(__dirname + '/index.html', 'utf-8')
    return;
  })
)
app.listen(3000);