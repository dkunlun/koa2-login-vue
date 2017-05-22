const Koa = require('koa')
const views = require('koa-views')
const path = require('path')
const app = new Koa()

const routers = require('./routers/index')

app.use(views(path.join(__dirname, './views'), {
	extension: 'ejs'
}))


app.use(routers.routes()).use(routers.allowedMethods())

app.listen(3000)
// let home = new Router()