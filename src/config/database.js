const mongoose = require('mongoose');

const connect = async () => {
    mongoose.connect('mongodb://localhost/Twitter_Dev');
}

module.exports = connect;