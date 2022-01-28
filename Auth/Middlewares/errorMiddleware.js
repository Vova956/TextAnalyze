// Get in-project files
const Logger = require("../../Logger");

// Export 'Error Middleware' to project
module.exports = (error, req, res, next) => {

    Logger.error(error);

    return res.status(500).json({message : "Error!"});
}
