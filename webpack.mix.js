let mix = require('laravel-mix');

mix
  .js('src/index.js', 'js')
  .sass('src/styles/styles.scss', 'css', {
    processUrls: false,
  })
  .copyDirectory('src/images/**/*', 'assets/images')
  .setPublicPath('assets')
  .disableNotifications()
  .version()
  .sourceMaps();
