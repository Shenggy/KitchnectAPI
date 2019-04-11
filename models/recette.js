'use strict';
module.exports = (sequelize, DataTypes) => {
    var Recette = sequelize.define('Recette', {
        nom: DataTypes.STRING,
        difficulte: DataTypes.INTEGER,
        note: DataTypes.INTEGER,
        nbPersonnes: DataTypes.INTEGER,
        temps: DataTypes.INTEGER
    }, {
        freezeTableName: true
    });


    Recette.associate = function(models) {
        Recette.belongsToMany(models.Ingredient, {through: models.IngredientPourRecette});
    }

    return Recette;
};