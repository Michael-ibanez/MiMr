const User = require('./userModel.js')

module.exports = {
    authenticate,
    create,
};

async function authenticate({ username, password }) {
    const user = await User.findOne({ username });
}

async function create(userParam) {
    // validate
    if (await User.findOne({ username: userParam.username })) {
        throw 'Username "' + userParam.username + '" is already taken';
    }

    const user = new User(userParam);

    // save user
    await user.save();
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
