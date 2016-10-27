import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import autoprefixer from 'autoprefixer'

module.exports = {
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
                test: /\.(otf|ttf)$/,
                loader: 'url'
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
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/src/index.html',
        }),
        new CopyWebpackPlugin([
            { from: 'res/favicon/' }
        ]),
    ]
}
