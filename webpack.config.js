const path = require('path');

module.exports = {
  mode:    'production',
  entry:   {
    'ts-request-service':     path.resolve(__dirname, 'src/index.ts'),
    'ts-request-service.min': path.resolve(__dirname, 'src/index.ts'),
  },
  output:  {
    path:           path.resolve(__dirname, '_bundles'),
    filename:       '[name].js',
    library:        'TSRequestService',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  devtool: 'source-map',
  module:  {
    rules: [
      {
        test:    /\.tsx?$/,
        loader:  'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};