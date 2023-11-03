import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig ({
    root: 'src',
    publicDir: 'public',
    build: {
        outDir: './dist',
        emptyOutDir: true,
        rollupOptions: {
            manifest: true,
            input: {
                main: resolve(__dirname,'src/index.html'),
                about: resolve(__dirname, 'src/pages/about/index.html'),
                contact: resolve(__dirname, 'src/pages/contact/index.html'),
            }
        }
    }
})
