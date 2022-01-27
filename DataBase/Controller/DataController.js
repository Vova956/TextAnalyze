const dataService = require('../Service/dataBaseService')
const TopicDTO = require('../DTO/TopicDTO')

class DataContorller{

    async getTopic(req, res, next){
        try {
            const {name} = req.body;

            const result = await dataService.getTopic(name);

            return res.json({result});

        } catch (e) {
            next(e);
        }
    }

    async getTopics(req, res, next){
        try{
            const result = await dataService.getTopics();

            return res.json({result})

        }catch(e){
            next(e);
        }
    }

    async getTopicNames(req, res, next){
        try {
            const result = await dataService.getTopicNames();

            return res.json({result})

        } catch (e) {
            return e;
        }
    }

    async addTopic(req,res,next){
        try{
            const {name, word} = req.body;

            const payload = new TopicDTO(name,word);
            //console.log(word[0]);

            const result = await dataService.addTopic(payload);

            return res.json({result});

        }
        catch(e){
            next(e);
        }

    }
    async addWord(req, res, next){
        try{
            const {name, word} = req.body;
        
            const result = await dataService.addWord(name, word);

            return res.json({result});

        }
        catch(e){
            next(e)
        }
    }

    async deleteTopic(req,res,next){
        try{
            const {name} = req.body;

            const result = await dataService.deleteTopic(name);
            
            return res.json({result})

        }catch(e){
            next(e)
        }
    }
    async deleteWord(req, res, next){
        try {
            const {name, word} = req.body;

            const result = dataService.deleteWord(name, word);

            return res.json({result});

        } catch (e) {
            next(e);
        }
    }

    async renameTopic(req, res, next){
        try {
            const {name, newName} = req.body;
            
            const result = dataService.renameTopic(name, newName);

            return res.json({result});

        } catch (e) {
            next(e);
        }
    }

    async updateWord(req, res, next){
        try {
            const {name, word, newWord} = req.body;

            const result = dataService.updateWord(name, word, newWord);

            return res.json({result});
        
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new DataContorller();