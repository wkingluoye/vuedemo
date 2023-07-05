const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    productionSourceMap: false,
    pages:{
        index:{
            entry:'./src/main.js',
            title:'星辰小工具'
        },
        // answer:{
        //     entry:'./src/answer.js',
        //     title:'答题器'
        // }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {// 为生产环境修改配置...
            config.mode = 'production';
            config["performance"] = {//打包文件大小配置
                "maxEntrypointSize": 10000000,
                "maxAssetSize": 30000000
            }
        }
    }
})


