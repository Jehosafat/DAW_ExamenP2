'use strict';
const {
  Model
} = require('sequelize');
const dispostivo = require('./dispostivo');
module.exports = (sequelize, DataTypes) => {
  class tipo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.tipo.hasMany(models.dispostivo)
    }
  }
  tipo.init({
    descripcion: DataTypes.STRING,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo',
    tableName: 'tipos'
  });
  return tipo;
};