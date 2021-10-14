import Client from './api'

export const PostNewTruck = async (data) => {
  try {
    const res = await Client.post('/trucks', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateTruck = async (id, data) => {
  try {
    const res = await Client.put(`/trucks/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteTruck = async (id) => {
  try {
    const res = await Client.delete(`/trucks/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}
