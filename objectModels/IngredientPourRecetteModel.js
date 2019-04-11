var model = require('../models');

class IngredientPourRecetteModel {

    getAllFromRecette(id) {
        return new Promise(function(resolve) {
            model.IngredientPourRecette.findAll({where:{RecetteId : id}}).then(function(result) {
                resolve(result);
            });
        });
    }

    getAllFromIngredient(id) {
        return new Promise(function(resolve) {
            model.IngredientPourRecette.findAll({where:{IngredientId : id}}).then(function(result) {
                resolve(result);
            });
        });
    }

    deleteFromRecette(id) {
        return new Promise(function(resolve) {
            model.IngredientPourRecette.destroy({where: {RecetteId: id}}).then(function (result) {
                resolve(result);//return null si existe pas
            });
        });
    }

    deleteFromIngredient(id) {
        return new Promise(function(resolve) {
            model.IngredientPourRecette.destroy({where: {IngredientId: id}}).then(function (result) {
                resolve(result);//return null si existe pas
            });
        });
    }

    create(body) {
        return new Promise(function(resolve) {
            model.IngredientPourRecette.create(body).then(function (result) {
                resolve(result);//return full object
            });
        });
    }
}

module.exports = IngredientPourRecetteModel;