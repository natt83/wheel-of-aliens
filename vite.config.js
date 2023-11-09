import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    root: 'src',
    publicDir: '../public',
    build: {
        outDir: '../dist',
        emptyOutDir: true,
        rollupOptions: {
            manifest: true,
            input: {
                home: resolve(__dirname,'src/index.html'),
                gameplay: resolve(__dirname, 'src/pages/GameplayPage/index.html'),
                results: resolve(__dirname, 'src/pages/ResultsPage/index.html'),
            }
        }
    }
})
