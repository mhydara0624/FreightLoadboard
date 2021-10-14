const controller = require('../controllers/TruckController')
const middleware = require('../middleware')
const router = require('express').Router()

router.get('/', controller.GetTrucks)
router.get('/:id', controller.GetTruckProfile)

router.post(
  '/',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTruck
)
router.put(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTruck
)
router.delete(
  '/:id',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTruck
)

module.exports = router
