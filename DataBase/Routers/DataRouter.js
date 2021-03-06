const Router = require('express').Router;
const controller = require("../Controllers/dataController");

const router = new Router();
router.post('/addTopic',controller.addTopic);
router.post('/addWord',controller.addWord);
router.delete('/deleteTopic', controller.deleteTopic);
router.delete('/deleteWord', controller.deleteWord);
router.post('/renameTopic', controller.renameTopic);
router.get('/getTopics', controller.getTopics);
router.get('/getTopic', controller.getTopic);

module.exports = router;