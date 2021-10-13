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
        type: Sequelize.INTEGER      },
      interest: {
        type: Sequelize.INTEGER      },
      penalty: {
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