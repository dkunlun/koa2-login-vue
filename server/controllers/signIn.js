module.exports = async (ctx) => {
	let title = 'signIn'
	await ctx.render('signIn', {
		title,
	})
}