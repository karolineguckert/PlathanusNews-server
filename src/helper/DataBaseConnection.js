const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('TableName', 'yourUser', 'yourPassword', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;

