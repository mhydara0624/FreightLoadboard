import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function PostLoad(props) {
  const [formData, setFormData] = useState({
    pickup: '',
    drop: '',
    distance: '',
    rate: '',
    company: '',
    phone: '',
    broker_id: props.userInfo.id
  })

  let history = useHistory()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="post_car">
      <div>
        <div className="form_wrapper2">
          <h2 className="title_post_car">Add Your Load Info:</h2>
          <form
            onSubmit={(e) => props.handleSubmit(e, formData, history)}
            className="post_car_form"
          >
            <label for="pickup">Pickup Location:</label>
            <input
              onChange={handleChange}
              type="pickup"
              name="pickup"
              value={formData.pickup}
              required
            />
            <label for="drop">Drop Location:</label>
            <input
              onChange={handleChange}
              type="drop"
              name="drop"
              value={formData.drop}
              required
            />
            <label for="distance">Distance</label>
            <input
              onChange={handleChange}
              type="distance"
              name="distance"
              value={formData.distance}
              required
            />
            <label for="rate">Rate</label>
            <input
              onChange={handleChange}
              type="rate"
              name="rate"
              value={formData.rate}
              required
            />
            <label for="company">Company</label>
            <input
              onChange={handleChange}
              type="company"
              name="company"
              value={formData.distance}
              required
            />
            <label for="phone">Phone:</label>
            <input
              onChange={handleChange}
              type="phone"
              name="phone"
              value={formData.phone}
              required
            />
            <br></br>
            <button className="post_button" type="submit">
              Post Your Load
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(PostLoad)
