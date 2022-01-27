const userService = require('../Service/authService')
const UserDTO = require('../DTO/userDTO')

class AuthController{
    async addUser(req,res,next){
        try{
            const {login, password} = req.body
            const payload = new UserDTO(login,password)

            const result = await userService.addUser(payload);

            return res.json({result})

        }catch(e){
            next(e)
        }

    }

    async deleteUser(req,res,next){
        try{
            const {login, password} = req.body
            const payload = new UserDTO(login,password)

            const result = await userService.deleteUser(payload);
            
            return res.json({result})

        }catch(e){
            next(e)
        }

    }

    async findUser(req,res,next){
        try{
            const {login, password} = req.body
            const payload = new UserDTO(login,password)

            const result = await userService.findUser(payload);
            
            return res.json({result});

        }catch(e){
            next(e)
        }
    }

    async deleteAdmin(req,res,next){
        try{
            const {login, password} = req.body
            const payload = new UserDTO(login,password)

            const result = await userService.deleteAdmin(payload);
            
            return res.json({result});

        }catch(e){
            next(e)
        }
    }

    async addAdmin(req,res,next){
        try{
            const {login, password} = req.body
            const payload = new UserDTO(login,password)

            const result = await userService.addAdmin(payload);
            
            return res.json({result});

        }catch(e){
            next(e)
        }
    }

}

module.exports = new AuthController();