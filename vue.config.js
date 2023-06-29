const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    pages:{
        index:{
            entry:'./src/main.js',
            title:'装备灵魂五行模拟器'
        },
        answer:{
            entry:'./src/answer.js',
            title:'星辰答题器'
        }
    },
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
})


