'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        user_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        firstName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastName: {
            allowNull: false,
            type: DataTypes.STRING
        },
        birthday: {
            allowNull: false,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING,
            validate: {isEmail: true,   }
        },
        dni: {
            allowNull: false,
            type: DataTypes.STRING
        },
        phoneNumber: {
            allowNull: false,
            type: DataTypes.STRING
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING
        },
        state: {
            allowNull: false,
            type: DataTypes.STRING
        },
        town: {
            allowNull: false,
            type: DataTypes.STRING
        },
        type: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'user',
        classMethods: {}
    });
    User.associate = function(models) {
    // associations can be defined here
    };
    return User;
};