const { Query } = require("mongoose");
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
    
    async addTopic(topicDTO){

        const nameCandidate = await topicModel.findOne({name : topicDTO.name})

        if(nameCandidate){
            throw new Error('Current topic does exist')
        }

        const topic = await topicModel.create({name: topicDTO.name, words: topicDTO.word})
        

        return {
            topic: {name: topicDTO.name, words: topicDTO.word}
        }
    }

    async addWord(topicName, word){
        const candidate = topicModel.findOne({name: topicName});

        if(!candidate){
            throw new Error('There is no such topic');
        }

        let updatedModel = await topicModel.updateOne({name: topicName},{ $push: { words: word} });

                   
        return updatedModel;
    }

    async deleteTopic(topicName){
        var deletionCandidate = topicModel.findOne({name: topicName});

        if(!deletionCandidate){
            throw new Error('There is no such topic');
        }
        
        topicModel.deleteOne({ name: topicName }, function (err) {
            if (err) 
            throw new Error('There is no such word in this topic')
        });

        return deletionCandidate;
    }

    async deleteWord(topicName, word){
        var deletionCandidate = topicModel.findOne({name: topicName});

        if(!deletionCandidate){
            throw new Error('There is no such topic');
        }

        let updatedModel = await topicModel.updateOne({name: topicName},{ $pull: { words: word} }, function(err){
            if(err){
                throw new Error('There is no such Word');
            }
        });

        return updatedModel
    }

    async renameTopic(previousName, newName){
        var candidate = topicModel.findOne({name: previousName});

        if(!candidate){
            throw new Error('There is no such topic');
        }

        let updatedModel = await topicModel.updateOne({name: previousName},{ $set: { name: newName} });

        return updatedModel;
    }  
}

module.exports = new DataService();