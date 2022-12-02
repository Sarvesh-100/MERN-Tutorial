const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;
const dbConnection = require('./config/db')
const dotenv = require("dotenv");

dotenv.config();

dbConnection();

const userRouter = require('./router/user');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api/user',userRouter)



app.listen(port,(req,res)=>{
    console.log(`Server listening on port ${port}`);
})





