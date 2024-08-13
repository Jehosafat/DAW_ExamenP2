'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dispostivo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.dispostivo.belongsTo(models.tipo)
    }
    
  }
  dispostivo.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    ubicacion: DataTypes.STRING,
    id_tipo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'dispostivo',
    tableName: 'dispositivos'
  });
  return dispostivo;
};