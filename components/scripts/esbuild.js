import esbuild from 'esbuild';
import watch from 'node-watch';
import { readdirSync } from 'fs';

async function buildJSFiles() {
  const entryPoints = readdirSync('./src')
    .filter((file) => file.endsWith('.js'))
    .map((file) => `./src/${file}`);

  try {
    await esbuild.build({
      entryPoints,
      bundle: true,
      minify: true,
      outdir: './../assets',
    });
    console.log('✅ Build successful');
  } catch (error) {
    console.error('❌ Build error:', error);
  }
}

async function build() {
  await buildJSFiles();
}

watch('./src', { recursive: true }, (evt, filename) => {
  console.log(`✨ File ${filename} changed`);
  build();
});

build();