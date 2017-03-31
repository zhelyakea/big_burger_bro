require('babel-polyfill');
const httpServer = require('./server')
const universalHotReload = require('universal-hot-reload')
var config = require('./webpack.config')
// universalHotReload(httpServer);
httpServer
