'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cards', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      owned: {
        type: Sequelize.BOOLEAN
      },
      quantity: {
        type: Sequelize.INTEGER
      },
      inWishList: {
        type: Sequelize.BOOLEAN
      },
      APIId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('cards');
  }
};