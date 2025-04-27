const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Article', {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        shortDescription: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img:{
            type: DataTypes.TEXT,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        enable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    },{
        paranoid: true,
    })
}