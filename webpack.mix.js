const {MIX_PACKAGE, NPM, VENDOR, OUTPUT, output} = require('laravel-mix-branches');

branchesPath = `${__dirname}/modules/`;

require(`${branchesPath}/${MIX_PACKAGE}/webpack.mix.js`);
