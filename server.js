var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

const page = {
  '1': {
    'id' : 1,
    'name': 'burger',
    'count': 0,
    'cost': 100,
    'selected': false
  },
  '2': {
  	'id': 2,
    'name': 'free',
  	'count': 1,
  	'cost': 200,
    'selected': false
  },
 '3': {
    'id': 3,
    'name': 'soda',
    'count': 0,
    'cost': 300,
    'selected': false
  },
  '4': {
  	'id': 4,
    'name': 'donut',
  	'count': 0,
  	'cost': 400,
    'selected': false
  },
  '5': {
  	'id': 5,
    'name': 'pizza',
  	'count': 0,
  	'cost': 500,
    'selected': false
  },
  '6': {
  	'id': 6,
    'name': 'hotdog',
  	'count': 0,
  	'cost': 600,
    'selected': false
  }
}

function toggle_selected(id){
  page[id].selected = !page[id].selected
}
function false_selected(id){
  page[id].selected = false
}
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})
app.post('/', function (req, res) {
  var response = '';
    req.on("data", function(chunk){
        response += chunk.toString();
    });
    req.on("end", function(){
      var data_response = response.split('=')
        console.log(data_response)
      switch(data_response.length){
        case 2:
          var id = data_response[1]
          var action = data_response[0]
          switch (action) {
            case 'delete':
              false_selected(id)
              res.send(id);
              break;
            case 'toggle':
              toggle_selected(id)
              res.send(id);
              break;
          }
          switch (data_response[0]) {
            case 'get_list':
              res.send(page);
              break;
          }
          break;
        }
    });
})
const httpServer = app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
module.exports = httpServer;
