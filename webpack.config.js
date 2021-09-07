const path = require('path');
const webpack = require('webpack');

module.exports = {
    //entry: './public/js/app.js',
    entry:'./public/js/app.js',
    output: {
        path: path.resolve(__dirname, './public/dist'),
        filename: 'bundle.js',

    },
    module:{
        rules: [
            {
                test: /\.m?js$/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}


// const path = require('path');
// const webpack = require('webpack');
// const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//     entry: path.resolve('public', 'js', 'app.js'),
//     //'./public/js/app.js',
//     output : {
//         filename : 'bundle.js',
//         path: path.join(__dirname, './public/dist'),
//         publicPath: './public'
//     }, 
//     plugins: [new HtmlWebpackPlugin({
//         template: path.resolve('views', 'index.pug')

//     })
// ],
//     module: {
//         rules: [
//             {
//                 test: /\.m?js$/,
//                 use : {
//                     loader: 'babel-loader', 
//                     options: {
//                         presets: ['@babel/preset-env']
//                     }
//                 }
//             }
//         ]
//     }
// }
