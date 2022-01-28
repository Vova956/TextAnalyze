const Router = require('express').Router
const controller = require("../Controllers/analyzeController")

const router = new Router()
router.post('/analyze', controller.analyze)

module.exports = router 