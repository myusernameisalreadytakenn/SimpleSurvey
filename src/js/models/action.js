const connection = require("../connection");
const Sequelize = require("sequelize");


const Model = Sequelize.Model;
class Action extends Model {}
Role.init({

    RoleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Role: {
        type: Sequelize.STRING(45)
    }
}, {
    sequelize: connection,
    modelName: 'Action'

});

module.exports = Action;
