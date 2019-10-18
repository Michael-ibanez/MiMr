const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/mimr', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = {
    User: require('../users/userModel.js')
};
