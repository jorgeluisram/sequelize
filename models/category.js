

'use strict';
module.exports = (sequelize, DataTypes) => {
    const category = sequelize.define('category', {
        idcategory: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
      subcatName: DataTypes.STRING,
    subcatDescription: DataTypes.STRING,
    subcatStatus: DataTypes.STRING,
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'category',
        classMethods: {}
    });
    category.associate = function(models) {
    // associations can be defined here
    };
    return category;
};
