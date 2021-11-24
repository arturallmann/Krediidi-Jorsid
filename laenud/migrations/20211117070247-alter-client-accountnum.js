'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.changeColumn('Client', 'regNr', {
      type: Sequelize.STRING,
      allowNull: true
    }),
    await queryInterface.changeColumn('Client', 'accountnum', {
      type: Sequelize.STRING,
      allowNull: false
    }),
      await queryInterface.changeColumn('Loan', 'paymentPeriod', {
      type: Sequelize.STRING
    })
  },

  down: async (queryInterface, Sequelize) => {

  }
};
