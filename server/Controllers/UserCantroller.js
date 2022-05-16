const UserCollection = require('../Models/UserModel');

module.exports = {
    getUsers: async(req,res)=>{
        await UserCollection.find()
        .then(users => {res.status(200).send(users)})
        .catch(err => res.status(500).send({massege: 'failed to get users',error:err}))
    },

    getUserById: async (req,res)=>{
        await UserCollection.findById({_id:req.params.id})
        .then(users => res.status(200).send(users))
        .catch(err => res.status(500).send({massege:'could not find the user',error:err}))
    }
};