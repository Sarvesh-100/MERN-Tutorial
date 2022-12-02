const mongoose = require('mongoose');

const dbConnection = async ()=>{

    await  mongoose.connect(process.env.DB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,

}).then(()=>{
    console.log("DB connection sucessful")
}).catch((err)=>console.log(err))
}

module.exports = dbConnection;