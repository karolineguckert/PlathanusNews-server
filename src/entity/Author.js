const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');

class Author extends Model {}

Author.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
    },
}, {
    sequelize,
    modelName: 'author'
});

console.log(Author === sequelize.models.author);

module.exports = Author;
