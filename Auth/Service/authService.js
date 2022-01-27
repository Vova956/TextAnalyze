const UserDTO = require("../DTO/userDTO");
const Logger = require("../../Logger")
const https = require('https');
var XMLHttpRequest = require('xhr2');


class AuthService{
    async addUser(userDTO){
      var buff;
      /*const request = new Request('localhost:3000/auth/addUser', {
      method: 'POST', 
      body: JSON.stringify({login: userDTO.login, password : userDTO.password})});*/

      const xhr = new XMLHttpRequest();
      xhr.open('POST','http://localhost:3000/auth/addUser',true)
      xhr.responseType = 'json'

      xhr.onload = function(e){
          buff = xhr.response;
      }

      xhr.onerror = function(e){
          throw new Error(e.responseText);
      }

      await xhr.send(JSON.stringify({"login" : "userDTO.login", "password" : "userDTO.password"}));
      console.log(JSON.stringify({"login" : "userDTO.login", "password" : "userDTO.password"}))
      return buff;

    }

    async deleteUser(userDTO){
   
    }

    async findUser(userDTO){
        
    }

    async addAdmin(userDTO){
        
    }

    async deleteAdmin(userDTO){
        
    }
    
}

module.exports = new AuthService();