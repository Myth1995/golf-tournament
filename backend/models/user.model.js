const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    user_name: {
        type: String
    },
    password: {
        type: String
    },
    player_id: {
        type: String
    },
    hp_num: {
        type: String
    },
    age: {
        type: String
    },
    gender: {
        type: String
    },
    email: {
        type: String
    },
});
module.exports = mongoose.model('User', User);