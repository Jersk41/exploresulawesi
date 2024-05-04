// webpack.mix.js

let mix = require('laravel-mix');
require('mix-tailwindcss');

mix.js('src/app.js', 'dist')
    .setPublicPath('public')
    .autoload({
        jquery: ['$', 'window.jQuery']
    });
mix.postCss('src/app.css', 'dist', [
    require('postcss-preset-env')
]).options({ autoprefixer: false })
    .setPublicPath('public')
    .tailwind();
mix.disableNotifications();
