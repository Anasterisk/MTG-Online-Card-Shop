'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Card.belongsToMany(models.User,{
        foreignKey: 'userId',
        as: 'cards_owned',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      })
      Card.belongsToMany(models.List,{
        foreignKey: 'listId',
        through: model.CardList,
        as: 'cards',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
        uniqueKey: false
      })
    }
  }
  Card.init({
    userId:{
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references:{
        model: 'users',
        key: 'id'
      }
    },
    listId:{
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references:{
        model: 'lists',
        key: 'id'
      }
    },
    owned: DataTypes.BOOLEAN,
    quantity: DataTypes.INTEGER,
    inWishList: DataTypes.BOOLEAN,
    APIId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Card',
    tableName: 'cards'
  });
  return Card;
};