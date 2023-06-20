exports.install = function (Vue, ops) {
    Vue.prototype.kingLog = function (val){
        if(ops){
            console.log(val)
        }
    }

}