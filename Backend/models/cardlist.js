'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CardList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  CardList.init({
    listId: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model: 'lists',
        key: 'id',
      }
    }, 
    cardId: {
      type: DataTypes.INTEGER,
      onDelete:'CASCADE',
      references:{
        model: 'cards',
        key: 'id',
      }
    }
  }, {
    sequelize,
    modelName: 'CardList',
    tableName: 'cardlists',
  });
  return card_list;
};