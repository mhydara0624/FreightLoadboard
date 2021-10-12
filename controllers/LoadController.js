const { Load } = require('../models')

const GetLoads = async (req, res) => {
  try {
    const loads = await Load.findAll()
    res.send(loads)
  } catch (error) {
    throw error
  }
}

const CreateLoad = async (req, res) => {
  try {
    const load = await Load.create({ ...req.body })
    res.send(load)
  } catch (error) {
    throw error
  }
}

const UpdateLoad = async (req, res) => {
  try {
    const load = await Load.update(
      { ...req.body },
      { where: { id: req.params.id }, returning: true }
    )
    res.send(load)
  } catch (error) {
    throw error
  }
}

const DeleteLoad = async (req, res) => {
  try {
    await Load.destroy({ where: { id: req.params.id } })
    res.send({ msg: 'Load Deleted', payload: req.params.car_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetLoads,
  CreateLoad,
  UpdateLoad,
  DeleteLoad
}
