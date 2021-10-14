import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'

function PostTruck(props) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    owner_id: props.userInfo.id
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  return (
    <div className="post_car">
      <div>
        <div className="form_wrapper2">
          <h2 className="title_post_car">Add Your Vehicle Info:</h2>
          <form
            onSubmit={(e) => props.handleSubmit(e, formData)}
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
            <select name="year" onChange={handleChange} value={formData.year}>
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
