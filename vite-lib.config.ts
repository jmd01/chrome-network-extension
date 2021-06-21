import {defineConfig} from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [reactRefresh()],
    root: "dist/build",
    build: {
        rollupOptions: {
            // https://rollupjs.org/guide/en/#big-list-of-options
            // input: {
            //     "devtools": "src/main.tsx",
            //     "backgroundPage": "src/backgroundPage.ts"
            // },
            // output: {
            //     entryFileNames: '[name].js'
            // }
            input: {
                "main.js": "src/main.tsx",
                "background.js": "src/backgroundPage.ts"
            },
            output: {
                entryFileNames: '[name]'
            }

        },
        // emptyOutDir: false
    }

})
