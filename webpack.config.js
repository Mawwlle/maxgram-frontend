const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

const reFavicon = /favicon(:?-\d{2}x\d{2}?)?\.(:?ico|png)/;

module.exports = (env = {}) => {

    return {
        entry: "./src/index.tsx",
        mode: "development",
        target: "web",
        output: {
            path: path.resolve(__dirname, "dist/"),
            filename: "bundle.js",
        },
        devServer: {
            host              : '0.0.0.0',
            port              : 8080,
            compress          : true,
            historyApiFallback: {
                disableDotRule: true
            },
            open              : false,
            proxy             : [{
                context     : ['**/api/**'],
                target      : 'http://127.0.0.1:8000',
                secure      : false,
                changeOrigin: true,
                logLevel    : 'debug'
            }]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, "./src/index.html"),
            }),
        ],
        resolve: {
            extensions: [".js", ".ts", ".tsx", ".jsx"],
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'ts-loader',
                },
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
                        },
                    },
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    test: /\.(png|svg|ttf|ico)$/,
                    type: "asset/resource",
                },
            ]
        }
    }
}