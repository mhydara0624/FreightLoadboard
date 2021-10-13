import React from 'react'
import { Redirect, Route } from 'react-router-dom'

export default function ProtectedRoute({
  user,
  authenticated,
  component: Component,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) =>
        user && authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/signin" />
        )
      }
    />
  )
}
