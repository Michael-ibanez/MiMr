// grab the things we need
const mongoose = require('mongoose');

// create a schema
const user = mongoose.Schema({
    name: { type: String, required: true },
    password: { type: String, required: true }
});

// the schema is useless so far
// we need to create a model using it
// make this available to our users in our Node applications
mongoose.model('User', user);
module.exports = mongoose.model('User');
