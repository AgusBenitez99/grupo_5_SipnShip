'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert(
        'Rols',
         [
          {
       name: 'Admin',
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      name: 'Usuario',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ],
     {}
     );
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Rols', null, {});
   
  }
};

