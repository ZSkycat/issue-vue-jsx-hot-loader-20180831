const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: {
        js: `./src/js/index.js`,
        ts: `./src/ts/index.ts`,
    },
    output: {
        path: path.resolve('./dist'),
        filename: 'script/[name].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
        alias: {
            src: path.resolve('./src'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                include: [ path.resolve('./src') ],
                use: [
                    'babel-loader',
                    'vue-jsx-hot-loader',
                ],
            },
            {
                test: /\.(jsx)$/,
                include: [ path.resolve('./src') ],
                loader: 'babel-loader',
            },
            {
                test: /\.ts$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: { appendTsSuffixTo: [/(\.vue)$/], compilerOptions: { sourceMap: true } },
                    },
                ],
            },
            {
                test: /\.tsx$/,
                use: [
                    'babel-loader',
                    'vue-jsx-hot-loader',
                    {
                        loader: 'ts-loader',
                        options: { appendTsxSuffixTo: [/\.vue$/], compilerOptions: { sourceMap: true } },
                    },
                ],
            },
            {
                test: /\.vue$/,
                use: [{ loader: 'vue-loader', options: { compilerOptions: { preserveWhitespace: false } } }],
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: path.resolve('./src/index.html'),
            filename: 'js.html',
            chunks: ['js'],
        }),
        new HtmlPlugin({
            template: path.resolve('./src/index.html'),
            filename: 'ts.html',
            chunks: ['ts'],
        }),
    ],
};
