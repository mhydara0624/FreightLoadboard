const Router = require('express').Router()

const UserRouter = require('./UserRouter')
const TruckRouter = require('./TruckRouter')
const AuthRouter = require('./AuthRouter')
const LoadRouter = require('./LoadRouter')

Router.use('/users', UserRouter)
Router.use('/trucks', TruckRouter)
Router.use('/auth', AuthRouter)
Router.use('/bookings', LoadRouter)

module.exports = Router
