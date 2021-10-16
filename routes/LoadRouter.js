const controller = require('../controllers/LoadController')
const middleware = require('../middleware')
const router = require('express').Router()

router.get('/', controller.GetLoads)
router.get('/:id', controller.GetLoadProfile)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateLoad
)

router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateLoad
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteLoad
)

module.exports = router
