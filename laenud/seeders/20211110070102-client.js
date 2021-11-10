'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Client', [{
     id: 0,
     firstName: 'John',
     lastName: 'Doe',
     contact: 'somewhere',
     accountnum: 758476997057,
     corporation: false,
     regNr: ""
   }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Client', null, {});
  }
};
