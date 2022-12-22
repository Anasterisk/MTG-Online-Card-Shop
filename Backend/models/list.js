'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
   
    static associate(models) {
      List.belongsTo(models.User,{
        foreignKey:'user_id',
        as:'user',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
    }
  }
  List.init({
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references:{
        model: 'users',
        key: 'id'
      }
    },
    cardId:{
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model: 'cards',
        key: 'id'
      }
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER,
    wishlist: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'List',
    tableName: 'lists'
  });
  return List;
};