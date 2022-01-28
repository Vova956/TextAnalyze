const UserDTO = require("../DTO/userDTO");
const Logger = require("../../Logger")
const https = require('https');
var XMLHttpRequest = require('xhr2');


class AuthService{
    async addUser(userDTO){
      var buff;

      const xhr = new XMLHttpRequest();
      xhr.open('POST','http://localhost:3000/auth/addUser',true)
      xhr.responseType = 'json'

      xhr.onload = function(e){
        buff = xhr.response;
      }

      xhr.onerror = function(e){
        throw new Error(e.responseText);
      }

      xhr.setRequestHeader('Content-Type','application/json')
    
      var data = {"login" : userDTO.login , "password" : userDTO.password} 
      await xhr.send(JSON.stringify(data));
      console.log(JSON.stringify(data))
      return buff;

    }

    async deleteUser(userDTO){
      var buff;

      const xhr = new XMLHttpRequest();
      xhr.open('POST','http://localhost:3000/auth/addUser',true)
      xhr.responseType = 'json'

      xhr.onload = function(e){
        buff = xhr.response;
      }

      xhr.onerror = function(e){
        throw new Error(e.responseText);
      }

      xhr.setRequestHeader('Content-Type','application/json')
    
      var data = {"login" : userDTO.login , "password" : userDTO.password} 
      await xhr.send(JSON.stringify(data));
      console.log(JSON.stringify(data))
      return buff;
    }

    async findUser(userDTO){
        
    }

    async addAdmin(userDTO){
        
    }

    async deleteAdmin(userDTO){
        
    }
    
}

module.exports = new AuthService();