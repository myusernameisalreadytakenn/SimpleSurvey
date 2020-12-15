const connection = require("../connection");
const Sequelize = require("sequelize");
const Action = require("./project");
const User = require("./user");


const Model = Sequelize.Model;
class Access extends Model {}
Access.init({

    ActionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Action,
            key: "ActionId"
        }
    },
    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: User,
            key: "UserId"
        }
    },
   
}, {
    sequelize: connection,
    modelName: "Access",
    tableName: "Access",
    freezeTableName: true

});


module.exports = Access;
