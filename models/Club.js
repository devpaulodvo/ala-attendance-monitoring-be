const mongoose = require('mongoose');

const ClubSchema = new mongoose.Schema({
    clubname: {
        type: 'string',
        required: true
    },
    status: {
        type: 'boolean',
        required: true
    }
});

const Club = mongoose.model('Club', ClubSchema);

module.exports = Club;