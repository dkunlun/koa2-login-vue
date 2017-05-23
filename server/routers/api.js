/**
 * restful api 子路由
 */

const router = require('koa-router')()
const userInfoController = require('./../controllers/user-info')

const routers = router
	.post('/user/signUp.json', userInfoController.signUp)

module.exports = routers