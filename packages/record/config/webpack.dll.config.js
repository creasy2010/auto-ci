'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const paths = require('./paths');
const getClientEnvironment = require('./env');

const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function(webpackEnv, envCode = 'prod') {

  const isEnvDevelopment = envCode !== 'prod';
  const isEnvProduction = envCode === 'prod';

  const publicPath = isEnvProduction ? '/' : isEnvDevelopment && '/';
  const shouldUseRelativeAssetPaths = publicPath === './';

  const publicUrl = isEnvProduction
    ? publicPath.slice(0, -1)
    : isEnvDevelopment && '';

  const env = getClientEnvironment(envCode, publicUrl);

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: Object.assign(
          {},
          shouldUseRelativeAssetPaths ? {publicPath: '../../'} : undefined,
        ),
      },
      {
        loader: require.resolve('css-loader'),
        options: cssOptions,
      },
    ].filter(Boolean);
    if (preProcessor) {
      loaders.push({
        loader: require.resolve(preProcessor),
        options: {
          sourceMap: isEnvProduction ? shouldUseSourceMap : isEnvDevelopment,
        },
      });
    }
    return loaders;
  };

  return {
    mode: isEnvProduction ? 'production' : isEnvDevelopment && 'development',
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap ? 'source-map' : false
      : isEnvDevelopment && 'eval-source-map',
    entry: {
      vendor: [
        'plume2',
        'react',
        'immer',
        'moment',
        'lodash',
        'reselect',
        'react-dom',
        'react-redux',
        'whatwg-fetch',
        'react-router',
        'react-router-dom',
      ],
    },
    output: {
      path: paths.dllBuild,
      pathinfo: isEnvDevelopment,
      filename: isEnvProduction
        ? '[name].[chunkhash:8].dll.js'
        : isEnvDevelopment && '[name].dll.js',
      publicPath: publicPath,
      library: '[name]_library',
      devtoolModuleFilenameTemplate: isEnvProduction
        ? info =>
            path
              .relative(paths.dllBuild, info.absoluteResourcePath)
              .replace(/\\/g, '/')
        : isEnvDevelopment &&
            (info =>
              path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
    },
    optimization: {
      minimize: isEnvProduction,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            parse: {
              ecma: 8,
            },
            compress: {
              ecma: 5,
              warnings: false,
              comparisons: false,
              inline: 2,
            },
            mangle: {
              safari10: true,
            },
            output: {
              ecma: 5,
              comments: false,
              ascii_only: true,
            },
          },
          parallel: true,
          cache: true,
          sourceMap: shouldUseSourceMap,
        }),
        new OptimizeCSSAssetsPlugin({
          cssProcessorOptions: {
            parser: safePostCssParser,
            map: shouldUseSourceMap
              ? {
                  inline: false,
                  annotation: true,
                }
              : false,
          },
        }),
      ],
    },
    externals: {},
    resolve: {
      modules: ['node_modules', 'src'].concat(
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean),
      ),
      extensions: paths.moduleFileExtensions
        .map(ext => `.${ext}`)
        .filter(ext => useTypeScript || !ext.includes('ts')),
      alias: {
        'react-native': 'react-native-web',
        'plume2':"plume2/es5",
      },
      plugins: [
        PnpWebpackPlugin,
        // new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
      ],
    },
    resolveLoader: {
      plugins: [PnpWebpackPlugin.moduleLoader(module)],
    },
    module: {
      strictExportPresence: true,
      rules: [
        {parser: {requireEnsure: false}},
        // {
        //      test: /\.(js|mjs|jsx)$/,
        //      enforce: 'pre',
        //      use: [
        //        {
        //          options: {
        //            formatter: require.resolve('react-dev-utils/eslintFormatter'),
        //            eslintPath: require.resolve('eslint'),
        //
        //          },
        //          loader: require.resolve('eslint-loader'),
        //        },
        //      ],
        //      include: paths.appSrc,
        //    },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: require.resolve('url-loader'),
              options: {
                limit: 10000,
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
            {
              test: /\.(js|mjs|jsx|ts|tsx)$/,
              loader: require.resolve('babel-loader'),
              include: [path.resolve(__dirname, 'node_modules/plume2')],
              // include: /(node_modules)/,
              options: {
                babelrc: true,
                // customize: require.resolve(
                //   'babel-preset-react-app/webpack-overrides',
                // ),
                // plugins: [
                //   [
                //     require.resolve('babel-plugin-named-asset-import'),
                //     {
                //       loaderMap: {
                //         svg: {
                //           ReactComponent: '@svgr/webpack?-svgo![path]',
                //         },
                //       },
                //     },
                //   ],
                // ],
                cacheDirectory: true,
                cacheCompression: isEnvProduction,
                compact: isEnvProduction,
              },
            },
            // {
            //   test: /\.(js|mjs)$/,
            //   exclude: /@babel(?:\/|\\{1,2})runtime/,
            //   loader: require.resolve('babel-loader'),
            //   options: {
            //     babelrc: false,
            //     configFile: false,
            //     compact: false,
            //     presets: [
            //       [
            //         require.resolve('babel-preset-react-app/dependencies'),
            //         { helpers: true },
            //       ],
            //     ],
            //     cacheDirectory: true,
            //     cacheCompression: isEnvProduction,
            //
            //     sourceMaps: false,
            //   },
            // },
            {
              test: cssRegex,
              exclude: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
              }),
              sideEffects: true,
            },
            {
              test: /\.less$/,
              use: [
                {
                  loader: 'style-loader', // creates style nodes from JS strings
                },
                {
                  loader: 'css-loader', // translates CSS into CommonJS
                },
                {
                  loader: 'less-loader', // compiles Less to CSS
                  options: {
                    javascriptEnabled: true,
                  },
                },
              ],
            },
            {
              test: cssModuleRegex,
              use: getStyleLoaders({
                importLoaders: 1,
                sourceMap: isEnvProduction
                  ? shouldUseSourceMap
                  : isEnvDevelopment,
                modules: true,
                getLocalIdent: getCSSModuleLocalIdent,
              }),
            },
            {
              test: sassRegex,
              exclude: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                },
                'sass-loader',
              ),
              sideEffects: true,
            },
            {
              test: sassModuleRegex,
              use: getStyleLoaders(
                {
                  importLoaders: 2,
                  sourceMap: isEnvProduction
                    ? shouldUseSourceMap
                    : isEnvDevelopment,
                  modules: true,
                  getLocalIdent: getCSSModuleLocalIdent,
                },
                'sass-loader',
              ),
            },
            {
              loader: require.resolve('file-loader'),
              exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
              options: {
                name: 'static/media/[name].[hash:8].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({...env.stringified, __DEV__: !isEnvProduction}),

      new webpack.DllPlugin({
        /**
         * path
         * 定义 manifest 文件生成的位置
         * [name]的部分由entry的名字替换
         */
        path: path.join(
          __dirname,
          '../public/javascript/dll/',
          isEnvProduction?"[name]-manifest-prod.json":'[name]-manifest.json'
        ),
        /**
         * name
         * dll bundle 输出到那个全局变量上
         * 和 output.library 一样即可。
         */
        name: '[name]_library',
      }),

      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
      new ManifestPlugin({
        fileName: isEnvProduction?"asset-manifest-prod.json":'asset-manifest.json',
        publicPath: publicPath,
      }),
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
      isEnvProduction &&
        new WorkboxWebpackPlugin.GenerateSW({
          clientsClaim: true,
          exclude: [/\.map$/, /asset-manifest\.json$/],
          importWorkboxFrom: 'cdn',
          navigateFallback: publicUrl + '/index.html',
          navigateFallbackBlacklist: [
            new RegExp('^/_'),
            new RegExp('/[^/]+\\.[^/]+$'),
          ],
        }),
    ].filter(Boolean),
    node: {
      module: 'empty',
      dgram: 'empty',
      dns: 'mock',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
    performance: false,
  };
};
