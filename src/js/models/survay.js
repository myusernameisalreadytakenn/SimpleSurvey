const connection = require("../connection");
const Sequelize = require("sequelize");


const Model = Sequelize.Model;
class Survay extends Model {}
Survay.init({

   SurvayId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Survay: {
        type: Sequelize.STRING(45)
    }
}, {
    sequelize: connection,
    modelName: 'Survay'

});

module.exports = Survay;
