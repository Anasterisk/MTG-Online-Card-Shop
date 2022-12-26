'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class List extends Model {
   
    static associate(models) {
      List.belongsTo(models.User,{
        foreignKey:'userId',
        as:'userlist',
        onDelete:'CASCADE',
        onUpdate:'CASCADE'
      })
      List.belongsToMany(models.Card, { 
        foreignKey: 'cardId',
        as: 'lists',
        through: models.Card_list,
        uniqueKey: false
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
    name:{ 
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        notNull:{
          msg: 'Please name your deck at the very least'
        }
      }
    },
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