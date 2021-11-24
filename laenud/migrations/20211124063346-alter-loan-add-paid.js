'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.createTable('Payment', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loanId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Loan",
          key: "id"
          }
        },
        paid: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        payment: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
        paymentTime: {
          allowNull: false,
          type: Sequelize.DATE
        },
        toBePaid: {
          allowNull: false,
          type: Sequelize.INTEGER
        },
      
    })
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.dropTable('Payment');
  }
};
