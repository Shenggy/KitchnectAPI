var model = require('../models');

class ElementConnecteModel {

    constructor() {
    }
    update(id, body) {
        console.log(body);
        return new Promise(function(resolve) {
            model.ElementConnecte.findByPk(id).then(function (result) {
                if(body.etat!=null)
                    result.update({etat: body.etat});
                resolve(result);
            });
        });
    }
}

module.exports = ElementConnecteModel;