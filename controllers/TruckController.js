const { Truck } = require('../models')
const { Op } = require('sequelize')

const GetTrucks = async (req, res) => {
  try {
    const trucks = await Truck.findAll()
    res.send(trucks)
  } catch (error) {
    throw error
  }
}

const CreateTruck = async (req, res) => {
  try {
    const truck = await Truck.create({ ...req.body })
    res.send(truck)
  } catch (error) {
    throw error
  }
}

const UpdateTruck = async (req, res) => {
  try {
    const truck = await Truck.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(truck)
  } catch (error) {
    throw error
  }
}

const DeleteTruck = async (req, res) => {
  try {
    await Truck.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Car Deleted', payload: req.params.car_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetTrucks,
  CreateTruck,
  UpdateTruck,
  DeleteTruck
}
