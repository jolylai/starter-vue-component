import type { App } from 'vue'

import Button from './components/button.vue'

function install(app: App) {
  app.component('XButton', Button)
}

export default { install }
