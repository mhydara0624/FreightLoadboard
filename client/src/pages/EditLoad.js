import { GetLoadsById, UpdateLoad } from '../services/LoadServices'
import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function EditLoad(props) {
  const [updatedLoad, setUpdatedLoad] = useState({})

  useEffect(() => {
    const load = GetLoadsById(props.match.params.id)
    setUpdatedLoad(load)
  }, [])

  let history = useHistory()

  const handleLoadChange = (e) => {
    setUpdatedLoad({ ...updatedLoad, [e.target.name]: e.target.value })
  }

  const handleLoadSubmit = async (e) => {
    e.preventDefault()
    const newUpdatedLoad = {
      pickup: updatedLoad.pickup,
      drop: updatedLoad.drop,
      distance: updatedLoad.distance,
      rate: updatedLoad.rate,
      company: updatedLoad.company,
      phone: updatedLoad.phone,
      broker_id: props.userInfo.id
    }

    const res = await UpdateLoad(props.match.params.id, newUpdatedLoad)
    if (res.status === 200) {
      history.push('/profile')
      window.location.reload()
    }
  }

  return (
    <div className="edit_car">
      <div className="car_form1">
        <div className="form_wrapper3">
          {updatedLoad && (
            <div>
              <h2>Edit Your Load</h2>
              <form className="edit_car_form" onSubmit={handleLoadSubmit}>
                <label for="pickup">Pickup Location:</label>
                <input
                  onChange={handleLoadChange}
                  type="pickup"
                  name="pickup"
                  value={updatedLoad.pickup}
                  required
                />
                <label for="drop">Drop Location:</label>
                <input
                  onChange={handleLoadChange}
                  type="drop"
                  name="drop"
                  value={updatedLoad.drop}
                  required
                />
                <label for="distance">Distance</label>
                <input
                  onChange={handleLoadChange}
                  type="distance"
                  name="distance"
                  value={updatedLoad.distance}
                  required
                />
                <label for="rate">Rate</label>
                <input
                  onChange={handleLoadChange}
                  type="rate"
                  name="rate"
                  value={updatedLoad.rate}
                  required
                />
                <label for="company">Company</label>
                <input
                  onChange={handleLoadChange}
                  type="company"
                  name="company"
                  value={updatedLoad.company}
                  required
                />
                <label for="phone">Phone:</label>
                <input
                  onChange={handleLoadChange}
                  type="phone"
                  name="phone"
                  value={updatedLoad.phone}
                  required
                />
                <br></br>
                <button className="edit_button" type="submit">
                  Update Your Load
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default withRouter(EditLoad)
