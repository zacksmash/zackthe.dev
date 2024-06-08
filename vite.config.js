import { defineConfig } from 'vite'
import laravel from 'laravel-vite-plugin'
// import vue2 from '@vitejs/plugin-vue2';

export default defineConfig({
  resolve:{
    alias:{
      '@': '/resources/js',
      '@styles': '/resources/css',
      '@images': '/resources/img',
      '@components': '/resources/js/components'
    }
  },
  plugins: [
    laravel({
      input: [
        'resources/css/site.css',
        'resources/js/site.js'

        // Control Panel assets.
        // https://statamic.dev/extending/control-panel#adding-css-and-js-assets
        // 'resources/css/cp.css',
        // 'resources/js/cp.js',
      ],
      refresh: true
    })
  ]
})
