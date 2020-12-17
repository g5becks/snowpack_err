// Import Framework7
import Framework7 from 'framework7/framework7-lite.esm.bundle.js'

// Import Framework7-Svelte Plugin
import Framework7Svelte from 'framework7-svelte'

// Import Framework7 Styles
import 'framework7/css/framework7.bundle.css'

// Import FirebseUI Styles
import 'firebaseui/dist/firebaseui.css'
// Import Icons and App Custom Styles
import '../public/assets/css/icons.css'
import '../public/assets/css/app.less'

// Import App Component
import { App } from './components'

// Init F7 Svelte Plugin
Framework7.use(Framework7Svelte)

// Mount Svelte App
// eslint-disable-next-line no-unused-vars,@typescript-eslint/no-unused-vars
const app = new App({
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  target: document.getElementById('app')!,
})
