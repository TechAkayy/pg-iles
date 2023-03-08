// @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // @ts-ignore
//   import('@vue/devtools').then((devtools) => {
//     console.log(devtools)
//     // (window as any) = devtools
//     // @ts-ignore
//     window.devtools = devtools
//   })
// }

import { defineApp } from 'iles'
import { createPinia } from 'pinia'
import 'uno.css'

export default defineApp({
  enhanceApp({ app }) {
    const pinia = createPinia()
    app.use(pinia)
  },
})
