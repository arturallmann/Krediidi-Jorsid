'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
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
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    //  await queryInterface.changeColumn('Client', 'accountnum', {
    //   type: Sequelize.INTEGER,
    //   allowNull: false
    // }),
    // await queryInterface.changeColumn('Client', 'regNr', {
    //   type: Sequelize.STRING,
    //   allowNull: false
    // }),
    //   await queryInterface.changeColumn('Loan', 'paymentPeriod', {
    //   type: Sequelize.INTEGER
    // })
  }
};
