const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: {
		app: path.resolve("src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "bundle.[contenthash].js",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss|.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
      filename: "style.[contenthash].css"
    }),
		new HtmlWebpackPlugin({
			title: "Webpack",
			filename: "index.html",
		}),
	],
};
