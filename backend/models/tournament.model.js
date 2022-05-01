const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Tournament = new Schema({
    register_game: {
        type: String
    },
    score: {
        type: String
    },
    club_name: {
        type: String
    },
    total_players: {
        type: String
    },
    date: {
        type: String
    },
    time: {
        type: String
    }
});
module.exports = mongoose.model('Tournament', Tournament);