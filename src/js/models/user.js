const connection = require("../connection");
const Sequelize = require("sequelize");


const Model = Sequelize.Model;
class User extends Model {}

User.init({

    UserId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    username: {
        type: Sequelize.STRING(45),
        allowNull: false
    },
    password: {
        type: Sequelize.STRING(32),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    
}, {
    sequelize: connection,
    modelName: 'user',
    tableName: "user",
    freezeTableName: true

});

module.exports = user;
