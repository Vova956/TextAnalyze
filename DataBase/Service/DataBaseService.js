const TopicDTO = require("../DTO/TopicDTO");
const topicModel = require('../Models/TopicModel');


class DataService{

    async getTopic(topicName){
        const candidate = await topicModel.findOne({name: topicName});

        if(!candidate){
            throw new Error('This topic does not exist');
        }

        return candidate;
    }
 
    async getTopics(){
        const candidate = await topicModel.find({});
        return candidate;
    }

    async getTopicNames(){
        const candidate = await topicModel.find({});
        
        var result = [];

        for(let i = 0; candidate.length; i++){
            result[i] = candidate[i].name;
        }

        return result;

    }

    async addTopic(topicDTO){

        const nameCandidate = await topicModel.findOne({name : topicDTO.name})

        if(nameCandidate){
            throw new Error('Current topic does exist')
        }

        const topic = await topicModel.create({name: topicDTO.name, words: topicDTO.word})
        

        return {
            topic: {name: topicDTO.name, words: topicDTO.words}
        }
    }

    async addWord(topicName, word){
        var candidate = topicModel.findOne({name: topicName})

        if(!candidate){
            throw new Error('There is no such topic');
        }

        candidate.words.push(word);
        return word;
    }

    async deleteTopic(topicName){
        var deletionCandidate = topicModel.findOne({name: topicName});

        if(!deletionCandidate){
            throw new Error('There is no such topic');
        }
        
        var res = new TopicDTO(deletionCandidate.name, deletionCandidate.words);

        topicModel.deleteOne({name: topicName});

        return res;
    }

    async deleteWord(topicName, word){
        var deletionCandidate = topicModel.findOne({name: topicName});

        if(!deletionCandidate){
            throw new Error('There is no such topic');
        }

        for(let i = 0; i < deletionCandidate.words.length; i++){
            if(deletionCandidate.words[i] == word){
                return deletionCandidate.words.pop(i);
            }
        }

        throw new Error('There is no such word in this topic')
    }

    async renameTopic(previousName, newName){
        var candidate = topicModel.findOne({name: previousName});

        if(!candidate){
            throw new Error('There is no such topic');
        }

        candidate.name = newName;

        return previousName;
    }

    async updateWord(topicName, previousWord, newWord){
        var candidate = topicModel.findOne({name: topicName});

        if(!candidate){
            throw new Error('There is no such topic');
        }

        for(let i = 0; i < candidate.words.length; i++){
            if(candidate.words[i] == previousWord){
                candidate.words[i] = newWord;
                return previousWord;
            }
        }

        throw new Error('There is no such word in this topic')

    }

    
}

module.exports = new DataService();