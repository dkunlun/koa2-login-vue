/**
 * 用户业务操作
 */

const validator = require('validator')
const userModel = require('./../models/user-info')
const userCode = require('./../codes/user')

const user = {
	/**
	 * 创建用户
	 * @param  {object} user 用户信息
	 * @return {object}      创建结果
	 */
	async create(user) {
		let result = await userModel.create(user)
		return result
	},
	/**
	 * 查找存在用户信息
	 * @param  {object} formData 查找的表单数据
	 * @return {object|null}      查找结果
	 */
	async getExistOne(formData) {
		let resultData = await userModel.getExistOne({
			'email': formData.email,
			'name': formData.userName
		})

		return resultData
	}
}