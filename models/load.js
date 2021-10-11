'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Load extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Load.belongsTo(models.User, { foreignKey: 'broker_id' })
    }
  }
  Load.init(
    {
      pickup: DataTypes.STRING,
      drop: DataTypes.STRING,
      distance: DataTypes.INTEGER,
      rate: DataTypes.STRING,
      company: DataTypes.STRING,
      phone: DataTypes.STRING,
      broker_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'Load',
      tableName: 'loads'
    }
  )
  return Load
}
