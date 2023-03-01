module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
		// override/add rules settings here, such as:
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
	},
}