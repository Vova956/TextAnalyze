const analyzeService  = require("../Service/analyzeService");
const Logger = require("../../Logger");


class AnalyzeController{
    async analyze(req,res,next){
        try{
            const {text} = req.body;

            const result = await analyzeService.analyze(text);

            return res.json(result);

        }catch(error){
            next(error);
        }

    }
}

module.exports = new AnalyzeController();