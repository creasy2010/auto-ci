'use strict';

const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const resolve = require('resolve');
const PnpWebpackPlugin = require('pnp-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const InlineChunkHtmlPlugin = require('react-dev-utils/InlineChunkHtmlPlugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const safePostCssParser = require('postcss-safe-parser');
const ManifestPlugin = require('webpack-manifest-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent');
const paths = require('./paths');
const getClientEnvironment = require('./env');
const ModuleNotFoundPlugin = require('react-dev-utils/ModuleNotFoundPlugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin-alt');
const typescriptFormatter = require('react-dev-utils/typescriptFormatter');


const shouldUseSourceMap = process.env.GENERATE_SOURCEMAP !== 'false';
const shouldInlineRuntimeChunk = process.env.INLINE_RUNTIME_CHUNK !== 'false';

const useTypeScript = fs.existsSync(paths.appTsConfig);

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.module\.(scss|sass)$/;

module.exports = function(webpackEnv,envCode='prod') {
  const isEnvDevelopment = envCode !== 'prod';
  const isEnvProduction = envCode === 'prod';

  const publicPath = isEnvProduction
    ? "/"
    : isEnvDevelopment && '/';
  const shouldUseRelativeAssetPaths = publicPath === './';

  const publicUrl = isEnvProduction
    ? publicPath.slice(0, -1)
    : isEnvDevelopment && '';

  const env = getClientEnvironment(envCode,publicUrl);

  const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
      isEnvDevelopment && require.resolve('style-loader'),
      isEnvProduction && {
        loader: MiniCssExtractPlugin.loader,
        options: Object.assign(
          {},
          shouldUseRelativeAssetPaths ? { publicPath: '../../' } : undefined
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
    devtool:"source-map",
    // devtool: isEnvProduction
    //   ? shouldUseSourceMap
    //     ? 'source-map'
    //     : false
    //   : isEnvDevelopment && 'eval-source-map',
    entry:
        {
            background:"./src/background/index.ts",
            content:"./src/content-scripts/index.ts",
            options:"./src/options/index.tsx",
            popup:"./src/popup/index.tsx",
        }
      ,
    output: {
      path: isEnvProduction ? paths.appBuild : undefined,
      pathinfo: isEnvDevelopment,
      filename: isEnvProduction
        ? 'static/js/[name].[chunkhash:8].js'
        : isEnvDevelopment && 'static/js/[name]-bundle.js?t='+Date.now(),
      chunkFilename: isEnvProduction
        ? 'static/js/[name].[chunkhash:8].chunk.js'
        : isEnvDevelopment && 'static/js/[name].chunk.js?t='+Date.now(),
      publicPath: publicPath,
      devtoolModuleFilenameTemplate: isEnvProduction
        ? info =>
            path
              .relative(paths.appSrc, info.absoluteResourcePath)
              .replace(/\\/g, '/')
        : isEnvDevelopment &&
          (info => path.resolve(info.absoluteResourcePath).replace(/\\/g, '/')),
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
      // splitChunks: {
      //   chunks: 'all',
      //   name: false,
      // },
      // runtimeChunk: true,
    },
    externals: {
    },
    resolve: {
      modules: ['node_modules',"src"].concat(
        process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
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
      plugins: [
        PnpWebpackPlugin.moduleLoader(module),
      ],
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
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
              include: [paths.appSrc,paths.webNodeModules],
              loader: require.resolve('babel-loader'),
              options: {
                customize: require.resolve(
                  'babel-preset-react-app/webpack-overrides'
                ),

                plugins: [
                  [
                    require.resolve('babel-plugin-named-asset-import'),
                    {
                      loaderMap: {
                        svg: {
                          ReactComponent: '@svgr/webpack?-svgo![path]',
                        },
                      },
                    },
                  ],
                ],
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
                  use: [{
                      loader: "style-loader" // creates style nodes from JS strings
                  }, {
                      loader: "css-loader" // translates CSS into CommonJS
                  }, {
                      loader: "less-loader", // compiles Less to CSS
                      options: {
                        modifyVars: {
                          'primary-color': '#ff6600',
                          'link-color': '#ff6600',
                          // or
                          // 'hack': `true; @import "your-less-file-path.less";`, // Override with less file
                        },
                        javascriptEnabled: true,
                      },
                  }]
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
                'sass-loader'
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
                'sass-loader'
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
      new HtmlWebpackPlugin(
        Object.assign(
          {},
          {
            dllName:isEnvProduction?require('./compile-env.json').prodDll:require('./compile-env.json').testDll,
            inject: true,
            template: "./public/index.html",
              filename: 'index.html',
            chunks: ['popup']
          },
          isEnvProduction
            ? {
                minify: {
                  removeComments: true,
                  collapseWhitespace: true,
                  removeRedundantAttributes: true,
                  useShortDoctype: true,
                  removeEmptyAttributes: true,
                  removeStyleLinkTypeAttributes: true,
                  keepClosingSlash: true,
                  minifyJS: true,
                  minifyCSS: true,
                  minifyURLs: true,
                },
              }
            : undefined
        )
      ),
        new HtmlWebpackPlugin(
            Object.assign(
                {},
                {
                    dllName:isEnvProduction?require('./compile-env.json').prodDll:require('./compile-env.json').testDll,
                    inject: true,
                    template: "./public/options.html",
                    filename: 'options.html',
                    chunks: ['options']
                },
                isEnvProduction
                    ? {
                        minify: {
                            removeComments: true,
                            collapseWhitespace: true,
                            removeRedundantAttributes: true,
                            useShortDoctype: true,
                            removeEmptyAttributes: true,
                            removeStyleLinkTypeAttributes: true,
                            keepClosingSlash: true,
                            minifyJS: true,
                            minifyCSS: true,
                            minifyURLs: true,
                        },
                    }
                    : undefined
            )
        ),
      // isEnvProduction &&
      //   shouldInlineRuntimeChunk &&
      //   new InlineChunkHtmlPlugin(HtmlWebpackPlugin, [/runtime~.+[.]js/]),
      new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
      new ModuleNotFoundPlugin(paths.appPath),
      new webpack.DefinePlugin({... env.stringified ,__DEV__:!isEnvProduction}),
      new webpack.DllReferencePlugin({
        manifest: isEnvProduction?require("../public/javascript/dll/vendor-manifest-prod.json"):require("../public/javascript/dll/vendor-manifest.json") // eslint-disable-line
      }),
      // isEnvDevelopment && new webpack.HotModuleReplacementPlugin(),
      isEnvDevelopment && new CaseSensitivePathsPlugin(),
      isEnvDevelopment &&
        new WatchMissingNodeModulesPlugin(paths.appNodeModules),
      isEnvProduction &&
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash:8].css',
          chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
        }),
      new ManifestPlugin({
        fileName: 'asset-manifest.json',
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
      false &&
        new ForkTsCheckerWebpackPlugin({
          typescript: resolve.sync('typescript', {
            basedir: paths.appNodeModules,
          }),
          async: false,
          checkSyntacticErrors: true,
          tsconfig: paths.appTsConfig,
          compilerOptions: {
            module: 'esnext',
            moduleResolution: 'node',
            resolveJsonModule: true,
            isolatedModules: true,
            noEmit: true,
            jsx: 'preserve',
          },
          reportFiles: [
            '**',
            '!**/*.json',
            '!**/__tests__/**',
            '!**/?(*.)(spec|test).*',
            '!**/src/setupProxy.*',
            '!**/src/setupTests.*',
          ],
          watch: paths.appSrc,
          silent: true,
          formatter: typescriptFormatter,
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
    cache: {
      type: "filesystem"
    },
    performance: {
      hints: "warning"
    },
  };
};
