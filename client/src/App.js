import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GetProfile, GetBrokerProfile } from './services/UserServices'
import { PostNewTruck } from './services/TruckServices'
import ProtectedRoute from './components/ProtectedRoute'
import React, { useState, useEffect } from 'react'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'
import PostTruck from './pages/PostTruck'
import EditTruck from './pages/EditTruck'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState([])
  const [brokerInfo, setBrokerInfo] = useState([])
  const [trucks, setTrucks] = useState([])

  const getUserProfile = async () => {
    if (!user) return
    const data = await GetProfile(user.id)
    setUserInfo(data)
  }

  const getBrokerLoads = async () => {
    if (!user) return
    const data = await GetBrokerProfile(user.id)
    setBrokerInfo(data)
  }

  useEffect(() => {
    getBrokerLoads()
    getUserProfile()
  }, [user])

  const handleSubmit = async (e, formData, history) => {
    e.preventDefault()
    const res = await PostNewTruck(formData)
    setTrucks(...trucks, res.data)
    history.push('/profile')
    window.location.reload()
  }

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
          <Navbar
            authenticated={authenticated}
            user={user}
            handleLogOut={handleLogOut}
            {...props}
          />
          <Switch>
            <Route
              exact
              path="/profile"
              component={(props) => (
                <Profile
                  {...props}
                  userInfo={userInfo}
                  getUserProfile={getUserProfile}
                  trucks={trucks}
                />
              )}
            />

            <Route
              exact
              path="/post-truck"
              component={(props) => (
                <PostTruck
                  handleSubmit={handleSubmit}
                  {...props}
                  trucks={trucks}
                  userInfo={userInfo}
                  setTrucks={setTrucks}
                />
              )}
            />
            <Route
              exact
              path="/profile/trucks/:id"
              component={(props) => (
                <EditTruck {...props} userInfo={userInfo} />
              )}
            />
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
