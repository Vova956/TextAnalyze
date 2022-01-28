// Get out-project files
const Router = require("express").Router;
const authMiddleware = require("../Middlewares/loginMiddleware")

// Get in-project files
const controller = require("../Controllers/topicController");


// Router logic
const router = new Router();
router.post('/addTopic',authMiddleware,controller.addTopic);
router.post('/addWord',authMiddleware,controller.addWord);
router.delete('/deleteTopic',authMiddleware, controller.deleteTopic);
router.delete('/deleteWord',authMiddleware, controller.deleteWord);
router.post('/renameTopic',authMiddleware, controller.renameTopic);
router.get('/getTopics',authMiddleware, controller.getTopics);
router.get('/getTopic',authMiddleware, controller.getTopic);

// Export 'Auth Router' to project
module.exports = router;
