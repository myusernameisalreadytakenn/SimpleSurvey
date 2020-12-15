const connection = require("../connection");
const Sequelize = require("sequelize");


const Model = Sequelize.Model;
class Answer extends Model {}
Answer.init({

    AnswerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Answer: {
        type: Sequelize.STRING(45)
    }
}, {
    sequelize: connection,
    modelName: 'Answer'

});

module.exports = Answer;
