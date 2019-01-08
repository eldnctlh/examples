const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['./src/index.js', './src/style.scss'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'development',
    watch: true,
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
	    		test: /\.css$/,
	    		exclude: /node_modules/,
	    		use: [
                    MiniCssExtractPlugin.loader,
	    			{
                        loader: 'css-loader',
	    				options: {
	    					modules: true,
	    					localIdentName: '[name]__[local]__[hash:base64:5]'
	    				}
                    }
	    		]
            },
            {
                test: /\.scss$/,
                use: 
                    ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: [
                            'css-loader',
                            'sass-loader'
                        ]
                    })
            }
        ]
    },
    plugins: [
		new CopyWebpackPlugin([
			{
				from: path.resolve('./src/static'),
				to: path.resolve('./dist')
			}
        ]),
        new ExtractTextPlugin('../src/style.css'),
		new MiniCssExtractPlugin({
			filename: 'style.css'
         }),        
	]
};