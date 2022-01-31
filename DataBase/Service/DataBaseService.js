// Get out-project files
const { Query } = require("mongoose");

// Get in-project files
const TopicDTO = require("../DTO/TopicDTO");
const topicModel = require("../Models/TopicModel");

// Service logic
class DataService{
    // Get Topic
    async getTopic(topicName){
        const candidate = await topicModel.findOne({name: topicName});

        if(!candidate){
            throw new Error("This topic does not exist!");
        }

        return candidate;
    }
 
    // Get several Topics
    async getTopics(){
        const candidates = await topicModel.find({});
        return candidates;
    }
    
    // Add new Topic
    async addTopic(topicDTO){
        const nameCandidate = await topicModel.findOne({name: topicDTO.name});

        if(nameCandidate){
            throw new Error("Current topic does exist!");
        }

        const topic = await topicModel.create({name: topicDTO.name, words: topicDTO.word});

        return topic;
    }

    // Add new Word to Topic
    async addWord(topicName, word){
        const candidate = topicModel.findOne({name: topicName});

        if(!candidate){
            throw new Error("There is no such topic");
        }

        let updatedModel = await topicModel.updateOne({name: topicName},{$push: {words: word}});
                   
        return updatedModel;
    }

    // Delete Topic
    async deleteTopic(topicName){
        var deletionCandidate = topicModel.findOne({name: topicName});

        if(!deletionCandidate){
            throw new Error("There is no such topic");
        }
        
        topicModel.deleteOne({name: topicName}, function (error){
            if(error) 
                throw new Error("There is no such word in this topic");
        });

        return deletionCandidate;
    }

    // Delete Word from Topic
    async deleteWord(topicName, word){
        var deletionCandidate = topicModel.findOne({name: topicName});

        if(!deletionCandidate){
            throw new Error("There is no such topic");
        }

        let updatedModel = await topicModel.updateOne({name: topicName},{$pull: {words: word}}, function(error){
            if(error){
                throw new Error("There is no such Word");
            }
        });

        return updatedModel;
    }

    // Rename Topic
    async renameTopic(previousName, newName){
        var candidate = topicModel.findOne({name: previousName});

        if(!candidate){
            throw new Error("There is no such topic");
        }

        let updatedModel = await topicModel.updateOne({name: previousName},{$set: {name: newName}});

        return updatedModel;
    }  
}

// Export 'DataBase Service' to project
module.exports = new DataService();