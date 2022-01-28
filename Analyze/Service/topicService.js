const TopicDTO = require("../../DataBase/DTO/TopicDTO");
const Logger = require("../../Logger")
const https = require('https');
var XMLHttpRequest = require('xhr2');

const sendHttpRequest = (method,url,data) =>{
    const promise = new Promise((resolve,reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.responseType = 'json'

        if(data){
            xhr.setRequestHeader('Content-Type','application/json')
        }

        xhr.onload = () =>{
            resolve(xhr.response)
        }

        xhr.onerror = () =>{
            reject('Something went wrong!')
        }

        xhr.send(JSON.stringify(data))
    });
    return promise;
}

class TopicService{
    
    async addTopic(topicDTO){
      var data = {"name" : topicDTO.name , "word" : topicDTO.word}
      var result = null; 

      await sendHttpRequest('POST','http://localhost:3000/data/addTopic',data).then(responseData =>{
        result = {responseData};
      })
      .catch(err => {
        console.log(err);
      })

      return result.responseData.result;
     
    }

    async addWord(topicName, word){
        var data = {"name" : topicName , "word" : word}
      var result = null; 

      await sendHttpRequest('POST','http://localhost:3000/data/addWord',data).then(responseData =>{
        result = {responseData};
      })
      .catch(err => {
        console.log(err);
      })

      return result.responseData.result;
    }

    async deleteTopic(topicName){
        var data = {"name" : topicName}
        var result = null; 
  
        await sendHttpRequest('DELETE','http://localhost:3000/data/deleteTopic',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result.responseData.result;
    }

    async deleteWord(topicName, word){
        var data = {"name" : topicName , "word" : word}
        var result = null; 
  
        await sendHttpRequest('DELETE','http://localhost:3000/data/deleteWord',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result;
    }

    async getTopics(){
        var data = {}
        var result = null; 
  
        await sendHttpRequest('GET','http://localhost:3000/data/getTopics',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result;
    }

    async getTopic(name){
      var data = {"name" : name}
      var result = null; 

      await sendHttpRequest('GET','http://localhost:3000/data/getTopic',data).then(responseData =>{
        result = {responseData};
      })
      .catch(err => {
        console.log(err);
      })

      return result;
    }

    async renameTopic(name, newName){
        var data = {"name" : name, "newName" : name}
        var result = null; 
  
        await sendHttpRequest('POST','http://localhost:3000/data/renameTopic',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result;
    }

      
    
}

module.exports = new AuthService();