const mongoose = require('mongoose');

const SchoolYearSchema = new mongoose.Schema({
    yearstart: {
        type: 'string',
        required: true
    },
    yearend: {
        type: 'string',
        required: true
    },
    status: {
        type: 'boolean',
        required: true
    }
});

const SchoolYear = mongoose.model('SchoolYear', SchoolYearSchema);

module.exports = SchoolYear;