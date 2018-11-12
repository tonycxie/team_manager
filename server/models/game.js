const mongoose = require('../config/mongoose.js');
const player = require('../models/player.js');
const PlayerSchema = player.playerSchema;

let GameSchema = new mongoose.Schema({
    number: {type: Number, min: 1},
    players: [PlayerSchema]
}, {timestamps: true});

module.exports = mongoose.model('Game', GameSchema);