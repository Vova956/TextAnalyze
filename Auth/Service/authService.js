const UserDTO = require("../DTO/userDTO");
const userModel = require("../Models/userModel");
const Logger = require("../../Logger")


class AuthService{
    async addUser(userDTO){
        const request = new Request('localhost:3000/auth/addUser', {
        method: 'POST', 
        body: JSON.stringify({login: userDTO.login, password : userDTO.password})});

        fetch(request)
        .then(response => {
          if (response.status == 200) {
            return response.json();
          } else {
            throw new Error('SERVER REQUEST ERROR');
          }
        })
        .then(response => {
            Logger.debug(response);
        }).catch(error => {
            Logger.error(error);
        });
        
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