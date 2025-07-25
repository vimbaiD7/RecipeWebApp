function logging(req,res, next) {
    console.log("Log")
    next()
}
module.exports = logging; 