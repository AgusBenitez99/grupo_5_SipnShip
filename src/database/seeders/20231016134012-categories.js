'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Categories',
      [
       {
    name: 'Vino',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
   name: 'Licor',
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
   name: 'Aperitivo',
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
   name: 'Cerveza',
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
   name: 'Whisky',
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
   name: 'Gin',
   createdAt: new Date(),
   updatedAt: new Date(),
 },
 {
  name: 'Vodka',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Ron',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Tequila',
  createdAt: new Date(),
  updatedAt: new Date(),
},
{
  name: 'Espumantes',
  createdAt: new Date(),
  updatedAt: new Date(),
}
 ],
   {}
   );

},

async down (queryInterface, Sequelize) {

   await queryInterface.bulkDelete('Categories', null, {});
 
}
};
