const path = require('path');

module.exports = {
    mode: 'production',
    context: path.resolve(__dirname, 'src'),
    entry: {
        luxon: './luxon.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'luxon.min.js',
        library: 'luxon',
        libraryTarget: 'window',
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
                        plugins: ['@babel/plugin-proposal-export-default-from']
                    }
                }
            }
        ]
    }
}