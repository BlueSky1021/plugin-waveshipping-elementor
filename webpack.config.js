/*global __dirname*/

const path = require( 'path' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' );
const RemoveEmptyScriptsPlugin = require( 'webpack-remove-empty-scripts' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const { CleanWebpackPlugin } = require( 'clean-webpack-plugin' );

module.exports = async( env, argv ) => {

  const config = {
    entry: {
      'chr-scripts':     './js/scripts.js',
      'chr-main-styles': './sass/main.scss',
    },
    output: {
      path:             path.resolve( __dirname, 'dist' ),
      hashDigestLength: 12,
      clean:            true,
    },
    mode: 'production',
    module: {
      rules: [
        {
          test: /\.scss$/,
          use:  [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
          ],
        },
        {
          test:    /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          use:     {
            loader:  'babel-loader',
            options: {
              presets: [ '@babel/preset-env' ]
            }
          }
        },
      ],
    },
    plugins: [
      new RemoveEmptyScriptsPlugin(),
      new CleanWebpackPlugin({
        cleanAfterEveryBuildPatterns: [
          '!.min.js',
          '!*.min.css',
        ],
      }),
    ],
    resolve: {
      extensions: [
        '.js',
        '.jsx'
      ],
      alias: {
        react:                  "preact/compat",
        "react-dom/test-utils": "preact/test-utils",
        "react-dom":            "preact/compat", // Must be below test-utils
        "react/jsx-runtime":    "preact/jsx-runtime"
      },
    }
  }

  config.output.filename = '[name].min.js';

  //Plugins
  const prodPlugins = [ new MiniCssExtractPlugin({
    filename: '[name].min.css'
  }) ];

  config.plugins = [
    ...config.plugins,
    ...prodPlugins
  ];

  //Optimize
  config.optimization = {
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin({}),
    ]
  };

  return config;
}
