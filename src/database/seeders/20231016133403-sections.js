'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert(
        'Sections',
         [
          {
       name: 'Novedades',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      name: 'Ofertas',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Combos',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Populares',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ],
     {}
     );
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Sections', null, {});
   
  }
};
