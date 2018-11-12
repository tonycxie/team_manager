const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb://localhost/team_manager',
    {useNewUrlParser: true},
);

module.exports = mongoose;