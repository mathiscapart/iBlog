const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Category', {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        key: {
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