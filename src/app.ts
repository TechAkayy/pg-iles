import devtools from '@vue/devtools'

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
	// (window as any) = devtools
	// @ts-ignore
	window.devtools = devtools
}

import { defineApp } from 'iles'
import { createPinia } from 'pinia'
import 'uno.css'

export default defineApp({
	enhanceApp({ app, head, router }) {
		const pinia = createPinia()
		app.use(pinia)
	},
})
