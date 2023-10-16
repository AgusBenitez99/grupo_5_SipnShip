'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert(
        'Users',
         [
          {
       name: 'Agustin',
       lastName: 'Benitez',
       birthdate: '1999-01-18',
       avatar: null,
       email: 'abenitez@gmail.com',
       password: '2a$10$LkHKTo8j7E5xNCkOPFKvjeXeEYEFNwiOTLbfj0IqSoT2NFLk6Rp7e',
       RolId: 1,
       createdAt: new Date(),
       updatedAt: new Date(),
     },
     {
      name: 'Rodrigo',
      lastName: 'Alvarez',
      birthdate: '1995-03-08',
      avatar: null,
      email: 'ralvarez@gmail.com',
      password: '$2a$10$7YTNfUqlwKp2Sa/jxMSsvOsv6wdiPzKMoHp7dHAiVMFB6KEospXZK',
      RolId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Gonzalo',
      lastName: 'Armoa',
      birthdate: '1992-06-22',
      avatar: null,
      email: 'garmoa@gmail.com',
      password: '$$2a$10$l2LKE4LTT2VTuL375uuS1er2D5LDzRxoRK..aeQxqJjl1Vvk3JWDC',
      RolId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Mauro',
      lastName: 'Bustos',
      birthdate: '1990-05-05',
      avatar: null,
      email: 'mbustos@gmail.com',
      password: '$2a$10$3Eqbu.G58TUvEzRq2IedxeZQreo2w6qowwgezikcyDapm6TnS1sMa',
      RolId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'User Name',
      lastName: 'User lastName',
      birthdate: '2020-02-20',
      avatar: null,
      email: 'user@gmail.com',
      password: '$2a$10$WGg9NBLzgfC8V/jbUH4wtOkQi53/057E4RpbopKp9uc6XzJLgsLPe',
      RolId: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ],
     {}
     );
  
  },

  async down (queryInterface, Sequelize) {

     await queryInterface.bulkDelete('Users', null, {});
   
  }
};
