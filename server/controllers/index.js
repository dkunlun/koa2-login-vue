module.exports = async (ctx) => {
	let title = 'index'
	await ctx.render('index', {
		title,
	})
}