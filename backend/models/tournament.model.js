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
});
module.exports = mongoose.model('Tournament', Tournament);