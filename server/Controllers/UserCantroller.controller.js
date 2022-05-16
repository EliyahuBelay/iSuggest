const user = require('../Models/UserModel.model');

module.exports = {
    GetUsers: (req,res)=>{
        user.find()
        .then(data=>res.send(data))
        .catch(err=>console.log({massege:err}))
    }
}