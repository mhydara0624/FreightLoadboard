'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Truck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Truck.belongsTo(models.User, { foreignKey: 'owner_id' })
    }
  }
  Truck.init(
    {
      owner_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      year: DataTypes.INTEGER,
      make: DataTypes.STRING,
      model: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Truck',
      tableName: 'trucks'
    }
  )
  return Truck
}
