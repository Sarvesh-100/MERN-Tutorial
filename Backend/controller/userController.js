const userModel = require('.././model/userModel')


let adduser = async (req,res) =>{
let addData = req.body;

let{name,email,password,file}=addData

const users = new userModel({
    name:name,
    email:email,
    password:password,
    file:file,
})
await users.save()
res.send(users)
}


let updateUser = async (req,res) =>{
    
    let updateUserId = req.params.id;
    let userData = req.body;

    var query={_id:updateUserId};
    var newValues={$set:{...userData}};
    let updatedValues = await userModel.updateOne(query,newValues,{new:true})

    res.send(updatedValues);
    }


let deleteuser = async (req,res) =>{
    let userId = req.params.uid;
    var myquery = { _id: userId };

    const users = await userModel.deleteOne(myquery)
    res.send(users)
}


let getuser = async (req,res) =>{

    const users = await userModel.find();
    res.send(users)
}


module.exports = {adduser,updateUser,deleteuser,getuser};