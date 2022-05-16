const User = require('../Models/UserModel.model');


const getUsers = (req, res) => {
    User.find({})
        .then(users => res.status(200).json(users))
        .catch(err => res.status(500).json({ massege: 'failed to get users' ,error: err}))
}

module.exports = {getUsers};