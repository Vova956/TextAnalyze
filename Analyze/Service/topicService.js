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

      return result;
     
    }

    async deleteUser(userDTO){
        var data = {"login" : userDTO.login , "password" : userDTO.password}
        var result = null; 
  
        await sendHttpRequest('POST','http://localhost:3000/auth/deleteUser',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result;
    }

    async findUser(userDTO){
        var data = {"login" : userDTO.login , "password" : userDTO.password}
        var result = null; 
  
        await sendHttpRequest('GET','http://localhost:3000/auth/find',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result;
    }

    async addAdmin(userDTO){
        var data = {"login" : userDTO.login , "password" : userDTO.password}
        var result = null; 
  
        await sendHttpRequest('POST','http://localhost:3000/auth/addAdmin',data).then(responseData =>{
          result = {responseData};
        })
        .catch(err => {
          console.log(err);
        })
  
        return result;
    }

    async deleteAdmin(userDTO){
      var data = {"login" : userDTO.login , "password" : userDTO.password}
      var result = null; 

      await sendHttpRequest('POST','http://localhost:3000/auth/deleteAdmin',data).then(responseData =>{
        result = {responseData};
      })
      .catch(err => {
        console.log(err);
      })

      return result;
    }
    
}

module.exports = new AuthService();