'use strict';
module.exports = (sequelize, DataTypes) => {
    var ElementConnecte = sequelize.define('ElementConnecte', {
        nom: DataTypes.STRING,
        etat: DataTypes.BOOLEAN
    }, {
        freezeTableName: true
    });
    return ElementConnecte;
};