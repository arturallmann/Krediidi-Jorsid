'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Client', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        // references: {
        //   model: "Loan",
        //   key: "id"
        // },
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
        type: Sequelize.STRING     },
    });
    await queryInterface.createTable('Loan', {
      id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      clientId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        foreignKey: true,
        references: {
          model: "Client",
          key: "id"
        }
      },
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
        type: Sequelize.INTEGER      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
    await queryInterface.dropTable('Loans');
  }
};