import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import DemoContainer from '../components/DemoContainer.vue'

// import MyLib from "my-lib";

import './custom.css'

const theme: Theme = {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // app.use(MyLib);
    app.component('DemoContainer', DemoContainer)
  },
}

export default theme
