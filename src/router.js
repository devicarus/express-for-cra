var express = require('express')
var router = express.Router({mergeParams: true}) // don't forget the parent params!
var fs = require('fs')
var rmext = require('rmext')

fs.readdirSync(__dirname + '/routes').map(function (route) {
    router.use(`/${rmext(route)}`, require(`./routes/${route}`))
})

module.exports = router
