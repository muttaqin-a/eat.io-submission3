import 'regenerator-runtime'
import '../styles/main.css'
import '../styles/responsive.css'
import '../styles/detail.css'
import App from './views/app'
import swRegister from './utils/sw-register'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'

import './component/app-bar'
import './component/app-hero'
import './component/app-footer'

const app = new App({
  button: document.querySelector('#menu_toggle'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
