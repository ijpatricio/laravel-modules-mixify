const mix = require('laravel-mix');
const appPublicPath = global.process.env.MIX_PUBLIC_PATH || 'public';
let appModule = global.process.env.MIX_PACKAGE;

appModule = appModule.toLowerCase()

mix.setPublicPath(`${appPublicPath}/modules/${appModule}`);

mix.version();


mix
    .react(__dirname + '/resources/js/app.js', 'js/index.js')
    .sass(__dirname + '/resources/sass/app.scss', 'css')
