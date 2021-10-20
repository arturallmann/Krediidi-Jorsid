'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER      },
      firstName: {
        allowNull: false,
        type: Sequelize.STRING      },
      lastName: {
        allowNull: false,
        type: Sequelize.STRING      },
      contact: {
        allowNull: false,
        type: Sequelize.STRING      },
      accountnum: {
        allowNull: false,
        type: Sequelize.INTEGER      },
      corporation: {
        allowNull: false,
        type: Sequelize.BOOLEAN    },
        regNr: {
          allowNull: false,
          type: Sequelize.STRING     }
    });
    await queryInterface.createTable('Loans', {
      clientId: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER      },
      amount: {
        allowNull: false,
        type: Sequelize.INTEGER      },
      interest: {
        allowNull: false,
        type: Sequelize.INTEGER      },
      penalty: {
        allowNull: false,
        type: Sequelize.INTEGER      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE      },
      paymentPeriod: {
        allowNull: false,
        type: Sequelize.INTEGER      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
    await queryInterface.dropTable('Loans');
  }
};