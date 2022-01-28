require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');

const Logger = require('../Logger');
const authRouter = require('./Routers/analyzeRouter');
const errorMiddleware = require("./Middlewares/errorMiddleware");

const PORT = process.env.ANALYZE_PORT;
const URL = process.env.DB_URL2;


// Create app
const app = express();
app.use(express.json());
app.use('/text',authRouter);
app.use(errorMiddleware);

// Start server
const start = async () =>{
    try{
        await mongoose.connect(URL,{
            useNewUrlParser : true,
            useUnifiedTopology : true
        })

        app.listen(PORT, ()=> {
            Logger.serverStart(PORT);
        })

    }catch(e){
        Logger.error(e);
    }
}
start();