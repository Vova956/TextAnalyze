// Get in-project files
const UserDTO = require("../DTO/userDTO");
const userService = require("../Service/authService");

// Controller logic
class AuthController{
    // Add User to DataBase
    async addUser(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login, password);

            const result = await userService.addUser(payload);

            return res.json({result});

        }catch(error){
            next(error);
        }
    }

    // Delete User from DataBase
    async deleteUser(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login,password);

            const result = await userService.deleteUser(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }

    }

    // Find User in DataBase
    async findUser(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login,password);

            const result = await userService.findUser(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }
    }

    // Add Admin to DataBase
    async addAdmin(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login,password);

            const result = await userService.addAdmin(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }
    }

    // Delete Admin from DataBase
    async deleteAdmin(req, res, next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login,password);

            const result = await userService.deleteAdmin(payload);
            
            return res.json({result});

        }catch(error){
            next(error);
        }
    }
}

// Export 'Auth Controller' to project 
module.exports = new AuthController();
