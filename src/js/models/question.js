const connection = require("../connection");
const Sequelize = require("sequelize");


const Model = Sequelize.Model;
class Question extends Model {}
Question.init({

    QuestionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    Status: {
        type: Sequelize.STRING(45)
    }
}, {
    sequelize: connection,
    modelName: 'Question'

});

module.exports = Question;
