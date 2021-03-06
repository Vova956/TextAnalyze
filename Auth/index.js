// Get out-project files
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

// Get in-project files
const Logger = require("../Logger")
const authRouter = require("./Routers/authRouter")
const errorMiddleware = require("./Middlewares/errorMiddleware")

const PORT = process.env.AUTH_PORT;
const URL = process.env.DB_URL;

// Create app
const app = express();
app.use(express.json());
app.use("/auth",authRouter);
app.use(errorMiddleware);

// Start server
const start = async () =>{
    try{
        await mongoose.connect(URL, {
            useNewUrlParser : true,
            useUnifiedTopology : true
        });

        app.listen(PORT, ()=> {
            Logger.serverStart(PORT);
        });

    }catch(error){
        Logger.error(error);
    }
}
start();
