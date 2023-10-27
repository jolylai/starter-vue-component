import type { App } from 'vue'

import Map from './components/map/index.vue'
import Search from './components/search/index.vue'
import Marker from './components/marker/index.vue'

import { initAMapApiLoader } from './utils/index'

function install(app: App) {
  app.component('XMap', Map)
  app.component('XMapSearch', Search)
  app.component('XMapMarker', Marker)
}

export default { install }

export {
  initAMapApiLoader,
}
