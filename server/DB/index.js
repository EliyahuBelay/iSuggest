const mongoose = require('mongoose');

 mongoose.connect(process.env.CONNECTION_STRING)
    .then(()=>console.log('Connected to MongoDB'))
    .catch(err=>console.log('could not connect to MongoDB...',err));

module.exports = mongoose.connection;