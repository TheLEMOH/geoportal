
const webpack = require("webpack");
module.exports = {
    publicPath: "/",
    configureWebpack: {
        plugins: [
            new webpack.ProvidePlugin({
                'window.Quill': 'quill/dist/quill.js',
                Quill: 'quill/dist/quill.js'
            })
        ]
    }
}