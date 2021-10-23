import scss from 'rollup-plugin-scss'
import html from '@rollup/plugin-html'
import fs from 'fs';

const template = ({attributes, bundle, files, publicPath, title}) => {
    return fs.readFileSync('./src/web-pages/main-page.html')
}

export default {
    input: './src/main-style.js',
    output: {
        file: 'dist/output.js',
        format: 'esm'
    },
    plugins: [
        scss(),
        html({template})
    ]
}