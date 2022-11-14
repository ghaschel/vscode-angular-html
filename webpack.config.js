//@ts-check

'use strict';

const path = require('path');
const webpack = require('webpack');

/**@type {import('webpack').Configuration}*/
const config = {
  target: 'node',
  entry: './src/ts/extension.ts',
  output: {
    path: path.resolve(__dirname, 'out/ts'),
    filename: 'extension.js',
    libraryTarget: 'commonjs2',
    chunkFormat: 'commonjs',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  node: {
    __dirname: false,
  },
  devtool: 'source-map',
  externals: {
    vscode: 'commonjs vscode',
  },
  resolve: {
    mainFields: ['module', 'main'], // look for `browser` entry point in imported node modules
    extensions: ['.ts', '.js', '.json'],
    alias: {
      // provides alternate implementation for node module and source files
    },
    fallback: {
      fs: false,
      path: false,
      // Webpack 5 no longer polyfills Node.js core modules automatically.
      // see https://webpack.js.org/configuration/resolve/#resolvefallback
      // for the list of Node.js core module polyfills.
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              compilerOptions: {
                sourceMap: true,
              },
            },
          },
        ],
      },
      {
        test: '/.node$/',
        loader: 'node-loader',
      },
    ],
  },
};
module.exports = env => {
  if (env.vscode_nls) {
    // rewrite nls call when being asked for
    // @ts-ignore
    config.module.rules.unshift({
      loader: 'vscode-nls-dev/lib/webpack-loader',
      options: {
        base: __dirname,
      },
    });
  }

  return config;
};
