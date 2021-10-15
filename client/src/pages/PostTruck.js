import React, { useState, useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'

function PostTruck(props) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    owner_id: props.userInfo.id
  })

  let history = useHistory()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="post_car">
      <div>
        <div className="form_wrapper2">
          <h2 className="title_post_car">Add Your Vehicle Info:</h2>
          <form
            onSubmit={(e) => props.handleSubmit(e, formData, history)}
            className="post_car_form"
          >
            <label for="make">Select a make:</label>
            <input
              onChange={handleChange}
              type="make"
              name="make"
              value={formData.make}
              required
            />
            <label for="model">Select a model:</label>
            <input
              onChange={handleChange}
              type="model"
              name="model"
              value={formData.model}
              required
            />
            <label for="year">Select a Year:</label>
            <input
              onChange={handleChange}
              type="year"
              name="year"
              value={formData.year}
              required
            />

            <br></br>
            <button className="post_button" type="submit">
              Post Your Truck
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default withRouter(PostTruck)
