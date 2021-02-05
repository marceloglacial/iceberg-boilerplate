let mix = require('laravel-mix');

mix
  .js('src/index.js', 'js')
  .sass('src/styles/styles.scss', 'css')
  .setPublicPath('assets')
  .browserSync('http://localhost:8080');
