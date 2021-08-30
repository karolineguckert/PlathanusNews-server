const { DataTypes, Model } = require('sequelize');
const sequelize = require('../helper/DataBaseConnection');
const Author = require('../entity/Author')

class Notices extends Model {}

Notices.init({
    id:{
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.STRING,
        allowNull: false
    },
}, {
    sequelize,
    modelName: 'notices'
});

Notices.belongsTo(Author, {foreignKey:'author_id', allowNull: false});

console.log(Notices === sequelize.models.notices);
module.exports = Notices;
