'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol, {
        as : 'rol',
        foreignKey : 'rolId'
      });
      User.belongsToMany(models.Product, {
        as : 'favorites',
        foreignKey : 'UserId',
        otherKey : 'productId',
        through : 'Favorites'
      });

/*       User.belongsTo(models.Address, {
        as : 'addresses',
        foreignKey : 'userId'
      });

      User.hasMany(models.Order, {
        as : 'order',
        foreignKey : 'userId'
      }); */
    }
  }
  User.init({
    name: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    avatar: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    rolId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};