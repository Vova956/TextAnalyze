// Get out-project files
const Router = require("express").Router;

// Get in-project files
const controller = require("../Controllers/topicController");

// Router logic
const router = new Router();
router.post('/addTopic',controller.addTopic);
router.post('/addWord',controller.addWord);
router.delete('/deleteTopic', controller.deleteTopic);
router.delete('/deleteWord', controller.deleteWord);
router.post('/renameTopic', controller.renameTopic);
router.get('/getTopics', controller.getTopics);
router.get('/getTopic', controller.getTopic);

// Export 'Auth Router' to project
module.exports = router;
