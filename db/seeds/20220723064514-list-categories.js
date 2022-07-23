'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Categories',[
      {nama : 'Elektronik'}, 
      {nama : 'Fashion Pria'}, 
      {nama : 'Fashion Wanita'}, 
      {nama : 'Handphone & Tablet'}, 
      {nama : 'Olahraga'}, 
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories',null,{})
  }
};
