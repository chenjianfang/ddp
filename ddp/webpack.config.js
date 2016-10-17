var webpack = require('webpack');
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry:{
		entry:'./src/js/entry.js'
	},
	output:{
		path:'dist/js',
		filename:'[name].js'
	},
	module:{
		loaders:[
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel?presets[]=es2015"},
			{test:/\.vue$/,loader:'vue'}
		]
	},
	vue:{
		loaders:{
			css: ExtractTextPlugin.extract("css"),
			sass: ExtractTextPlugin.extract("css!sass")
		}
	},
	plugins:[
		new ExtractTextPlugin("style.css")
	]
};