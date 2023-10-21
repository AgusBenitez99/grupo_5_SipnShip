'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      price: {
        type: Sequelize.INTEGER
      },
      size: {
        type: Sequelize.STRING
      },
      mainImage: {
        type: Sequelize.STRING
      },
      discount: {
        type: Sequelize.INTEGER
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Categories'
          }
        }
      },
      brandId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Brands'
          }
        }
      },
      sectionId: {
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Sections'
          }
        }
      },
      stock: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};