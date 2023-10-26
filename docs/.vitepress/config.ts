import path from 'node:path'
import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'My Lib',
  description: 'Just playing around.',
  themeConfig: {
    sidebar: [
      {
        text: 'Introduction',
        items: [{ text: 'Getting Started', link: '/guide/' }],
      },
    ],
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/jolylai/my-lib',
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        'my-lib': path.resolve(__dirname, '../../src'),
      },
      dedupe: ['vue'], // avoid error when using dependencies that also use Vue
    },
  },
})
