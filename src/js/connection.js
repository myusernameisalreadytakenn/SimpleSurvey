const Sequelize = require('sequelize');

const options = {
    database: 'test',
    username: 'admin',
    password: 'n03rn7tp',
    dialect: 'mysql',
    
    pool: {
        max: 5,
        idle: 30000,
        acquire: 60000,
    },
};

const sequelize = new Sequelize(options);

module.exports = sequelize;
