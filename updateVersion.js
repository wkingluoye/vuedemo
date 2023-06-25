let fs = require("fs")

const versionFilePath = './src/json/answer_version.json'

Date.prototype.format = function(format, GMT=8) {
    this.setTime(this.getTime() + GMT * 60 * 60 * 1000)
    var o = {
        "M+": this.getMonth() + 1, //month
        "d+": this.getDate(), //day
        "h+": this.getHours(), //hour
        "m+": this.getMinutes(), //minute
        "s+": this.getSeconds(), //second
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
        "S": this.getMilliseconds() //millisecond
    }
    if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
        (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(format))
            format = format.replace(RegExp.$1,
                RegExp.$1.length == 1 ? o[k] :
                    ("00" + o[k]).substr(("" + o[k]).length));
    return format;
}
const getAnswerVersion = () => {
    let content = fs.readFileSync(versionFilePath)
    return JSON.parse(content.toString('utf8'))
}
let av = getAnswerVersion()
const updateAnswerVersion = () => {
    var now = new Date();
    av.lastBuildTime = now.format("yyyy-MM-dd hh:mm:ss")
    fs.writeFile(versionFilePath, JSON.stringify(av, null, '\t'), err => {
        if (err) {
            console.log('update version error:', err)
        } else {
            console.log('update version success: ' + av.lastBuildTime)
        }
    })
}

updateAnswerVersion()

