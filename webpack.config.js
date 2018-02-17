/* webpack.config.js */

const path                  = require('path');
const ExtractTextPlugin     = require('extract-text-webpack-plugin');
const BabelWebpackPlugin    = require('babel-minify-webpack-plugin');
const HtmlWebpackPlugin     = require('html-webpack-plugin');
const CleanWebpackPlugin    = require('clean-webpack-plugin');
const webpack               = require('webpack');

let NODE_ENV = "development";

if (process.env.NODE_ENV) {
    NODE_ENV = process.env.NODE_ENV.toLowerCase();
}

const plugins = 
[
    new HtmlWebpackPlugin
    (
        {
            title: 'Plattformer',
            filename: 'index.html',
            template: 'app/template.html',
            minify: NODE_ENV === 'production' ? {
                removeAttributeQuotes: true,
                collapseWhitespace: true,
                html5: true,
                minifyCSS: true,
                removeComments: true,
                removeEmptyAttributes: true,
            } : false,
        }
    ),

    // Create a NODE_ENV const https://webpack.js.org/plugins/define-plugin
    new webpack.DefinePlugin
    (
        {
            NODE_ENV: JSON.stringify(NODE_ENV),
        }
    ),

    new CleanWebpackPlugin(['dist']),
]

if (NODE_ENV === 'production') {
    plugins.push
    (
        new ExtractTextPlugin
        (
            {
                filename: 'css/style.css'
            }
        ),
        new BabelWebpackPlugin()
    );
}

const devStyleLoaders =
[
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
    },
    {
      loader: 'sass-loader',
    },
];

const productionStyleLoaders = ExtractTextPlugin.extract
(
    {
        fallback: 'style-loader',
        use:
        [
            {
                loader: 'css-loader',
                options:
                {
                    minimize: true,
                },
            },
            {
                loader: 'sass-loader',
            },
        ],
    }
);

module.exports =
{
    entry: path.resolve(__dirname, 'app/js/main.js'),
    output:
    {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'dist/'),
    },
    watch: NODE_ENV === 'development',
    watchOptions:
    {
        poll: 1000,
        aggregateTimeout: 100,
    },
    module:
    {
        rules:
        [
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'app/css'),
                use: NODE_ENV === 'production' ? productionStyleLoaders : devStyleLoaders,
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:
                [
                    {
                        loader: 'babel-loader',
                        options:
                        {
                            presets: ['env']
                        },
                    },
                ]
            },
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.jpg$/,
                use:
                [
                    {
                        loader: 'file-loader',
                        options:
                        {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: '/'
                        }
                    }

                ]
            },
        ]
    },
    devtool: NODE_ENV === 'production' ? "" : "source-map",
    plugins
}