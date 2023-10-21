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
       password: '$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',
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
      password: '$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',
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
      password: '$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',
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
      password: '$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',
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
      password: '$2a$10$8EypC5JM8TjWD9gu5/hmKu2cAq9W9B5H6RdL5IzfQ/AG5PB8/VpSS',
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
