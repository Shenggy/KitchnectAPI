'use strict';
module.exports = (sequelize, DataTypes) => {
    var IngredientPourRecette = sequelize.define('IngredientPourRecette', {
        qte: DataTypes.INTEGER,
        unite: DataTypes.STRING
    }, {
        freezeTableName: true
    });

    return IngredientPourRecette;
};