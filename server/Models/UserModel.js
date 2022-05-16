const mongoose = require('mongoose');
const {isEmail} = require('validator');

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: ['Please enter your First Name'] },
        lastName: { type: String, required: ['Please enter your Last Name'] },
        email: { type: String, required: ['Please enter your Email'], unique: true, validate: [isEmail, 'Please enter a valid Email'] },
        password: { type: String, minlength: [6, 'Minimum password length is 6 characters'] },
        lastLogin: { type: Date, default: Date.now() },
        isLogin: { type: Boolean, default: false }
    },
    {timestamps:true}
)

const User = mongoose.model('User',userSchema);

module.exports = User;