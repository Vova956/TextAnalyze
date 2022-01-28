const topicService = require('../Service/topicService')
const TopicDTO = require('../../DataBase/DTO/TopicDTO')

class TopicController{

    async getTopic(req, res, next){
        try {
            const {name} = req.body;

            const result = await topicService.getTopic(name);

            return res.json({result});

        } catch (e) {
            next(e);
        }
    }

    async getTopics(req, res, next){
        try{
            const result = await topicService.getTopics();
            return res.json({result})

        }catch(e){
            next(e);
        }
    }

    async addTopic(req,res,next){
        try{
            const {name, word} = req.body;

            const payload = new TopicDTO(name,word);

            const result = await topicService.addTopic(payload);

            return res.json({result});

        }
        catch(e){
            next(e);
        }

    }
    async addWord(req, res, next){
        try{
            const {name, word} = req.body;
        
            const result = await topicService.addWord(name, word);

            return res.json({result});

        }
        catch(e){
            next(e)
        }
    }

    async deleteTopic(req,res,next){
        try{
            const {name} = req.body;

            const result = await topicService.deleteTopic(name);
            
            return res.json({result})

        }catch(e){
            next(e)
        }
    }
    async deleteWord(req, res, next){
        try {
            const {name, word} = req.body;

            const result = topicService.deleteWord(name, word);

            return res.json({result});

        } catch (e) {
            next(e);
        }
    }

    async renameTopic(req, res, next){
        try {
            const {name, newName} = req.body;
            
            const result = topicService.renameTopic(name, newName);

            return res.json({result});

        } catch (e) {
            next(e);
        }
    }
}

module.exports = new TopicController();