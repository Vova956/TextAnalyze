const Router = require('express').Router
const controller = require("../Controllers/authController")

const router = new Router()
router.post('/analyze',controller.addUser)
router.post('/deleteUser',controller.deleteUser)
router.get('/findUser',controller.findUser)
router.post('/deleteAdmin',controller.deleteAdmin)
router.post('/addAdmin',controller.addAdmin)

module.exports = router 