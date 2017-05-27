//登录路由

const router = require('koa-router')()
const signIn = require('../controllers/signIn')

module.exports = router.get('/', signIn)