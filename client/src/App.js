import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { GetProfile, GetBrokerProfile } from './services/UserServices'
import ProtectedRoute from './components/ProtectedRoute'
import React, { useState, useEffect } from 'react'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState([])

  const getUserProfile = async () => {
    if (!user) return
    const data = await GetProfile(user.id)
    setUserInfo(data)
  }

  const getBrokerLoads = async () => {
    if (!user) return
    const data = await GetBrokerProfile(user.id)
    setUserInfo(data)
  }

  useEffect(() => {
    getBrokerLoads()
    getUserProfile()
  }, [user])

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const session = await CheckSession()
    setUser(session)
    toggleAuthenticated(true)
    localStorage.setItem('authenticated', '1')
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route
              exact
              path="/login"
              component={(props) => (
                <SignIn
                  {...props}
                  setUser={setUser}
                  toggleAuthenticated={toggleAuthenticated}
                />
              )}
            />
            <Route
              exact
              path="/register"
              component={(props) => <Register {...props} />}
            />
            {user && authenticated && (
              <ProtectedRoute
                authenticated={authenticated}
                user={user}
                path={'/login'}
                component={SignIn}
              />
            )}
          </Switch>
        </Router>
      </header>
    </div>
  )
}

export default App
