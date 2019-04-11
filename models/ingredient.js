'use strict';
module.exports = (sequelize, DataTypes) => {
    var Ingredient = sequelize.define('Ingredient', {
        nom: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    Ingredient.associate = function(models) {
        Ingredient.belongsToMany(models.Recette, {through: models.IngredientPourRecette});
    };

    return Ingredient;
};