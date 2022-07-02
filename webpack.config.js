const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}) => {
    const { mode } = env;
    const development = mode === 'development';

    return {
        mode: development ? 'development' : 'production',
        target: development ? 'web' : 'browserslist',
        devtool: 'source-map',
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        entry: {
            main: ['@babel/polyfill', path.resolve(__dirname, 'src/v2/', 'main.ts')],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            publicPath: '',
        },
        devServer: {
            port: 9000,
            hot: true,
            open: true,
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env'],
                        },
                    },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin(),
        ],
        optimization: {
            minimize: true,
            minimizer: [],
            splitChunks: {
                chunks: 'all',
            },
        },
    };
}
