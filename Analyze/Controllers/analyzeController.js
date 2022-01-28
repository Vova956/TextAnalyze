const UserDTO = require('../DTO/userDTO');
const analyzeService  = require("../Service/analyzeService");
const Logger = require("../../Logger");


class AnalyzeController{
    async analyze(req,res,next){
        try{
            const {login, password} = req.body;
            const payload = new UserDTO(login,password);

            const result = await analyzeService.analyze(payload);

            return res.json(result);

        }catch(error){
            next(error);
        }

    }
}

module.exports = new AnalyzeController();