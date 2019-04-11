var ElementConnecteModel = require('../objectModels/ElementConnecteModel')
var express = require('express');
var router  = express.Router();

var ElementConnecteModel = new ElementConnecteModel();

router.put('/elementConnecte/:id', function(req, res) {
    ElementConnecteModel.update(req.params.id, req.body).then(function(result) {
        res.json(result);
    })
});

module.exports = router;