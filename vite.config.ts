import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: [{ find: '#', replacement: resolve(__dirname, 'src') }],
    },
    // resolve: {
    //     alias: {
    //         '#': 'src',
    //     },
    // },
    // resolve: {
    //     alias: [
    //         { '@': resolve(__dirname, 'src') },
    //         { '@components': resolve(__dirname, 'src/components') },
    //         { '@pages': resolve(__dirname, 'src/pages') },
    //         { '@utils': resolve(__dirname, 'src/utils') },
    //         { '@assets': resolve(__dirname, 'src/assets') },
    //         { '@styles': resolve(__dirname, 'src/styles') },
    //     ],
    // },
})

