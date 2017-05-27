//整合所有路由

const router = require('koa-router')()

const home = require('./home')
const api = require('./api')
const signIn = require('./signIn')

router.use('/', home.routes(), home.allowedMethods())
router.use('/signIn', signIn.routes(), signIn.allowedMethods())
router.use('/api', api.routes(), api.allowedMethods())

module.exports = router