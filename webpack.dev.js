const PROJECT_ROOT = __dirname
const SRC_DIR = PROJECT_ROOT + '/src'
const HtmlWebpackPlugin = require('html-webpack-plugin')

const BABEL_LOADER_QUERY = {
	presets: [['es2015', {modules: false}], 'react', 'react-optimize'],
	plugins: [
		'transform-object-rest-spread',
		'transform-class-properties',
		'transform-decorators-legacy'
	]
}

module.exports = {
	devtool: 'source-map',
	context: SRC_DIR,
	entry: {
		app: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'react-hot-loader/patch',
			'./app.js'
		]
	},
	output: {
		path: SRC_DIR + '/dist',
		filename: 'bundle.js'
	},
	devServer: {
		hot: true,
		contentBase: SRC_DIR + '/dist'
	},
	module: {
		rules: [{
			test: /\.js/,
			loader: 'babel-loader',
			query: BABEL_LOADER_QUERY,
			exclude: /node_modules/
		}, {
			test: /\.less$/,
			loader: 'style-loader!css-loader!less-loader'
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader'
		}, {
			test: /\.(woff|woff2)$/,
			loader: 'url-loader?limit=100000'
		}, {
			test: /\.(svg|png|jpg|ttf|eot)$/,
			loader: 'file-loader'
		}, {
			test: /\.json$/,
			loader: 'json-loader'
		}]
	},
	plugins: [new HtmlWebpackPlugin({
		template: 'dist/index.html',
		filename: 'dist/index.html',
		inject: 'body'
	})]
}
