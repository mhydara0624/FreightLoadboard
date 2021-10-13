import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { GetProfile, GetBrokerProfile } from './services/UserServices'
import React, { useState, useEffect } from 'react'

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
        <Router></Router>
      </header>
    </div>
  )
}

export default App
