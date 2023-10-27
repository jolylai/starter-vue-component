import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

// @ts-expect-error vue-amap
import VueAmap, { initAMapApiLoader } from '@xtep/vue-amap'

import DemoContainer from '../components/DemoContainer.vue'
import MapDemo from '../components/map-demo.vue'

import './custom.css'
import '../../../src/theme/index.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    initAMapApiLoader({
      securityJsCode: 'bc1866e0cbda0af6eb5951ae46106f78',
      key: '295bf96e407bcc2e59eea51007f9c09a', // 申请好的Web端开发者Key，首次调用 load 时必填
      version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: ['AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.Geocoder'],
    })

    app.use(VueAmap)
    app.component('DemoContainer', DemoContainer)
    app.component('MapDemo', MapDemo)
  },
}

export default theme
