import { GetTrucksById, UpdateTruck } from '../services/TruckServices'
import React, { useState, useEffect } from 'react'

function EditCar(props) {
  const [updatedTruck, setUpdatedTruck] = useState({})

  useEffect(() => {
    const truck = GetTrucksById(props.match.params.id)
    setUpdatedTruck(truck)
  }, [])

  const handleTruckChange = (e) => {
    setUpdatedTruck({ ...updatedTruck, [e.target.name]: e.target.value })
  }

  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    const newUpdatedTruck = {
      make: updatedTruck.make,
      model: updatedTruck.model,
      year: parseInt(updatedTruck.year)
    }

    const res = await UpdateTruck(props.match.params.id, newUpdatedTruck)
    if (res.status === 200) {
      props.history.push('/profile')
    }
    console.log(res)
  }

  return (
    <div className="edit_car">
      <div className="car_form1">
        <div className="form_wrapper3">
          {updatedTruck && (
            <div>
              <h3>{updatedTruck.make}</h3>
              <h3>{updatedTruck.model}</h3>
              <h3>{updatedTruck.year}</h3>
              <form className="edit_car_form" onSubmit={handleUpdateSubmit}>
                <label for="make">Update make:</label>
                <input
                  onChange={handleTruckChange}
                  type="make"
                  name="make"
                  value={updatedTruck.make}
                  required
                />
                <label for="model">Update model:</label>
                <input
                  onChange={handleChange}
                  type="model"
                  name="model"
                  value={updatedTruck.model}
                  required
                />
                <label for="year">Select a Year:</label>
                <select
                  name="year"
                  onChange={handleTruckChange}
                  value={updatedTruck.year}
                >
                  <option>2012</option>
                  <option>2013</option>
                  <option>2014</option>
                  <option>2015</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                  <option>2020</option>
                  <option>2021</option>
                </select>
                <br></br>
                <button className="edit_button" type="submit">
                  Update Your Car
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EditCar
