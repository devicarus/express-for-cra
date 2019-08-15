// Create new router
var express = require('express')
var router = express.Router({
    mergeParams: true
})

// Require the MongoDB (mongoose) connection
require('../connect')

// Load NAME model
var NAME = require('../models/NAME')

// Routes...
router.post('/add', function (req, res, next) {
    data = new NAME({
        name: req.body.name
    })
    data.save(function (err) {
        if (err) return handleError(err);
        res.send('Saved')
    });
})

router.get('/list', function (req, res, next) {
    NAME.find(null, 'name').then(function (data) {
        res.send(data)
    })
})

router.get('/find', function (req, res, next) {
    NAME.findById(req.query.id).then(function (data) {
        res.send(data)
    })
})

// Export the router
module.exports = router