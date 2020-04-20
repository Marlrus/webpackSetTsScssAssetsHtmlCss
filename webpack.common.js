module.exports = {
    entry: {
        main: './src/app.ts',
        vendor: './src/vendor.ts'
    },
    optimization:{
        splitChunks: {
            chunks: 'all'
        }
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(svg|png|jpg|jpeg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'[name].[hash].[ext]',
                        outputPath: 'assets'
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    }
};