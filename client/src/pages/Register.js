import { RegisterUser } from '../services/Auth'
import React, { useState } from 'react'
import './register-signin.css'

const iState = {
  email: '',
  password: '',
  confirmPassword: '',
  company: '',
  broker: false
}

export default function Register(props) {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    company: '',
    broker: false
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      email: formValues.email,
      password: formValues.password,
      company: formValues.company,
      broker: formValues.broker
    })
    setFormValues(iState)
    props.history.push('/login')
  }

  return (
    <div className="register col">
      <div className="form_height">
        <div className="form_wrapper3">
          <h3 className="title_register">
            Register Now To Access Our Loads and Carriers!
          </h3>
          <form className="col" onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="email">Email</label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="example@example.com"
                value={formValues.email}
                required
              />
            </div>

            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="password"
                value={formValues.password}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                onChange={handleChange}
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                required
              />
              <div className="input-wrapper">
                <label htmlFor="company"> Company Name</label>
                <input
                  onChange={handleChange}
                  name="company"
                  type="company"
                  placeholder="Your Company Name"
                  value={formValues.company}
                  required
                />
              </div>
              <div className="input-wrapper"></div>
              <div className="check_box">
                <p className="host_blurb">
                  Are you a frieght broker looking to post loads on our board?
                  Check this box to get started today!
                  <input
                    className="box"
                    type="checkbox"
                    defaultChecked={false}
                    value={!formValues.broker}
                  />
                </p>
              </div>
            </div>
            <button
              className="register_button"
              disabled={
                !formValues.email ||
                (!formValues.password &&
                  formValues.confirmPassword === formValues.password)
              }
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
