const controller = require('../controllers/AuthController')
const middleware = require('../middleware')
const router = require('express').Router()
router.post('/register', controller.Register)
router.post('/login', controller.Login)

router.get(
  '/session',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

router.put(
  '/update',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CheckSession
)

module.exports = router
