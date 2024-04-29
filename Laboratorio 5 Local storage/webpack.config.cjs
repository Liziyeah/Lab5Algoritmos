const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const html = new HtmlWebpackPlugin({
    template: 'src/assets/index.html',
});

/** @type {import('webpack').Configuration} */
const options = {
    mode: 'production',
    entry: './src/index.ts',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    watchOptions: {
        ignored: ['node_modules', 'dist'],
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: 'css-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    plugins: [html],
};

module.exports = options;
