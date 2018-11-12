const mongoose = require('../config/mongoose.js');

let PlayerSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 2},
    position: {type: String, required: true, minlength: 2},
    status: {type: String, default: "Undecided"}
}, {timestamps: true});
mongoose.model('Player', PlayerSchema);

module.exports = {
    playerSchema: PlayerSchema,
    playerModel: mongoose.model('Player', PlayerSchema)
}