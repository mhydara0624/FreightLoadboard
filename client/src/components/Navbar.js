import { Link, NavLink, withRouter } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

import './navbar.css'

function NavBar({ authenticated, user, handleLogOut, props }) {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <nav className="navBar_right">
        <h4>Welcome Friend!</h4>
        <NavLink to="/post-truck">
          <button className="host_button">Add Your Trucks</button>
        </NavLink>
        <NavLink to="/post-load">
          <button className="host_button">Post Your Loads</button>
        </NavLink>
        <NavLink
          to="/profile"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Profile
        </NavLink>
        <NavLink
          className="signout"
          onClick={handleLogOut}
          to="/"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          Sign Out
        </NavLink>
      </nav>
    )
  }

  const publicOptions = (
    <nav className="navBar_right">
      <NavLink to="/register">
        <button className="host_button">Become A Member</button>
      </NavLink>
      <NavLink
        to="/register"
        style={{ textDecoration: 'none', color: 'black' }}
      >
        Register
      </NavLink>
      <NavLink to="/login" style={{ textDecoration: 'none', color: 'black' }}>
        Sign In
      </NavLink>
    </nav>
  )
  return (
    <div className="navBar">
      <Link to="/">Home</Link>

      <div className="navBar_right">
        {authenticated && user ? authenticatedOptions : publicOptions}
        {/* {searchCars && (
          <NavLink to={{ pathname: '/search', state: { searchCars } }} />
        )} */}
      </div>
    </div>
  )
}

export default withRouter(NavBar)
