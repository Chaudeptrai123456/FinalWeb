'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  dish.init({
 
    namedish: DataTypes.STRING,
    price: DataTypes.INTEGER,
    decription:DataTypes.TEXT,
    status:DataTypes.STRING,
   image:DataTypes.STRING
    
  }, {
    sequelize,
    modelName: 'dish',
  });
  return dish;
};