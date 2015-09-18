var webpack = require('webpack'),
    WebPackDevServer = require('webpack-dev-server'),
    config = require('./webpack.config');

new WebPackDevServer(webpack(config),{
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(3000,'localhost',function(err){
  if (err) {
    console.log(error);
  }
  console.log('Listening at localhost:3000');
});
