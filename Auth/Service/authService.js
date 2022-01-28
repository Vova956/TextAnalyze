// Get out-project files
const https = require("https");
var XMLHttpRequest = require("xhr2");

// Get in-project files
const Logger = require("../../Logger");

// Send http Request tp DataBase
const sendHttpRequest = (method, url, data) =>{
    const promise = new Promise((resolve, reject) =>{
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.responseType = "json";

        if(data){
            xhr.setRequestHeader("Content-Type", "application/json");
        }

        xhr.onload = () =>{
            resolve(xhr.response);
        }

        xhr.onerror = () =>{
            reject("Oops! Something went wrong!");
        }

        xhr.send(JSON.stringify(data));
    });
    return promise;
}

// Service logic
class AuthService{
    // Add User to DataBase
    async addUser(userDTO){
      var data = {"login": userDTO.login, "password": userDTO.password};
      var result = null; 

      await sendHttpRequest("POST", "http://localhost:3000/auth/addUser", data).then(responseData =>{
        result = {responseData};
      })
      .catch(error => {
        Logger.error(error);
      })

      return result; 
    }

    // Delete User from DataBase
    async deleteUser(userDTO){
        var data = {"login": userDTO.login, "password": userDTO.password};
        var result = null; 
  
        await sendHttpRequest("POST", "http://localhost:3000/auth/deleteUser", data).then(responseData =>{
          result = {responseData};
        })
        .catch(error => {
          Logger.error(error);
        })
  
        return result;
    }

    // Find User in DataBase
    async findUser(userDTO){
        var data = {"login": userDTO.login, "password": userDTO.password};
        var result = null; 
  
        await sendHttpRequest("GET", "http://localhost:3000/auth/find", data).then(responseData =>{
          result = {responseData};
        })
        .catch(error => {
          Logger.error(error);
        })
  
        return result;
    }

    // Add Admin to DataBase
    async addAdmin(userDTO){
        var data = {"login": userDTO.login, "password": userDTO.password};
        var result = null; 
  
        await sendHttpRequest("POST", "http://localhost:3000/auth/addAdmin", data).then(responseData =>{
          result = {responseData};
          Logger.info("Added Admin: " + result);
        })
        .catch(error => {
          Logger.error(error);
        })
  
        return result;
    }

    // Delete Admin from DataBase
    async deleteAdmin(userDTO){
      var data = {"login": userDTO.login, "password": userDTO.password};
      var result = null; 

      await sendHttpRequest("POST", "http://localhost:3000/auth/deleteAdmin", data).then(responseData =>{
        result = {responseData};
        Logger.info("Deleted Admin: " + result);
      })
      .catch(error => {
        Logger.error(error);
      })

      return result;
    }
}

// Export 'Auth Service' to project 
module.exports = new AuthService();
