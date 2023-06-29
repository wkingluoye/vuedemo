exports.install = function (Vue, ops) {
    Vue.config.globalProperties.showLog = function (...val){
        if(ops){
            console.log(val)
        }
    }

}