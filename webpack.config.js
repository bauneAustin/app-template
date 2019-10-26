const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: "./src/index.tsx",
	output: {
		path: path.resolve(__dirname, "build"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				loader: "awesome-typescript-loader"
			},
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
			{
				test: /\.scss$/,
				use: [
					{
					  loader: MiniCssExtractPlugin.loader
					},
					'css-loader',
					'sass-loader',
				  ],
			}
		]
	},
	devtool: "source-map",
	resolve: {
		extensions: [".js",".jsx", ".ts", ".tsx"]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./index.html"
		}),
		new MiniCssExtractPlugin({}),
	]
}
