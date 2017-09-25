const path = require('path');
const glob = require('glob');
const postCssAssets = require('postcss-assets');
const postCssImport = require('postcss-import');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const scssFolders = ['scss', 'node_modules'];
const scssPaths = scssFolders.map((dir) => path.join(__dirname, dir))
                             .map((filePath) => glob.sync(filePath))
                             .reduce((accum, match) => accum.concat(match), []);

const commonScssLoaders = [
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        postCssImport,
        postCssAssets({
          cachebuster: true,
          basePath: 'app/static',
          baseUrl: '/static'
        })
      ]
    }
  },
  {
    loader: 'sass-loader',
    options: {
      includePaths: scssPaths
    }
  }
];

module.exports = {
  distDir: '../build',

  webpack(config, { dev }) {
    config.module.rules.push(
      {
        test: /\.scss/,
        loader: 'emit-file-loader',
        options: {
          name: 'dist/[path][name].[ext]'
        }
      }
    );

    if (dev) {
      config.module.rules.push({
        test: /\.scss/,
        use: [
          {
            loader: 'raw-loader'
          }
        ].concat(commonScssLoaders)
      });
    } else {
      config.module.rules.push({
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                minimize: true
              }
            }
          ].concat(commonScssLoaders)
        })
      });

      config.plugins.push(new ExtractTextPlugin('styles.css'));
    }

    return config;
  }
};
