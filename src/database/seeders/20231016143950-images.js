'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert(
        'Images',
         [
          {
       file: '1702511996012_products_.jpg',
       productId: 5,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      file: '1702511996016_products_.jpg',
      productId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      file: '1702511996017_products_.jpg',
      productId: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      file: '1698031821286_products_.jpg',
      productId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
     file: '1698031821287_products_.jpg',
     productId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
     file: '1698031821288_products_.jpg',
     productId: 1,
     createdAt: new Date(),
     updatedAt: new Date(),
   },
   {
    file: '1702514263792_products_.png',
    productId: 7,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
   file: '1702514263793_products_.jpg',
   productId: 7,
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
   file: '1702514263796_products_.jpg',
   productId: 7,
   createdAt: new Date(),
   updatedAt: new Date(),
 },

   ],
     {}
     );
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Images', null, {});
   
  }
};
