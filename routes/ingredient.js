var IngredientModel = require('../objectModels/IngredientModel')
var express = require('express');
var router  = express.Router();

var ingredientModel = new IngredientModel();

router.get('/ingredients', function(req, res) {
    ingredientModel.getAll().then(function(result) {
        res.json(result);
    })
});

router.get('/ingredient/:id', function(req, res) {
    ingredientModel.getOne(req.params.id).then(function(result) {
        res.json(result);
    })
});

router.delete('/ingredient/:id', function(req, res) {
    ingredientModel.delete(req.params.id).then(function(result) {
        res.json(result);
    })
});

router.post('/ingredient', function(req, res) {
    ingredientModel.create(req.body).then(function(result) {
        res.json(result);
    })
});

router.put('/ingredient/:id', function(req, res) {
    ingredientModel.update(req.params.id, req.body).then(function(result) {
        res.json(result);
    })
});

module.exports = router;