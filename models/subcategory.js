'use strict';
module.exports = (sequelize, DataTypes) => {
    const subcategory = sequelize.define('subcategory', {
        idSubcategory: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
       catName: DataTypes.STRING,
    catDescription: DataTypes.STRING,
    catStatus: DataTypes.CHAR
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'subcategory',
        classMethods: {}
    });
    subcategory.associate = function(models) {
    // associations can be defined here
    };
    return subcategory;
};