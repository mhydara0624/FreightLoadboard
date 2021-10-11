const { User, Truck, Load } = require('../models')

const GetAllUserProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndTrucks = await User.findByPk(req.params.id, {
      include: [{ model: Truck }]
    })
    res.send(userAndTrucks)
  } catch (error) {
    throw error
  }
}

const GetBrokerLoads = async (req, res) => {
  try {
    const userAndLoads = await User.findByPk(req.params.id, {
      include: [{ model: Load }]
    })
    res.send(userAndLoads)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllUserProfiles,
  GetUserProfile,
  GetBrokerLoads
}
