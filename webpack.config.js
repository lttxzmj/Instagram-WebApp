var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle-[hash].js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            }, {
                test: /\.s[ca]ss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader?sourceMap', 'sass-loader?sourceMap']
                })
            }, {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({fallback: 'style-loader', use: ['css-loader?sourceMap']})
            }, {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)(\?.*$|$)/,
                use: ['file-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({filename: 'index.html', template: './src/index.html', inject: 'body'}),
        new ExtractTextPlugin('bundle-[hash].css')
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        historyApiFallback: true,
        overlay: true
    },
    devtool: "source-map"
};
