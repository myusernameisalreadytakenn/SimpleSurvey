const connection = require("../connection");
const Sequelize = require("sequelize");


const Model = Sequelize.Model;
class Action extends Model {}
Action.init({

    ActionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
}, {
    sequelize: connection,
    modelName: "Action",
    tableName: "Action",
    freezeTableName: true

});

module.exports = Action;
