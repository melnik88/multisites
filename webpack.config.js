const path = require('path');

module.exports = {
    entry: {
        site1: path.resolve(__dirname, 'src/site1', 'index.jsx'),
        site2: path.resolve(__dirname, 'src/site2', 'index.jsx')
    },
    output: {
        path: path.resolve(__dirname, 'output'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx/,
                use: {
                    loader: 'babel-loader',
                    options: { presets: ['react', 'es2015'] }
                }
            },
            {
                test: /\.scss/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};