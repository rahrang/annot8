var mongoose = require('mongoose');

var User = mongoose.model('User', {
    firstName: {
        type: String,
        required: false,
        trim: true,
        minlength: 1
    },
    lastName: {
        type: String,
        required: false,
        trim: true,
        minlength: 1
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

module.exports = { User }