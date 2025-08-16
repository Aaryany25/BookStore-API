const fs = require("node:fs")
exports.Logger = function(req,res,next){
    const log= `\n[${Date.now()} ${req.method} ${req.path}]`
fs.appendFileSync('logs.txt',log,"utf-8")
next()
}
