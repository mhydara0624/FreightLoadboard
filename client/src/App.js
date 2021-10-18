import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { GetProfile, GetBrokerProfile } from './services/UserServices'
import { PostNewTruck } from './services/TruckServices'
import { PostNewLoad } from './services/LoadServices'
import ProtectedRoute from './components/ProtectedRoute'
import React, { useState, useEffect } from 'react'
import SignIn from './pages/SignIn'
import Register from './pages/Register'
import { CheckSession } from './services/Auth'
import PostTruck from './pages/PostTruck'
import EditTruck from './pages/EditTruck'
import PostLoad from './pages/PostLoad'
import EditLoad from './pages/EditLoad'
import Profile from './pages/Profile'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import Broker from './pages/Broker'
import Home from './pages/Home'

function App(props) {
  const [authenticated, toggleAuthenticated] = useState(
    false || localStorage.getItem('authenticated')
  )
  const [user, setUser] = useState(null)
  const [userInfo, setUserInfo] = useState([])
  const [brokerInfo, setBrokerInfo] = useState([])
  const [trucks, setTrucks] = useState([])
  const [loads, setLoads] = useState([])
  // const [board, setBoard] = useState([])

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

  // const getAllLoads = async () => {
  //   const data = await GetLoads()
  //   setBoard(data)
  // }

  useEffect(() => {
    getBrokerLoads()
    getUserProfile()
    // getAllLoads
  }, [user])

  const handleSubmit = async (e, formData, history) => {
    e.preventDefault()
    const res = await PostNewTruck(formData)
    setTrucks(...trucks, res.data)
    history.push('/profile')
    window.location.reload()
  }

  const handleLoadSubmit = async (e, formsData, history) => {
    e.preventDefault()
    const res = await PostNewLoad(formsData)
    setLoads(...loads, res.data)
    history.push('/broker')
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
              path="/"
              component={(props) => <Home {...props} loads={loads} />}
            />
            <Route
              exact
              path="/broker"
              component={(props) => (
                <Broker
                  {...props}
                  brokerInfo={brokerInfo}
                  getBrokerLoads={getBrokerLoads}
                  loads={loads}
                />
              )}
            />
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
              path="/post-load"
              component={(props) => (
                <PostLoad
                  handleLoadSubmit={handleLoadSubmit}
                  {...props}
                  loads={loads}
                  userInfo={userInfo}
                  setLoads={setLoads}
                />
              )}
            />
            <Route
              exact
              path="/broker/loads/:id"
              component={(props) => <EditLoad {...props} userInfo={userInfo} />}
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
