// Create new router
var express = require('express')
var router = express.Router({
    mergeParams: true
})

// Require the MongoDB (mongoose) connection
require('../connect')

// Load NAME model
var capNAME = require('../models/capNAME')

// Routes...
router.post('/add', function (req, res, next) {
    data = new capNAME({
        name: req.body.name
    })
    data.save(function (err) {
        if (err) return handleError(err);
        res.send('Saved')
    });
})

router.get('/list', function (req, res, next) {
    capNAME.find(null, 'name').then(function (data) {
        res.send(data)
    })
})

router.get('/find', function (req, res, next) {
    capNAME.findById(req.query.id).then(function (data) {
        res.send(data)
    })
})

// Export the router
module.exports = router