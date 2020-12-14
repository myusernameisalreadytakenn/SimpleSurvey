const connection = require('../connection');
const Sequilize = require('sequelize');

const User = require('./user.js');
const Project = require('./project.js');

class Access extends Sequilize.Model {}

Access.init(
    {
       
        role: {
            type: Sequilize.STRING(100),
            allowNull: false
        },
        
    {
        sequelize: connection,
        freezeTableName: true,
        modelName: 'Access'
    }
);

User.hasMany(Access);
Project.hasMany(Access);

Access.belongsTo(User, {
    foreignKey: 'user_id'
});

Access.belongsTo(Project, {
    foreignKey: 'project_id'
});

module.exports = Access
