'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.List,{
        foreignKey: 'listId',
        as: 'user_list',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      })
      User.hasMany(model.Card,{
        foreignKey: 'cardId',
        as:'cards_owned',
        onDelete:'CASCADE',
        onUpdate:'CASCADE',
      })
    }
  }
  User.init({
    name: DataTypes.STRING,
    username:{
      type:DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate: {
        notNull:{
          msg: 'Please enter an Username'
        }
      }
    } ,
    email:{
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          msg: "Must be an valid E-mail"
        }
      }
    },
    password:{ 
      type:DataTypes.STRING,
      validate:{
        len:{
          args: [8],
          msg: "Must be at least 8 characters long"
        }
      }
      }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};