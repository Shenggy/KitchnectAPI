var model = require('../models');
var IngredientPourRecetteModel = require('./IngredientPourRecetteModel');

class RecetteModel {

    constructor() {
        this.ingredientPourRecetteModel = new IngredientPourRecetteModel();
    }

    getAll() {
        //ne renvoie pas les ingrédients des recettes
        return new Promise(function(resolve) {
            model.Recette.findAll().then(function(result) {
                resolve(result);
            });
        });
    }

    getOne(id) {
        var self = this;
        return new Promise(function(resolve) {
            model.Recette.findByPk(id).then(function(result) {
                self.ingredientPourRecetteModel.getAllFromRecette(id).then(function(ingredientsPourRecette){
                        RecetteModel.getNomsIngredients(ingredientsPourRecette).then(function() {
                        result.dataValues.ingredients = ingredientsPourRecette;
                        console.log('0');
                        resolve(result);
                    });
                });
            });
        });
    }

    static getNomsIngredients(liste) {
        return new Promise(function(res) {
            var count = liste.length;
            liste.forEach(function (ingredientPourRecette) {
                model.Ingredient.findByPk(
                    ingredientPourRecette.dataValues.IngredientId
                ).then(function (ingredient) {
                    ingredientPourRecette.dataValues.nom = ingredient.dataValues.nom;
                    console.log('1');
                    count--;
                    if(count==0)
                        res();
                });
            });
        });
    }

    delete(id) {
        var self = this;
        return new Promise(function(resolve) {
            self.ingredientPourRecette.deleteFromRecette(id).then(function() {
                model.Recette.destroy({where: {id: id}}).then(function (result) {
                    resolve(result);//return null si existe pas
                });
            });
        });
    }

    create(body) {
        return new Promise(function(resolve) {
            model.Recette.create(body).then(function (result) {
                resolve(result);//return full object
            });
        });
    }

    update(id, body) {
        return new Promise(function(resolve) {
            model.Recette.findByPk(id).then(function (result) {
                if(body.nom!=null)
                    result.update({nom: body.nom});
                if(body.difficulte!=null)
                    result.update({difficulte: body.difficulte});
                if(body.note!=null)
                    result.update({note: body.note});
                if(body.nbPersonnes!=null)
                    result.update({nbPersonnes: body.nbPersonnes});
                if(body.temps!=null)
                    result.update({temps: body.temps});
                resolve(result);
            });
        });
    }
}

module.exports = RecetteModel;