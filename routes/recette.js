var models  = require('../models');
var RecetteModel = require('../objectModels/RecetteModel')
var express = require('express');
var router  = express.Router();

var recetteModel = new RecetteModel();

router.get('/recettes', function(req, res) {
    recetteModel.getAll().then(function(result) {
        res.json(result);
    });
});

router.get('/recette/:id', function(req, res) {
    recetteModel.getOne(req.params.id).then(function(result) {
        res.json(result);
    });
});

router.delete('/recette/:id', function(req, res) {
    recetteModel.delete(req.params.id).then(function(result) {
        res.json(result);//returns 1 or 0
    });
});

router.post('/recette', function(req, res) {
    recetteModel.create(req.body).then(function(result) {
        res.json(result);//return full object
    });
});

router.put('/recette/:id', function(req, res) {
    recetteModel.update(req.params.id, req.body).then(function(result) {
        res.json(result);
    });
});

module.exports = router;