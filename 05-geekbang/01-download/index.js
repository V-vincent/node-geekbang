const fs = require('fs');
const koa = require('koa');
const mount = require('koa-mount');
const static = require('koa-static');

const app = new koa();

app.use(
  static(__dirname + '/source')
);

app.use(
  mount('/', function (ctx) {
    ctx.body = fs.readFileSync(__dirname + '/source/index.html', 'utf-8')
  })
)

app.listen(4000);