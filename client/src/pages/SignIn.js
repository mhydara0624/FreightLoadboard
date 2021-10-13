import { SignInUser } from '../services/Auth'
import React, { useState } from 'react'
import './register-signin.css'

export default function SignIn(props) {
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    props.setUser(payload)
    props.toggleAuthenticated(true)
    props.history.push('/')
  }

  return (
    <div className="signin col">
      <div className="card-overlay centered">
        <div className="form_wrapper">
          <h2 className="title_signin">Sign In and Drive Now</h2>
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
            <button
              className="signin_button"
              disabled={!formValues.email || !formValues.password}
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
