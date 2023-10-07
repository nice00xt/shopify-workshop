import esbuild from 'esbuild'
import { sassPlugin } from 'esbuild-sass-plugin'

esbuild.build({
  entryPoints: [
    './src/global.js'
  ],
  bundle: true,
  minify: true,
  outdir: './../assets',
  plugins: [sassPlugin()],
}).catch(() => process.exit(1));