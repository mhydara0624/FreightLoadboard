'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Loads', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pickup: {
        type: Sequelize.STRING
      },
      drop: {
        type: Sequelize.STRING
      },
      distance: {
        type: Sequelize.INTEGER
      },
      rate: {
        type: Sequelize.STRING
      },
      company: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      broker_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Loads');
  }
};