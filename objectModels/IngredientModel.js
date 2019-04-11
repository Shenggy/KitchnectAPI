var model = require('../models');
var IngredientPourRecetteModel = require('./IngredientPourRecetteModel');

class IngredientModel {

    constructor() {
        this.ingredientPourRecetteModel = new IngredientPourRecetteModel();
    }

    getAll() {
        return new Promise(function(resolve) {
            model.Ingredient.findAll().then(function(result) {
                resolve(result);
            });
        });
    }

    getOne(id) {
        return new Promise(function(resolve) {
            model.Ingredient.findByPk(id).then(function (result) {
                resolve(result);//return null si existe pas
            });
        });
    }

    delete(id) {
        var self = this;
        return new Promise(function(resolve) {
            self.ingredientPourRecetteModel.deleteFromIngredient(id).then(function() {
                model.Ingredient.destroy({where: {id: id}}).then(function (result) {
                    resolve(result);//return null si existe pas
                });
            });
        });
    }

    create(body) {
        return new Promise(function(resolve) {
            model.Ingredient.create(body).then(function (result) {
                resolve(result);//return full object
            });
        });
    }

    update(id, body) {
        return new Promise(function(resolve) {
            model.Ingredient.findByPk(id).then(function (result) {
                if(body.nom!=null)
                    result.update({nom: body.nom});
                resolve(result);
            });
        });
    }
}

module.exports = IngredientModel;