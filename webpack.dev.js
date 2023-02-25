const path = require("path")
const ESLintPlugin = require("eslint-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const common = require("./webpack.common")
const { merge } = require("webpack-merge")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        port: "5000",
        static: {
            directory: path.join(__dirname, "public")
        },
        historyApiFallback: true,
        open: true,
        hot: true,
        liveReload: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [new ESLintPlugin()]
})
