import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import autoprefixer from 'autoprefixer'
import webpack from 'webpack'

const devPlugins = [
    new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
    }),
    new CopyWebpackPlugin([
        { from: 'res/favicon/' },
        { from: 'res/CNAME' },
    ]),
]

const prodPlugins = [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    }),
    new webpack.DefinePlugin({
        'process.env':{
            'NODE_ENV': JSON.stringify('production')
        }
    }),
]

const plugins = process.env.NODE_ENV === 'production' ?
    devPlugins.concat(prodPlugins) :
    devPlugins

module.exports = {
    plugins,
    entry: ['./src/main.styl', './src/main.jsx'],
    output: {
        filename: '[hash].js',
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
            },
            {
                test: /\.styl$/,
                loader: 'style!css!postcss!stylus',
            },
            {
                test: /\.otf$/,
                loader: 'url',
            }
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.styl'],
        alias: {
            res: __dirname + '/res',
        }
    },
    postcss: () => [autoprefixer],
}
