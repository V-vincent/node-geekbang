const mount = require('koa-mount');
const static = require('koa-static')
const app = new (require('koa'));
const rpcClient = require('./client');
const template = require('./template');

const detailTemplate = template(__dirname + '/template/index.html');

app.use(mount('/static', static(`${__dirname}/source/static/`)))

app.use(async (ctx) => {
  if (!ctx.query.columnid) {
    ctx.status = 400;
    ctx.body = 'invalid columnid';
    return
  }

  const result = await new Promise((resolve, reject) => {

    rpcClient.write({
      columnid: ctx.query.columnid
    }, function (err, data) {
      err ? reject(err) : resolve(data)
    })
  })

  ctx.status = 200;
  ctx.body = detailTemplate(result);
})

module.exports = app;

// 详情页单独打开服务：
// （多了的文件夹：__server、detail-service）
// 分屏启动服务器：node __server/index.js
// 本地启动：node index.js
// 浏览器打开：http://localhost:3000/?columnid=1
// app.listen(3000)
