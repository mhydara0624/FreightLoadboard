import Client from './api'

export const GetProfile = async (id) => {
  try {
    const res = await Client.get(`/users/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetBrokerProfile = async (id) => {
  try {
    const res = await Client.get(`/users/${id}/broker`)
    return res.data
  } catch (error) {
    throw error
  }
}
