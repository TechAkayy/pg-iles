import devtools from '@vue/devtools'

// @ts-ignore
if (process.env.NODE_ENV === 'development') {
	// (window as any) = devtools
	// @ts-ignore
	window.devtools = devtools
}

import { defineApp } from 'iles'

export default defineApp({})
