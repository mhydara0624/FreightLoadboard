import Client from './api'

export const PostNewLoad = async (data) => {
  try {
    const res = await Client.post('/loads', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const UpdateLoad = async (id, data) => {
  try {
    const res = await Client.put(`/loads/${id}`, data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const DeleteLoad = async (id) => {
  try {
    const res = await Client.delete(`/loads/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetLoadsById = async (id) => {
  try {
    const res = await Client.get(`/loads/${id}`)
    console.log(res.data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const GetLoads = async () => {
  try {
    const res = await Client.get('/loads')
    return res.data
  } catch (error) {
    throw error
  }
}
