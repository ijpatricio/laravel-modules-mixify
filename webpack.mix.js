const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const {MIX_PACKAGE, NPM, VENDOR, OUTPUT, output} = require('laravel-mix-branches');

branchesPath = `${__dirname}/modules/`;

require(`${branchesPath}/${MIX_PACKAGE}/webpack.mix.js`);
