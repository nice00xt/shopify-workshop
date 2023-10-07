import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';
import watch from 'node-watch';

async function build() {
  try {
    await esbuild.build({
      entryPoints: [
        './src/styles/index.css',
        './src/global.js'
      ],
      bundle: true,
      minify: true,
      outdir: './../assets',
      plugins: [sassPlugin()],
    });
    console.log('Build successful');
  } catch (error) {
    console.error('Build error:', error);
  }
}

watch('./src', { recursive: true }, (evt, filename) => {
  console.log(`File ${filename} changed`);
  build();
});

build();