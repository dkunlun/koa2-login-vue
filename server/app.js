const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

const routers = require('./routers/index')

app.use(views(path.join(__dirname, './views'), {
	extension: 'ejs'
}))


// 配置ctx.body解析中间件
app.use(bodyParser())

app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000)
// let home = new Router()