'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Truck, { foreignKey: 'owner_id' })
      User.hasMany(models.Load, { foreignKey: 'broker_id' })
    }
  }
  User.init(
    {
      email: DataTypes.STRING,
      password_digest: DataTypes.STRING,
      company: DataTypes.STRING,
      broker: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'User',
      tableName: 'users'
    }
  )
  return User
}
