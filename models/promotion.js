
'use strict';
module.exports = (sequelize, DataTypes) => {
    const promotion = sequelize.define('promotion', {
        promotion_id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
      username: DataTypes.STRING,
    status: DataTypes.CHAR
    }, {
        timestamps: false,
        freezeTableName: true,
        tableName: 'promotion',
        classMethods: {}
    });
    promotion.associate = function(models) {
    // associations can be defined here
    };
    return promotion;
};