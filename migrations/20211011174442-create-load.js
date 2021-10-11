'use strict'
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('loads', {
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
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY,
        defaultValue: new Date()
      }
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('loads')
  }
}
