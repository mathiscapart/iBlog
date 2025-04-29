const {DataTypes} = require("sequelize");
const bcrypt = require("bcrypt");

module.exports = (sequelize) => {
    return sequelize.define('User', {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        role: {
            type: DataTypes.BOOLEAN, // 0/false user, 1/true admin
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            unique: false,
            len: [2, 10]
        }
    }, {
        alter: true,
        paranoid: true,
        hooks: {
            async beforeCreate(attributes, ) {
                const salt = await bcrypt.genSalt(10);
                attributes.dataValues.password = await bcrypt.hash(attributes.dataValues.password, salt);
            },
            async beforeUpdate(instance, ) {
                const salt = await bcrypt.genSalt(10);
                instance.dataValues.password = await bcrypt.hash(instance.dataValues.password, salt);
            }
        }
    })
};