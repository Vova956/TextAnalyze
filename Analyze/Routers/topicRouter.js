// Get out-project files
const Router = require("express").Router;

// Get in-project files
const controller = require("../Controllers/topicController");

// Router logic
const router = new Router();
router.post("/addUser", controller.addUser);
router.post("/deleteUser", controller.deleteUser);
router.get("/findUser", controller.findUser);
router.post("/deleteAdmin", controller.deleteAdmin);
router.post("/addAdmin", controller.addAdmin);

// Export 'Auth Router' to project
module.exports = router;
