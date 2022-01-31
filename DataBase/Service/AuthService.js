// Get out-project files
const UserDTO = require("../DTO/userDTO");
const userModel = require("../Models/userModel");

// Service logic
class AuthService{
    // Add user
    async addUser(userDTO){
        const loginCandidate = await userModel.findOne({login : userDTO.login})

        if(loginCandidate){
            throw new Error("User with such login does not exists!");
        }

        const user = await userModel.create({login: userDTO.login, password: userDTO.password, admin : false});

        return{
            isAdded : true,
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname,admin : false}
        };
        
    }

    async deleteUser(userDTO){

        const candidate = await userModel.findOne({login : userDTO.login,password : userDTO.password,admin : false});

        if(!candidate){
            throw new Error("There is no user to delete!");
        }
        
        const user = await userModel.deleteOne({login : userDTO.login,password : userDTO.password});
        
        return {
            isDeleted : true,
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname,admin : false}
        };
    }

    async findUser(userDTO){
        const user =  userModel.findOne({login : userDTO.login, password : userDTO.password,admin : false});

        if(!user){
            throw new Error("There is no such user!");
        }

        return user;
    }

    async findAdmin(userDTO){
        const user =  userModel.findOne({login : userDTO.login, password : userDTO.password,admin : true});

        if(!user){
            throw new Error("|DB ERORR| THERE IS NO SUCH USER");
        }

        return user;
    }

    async addAdmin(userDTO){
        const loginCandidate = await userModel.findOne({login : userDTO.login})

        if(loginCandidate){
            throw new Error("|DB ERORR| USER WITH SUCH LOGIN EXISTS");
        }

        const user = await userModel.create({login: userDTO.login,password: userDTO.password, admin : true});

        return {
            isAdded : true,
            user: {login: userDTO.login,password: userDTO.password,nickname: userDTO.nickname,admin : true}
        };
        
    }


    async deleteAdmin(userDTO){
        const user =  userModel.findOne({login : userDTO.login, password : userDTO.password,admin : true});

        if(!user){
            throw new Error("|DB ERORR| THERE IS NO SUCH USER");
        }

        return user;
    }
    
}

module.exports = new AuthService();