const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    email: {
        type: 'string',
        require: true,
    },
    password: {
        type: 'string',
        require: true,
    },
    family_name: {
        type: 'string',
        require: true,
    },
    given_name: {
        type: 'string',
        require: true,
    },
    picture: {
        type: 'string',
        require: false,
    },
    verified: {
        type: 'boolean',
        require: true,
    },
    status: {
        type: 'string',
        require: true,
    },
    role:{
        type: 'string',
        require: true,
    }

});

const User = mongoose.model('User', UserSchema);

module.exports = User;