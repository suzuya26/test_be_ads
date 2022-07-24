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
      {name : 'Elektronik'}, 
      {name : 'Fashion Pria'}, 
      {name : 'Fashion Wanita'}, 
      {name : 'Handphone & Tablet'}, 
      {name : 'Olahraga'}, 
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
