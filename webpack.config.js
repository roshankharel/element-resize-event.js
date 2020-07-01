const path = require("path");

module.exports = {
    entry: './src/element-resize-event.js',
    devtool: 'source-map',
    mode: 'production',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'element-resize-event.js',
        library: 'ObserveResize',
        libraryTarget: 'umd'
    },
    module: {
        unsafeCache: false,
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js'],
        modules: [path.resolve(__dirname, 'src')],
    },
};