const playerModel = require('../models/player.js'),
    Player = playerModel.playerModel,
    Game = require('../models/game.js'),
    path = require('path');

module.exports = {
    create_game: (req, res) => {
        let game = new Game({
            number: req.params.number
        });
        game.save()
            .then(game => res.json({game}))
            .catch(err => res.json({err}));
    },
    add_player_game: (req, res) => {
        Player.find({_id: req.params.id})
            .then(player => {                              
                Game.updateMany({}, {
                    $push: {players: player}
                })
                    .then(games => res.json({games}))
                    .catch(err => res.json({err}));
            })
            .catch(err => {res.json({err})});
    },
    all_players: (req, res) => {
        Player.find({})
            .then(players => res.json(players))
            .catch(err => res.json({err}));
    },
    add_player: (req, res) => {
        let player = new Player({
            name: req.body.name,
            position: req.body.position
        });
        // add player to all the games
        player.save()
            .then(player => {                              
                Game.updateMany({}, {
                    $push: {players: player}
                })
                    .then(games => res.json({games}))
                    .catch(err => res.json({err}));
            })
            .catch(err => {res.json({err})});
    },
    delete_player: (req, res) => {
        Player.findOneAndDelete({_id: req.params.id})
            .then(player => res.json({message: "Successful delete"}))
            .catch(err => {res.json({err})});
        Game.updateMany({}, {
            $pull: {players: {_id: req.params.id}}
        })
            .then(games => res.json({message: "Successful delete"}))
            .catch(err => res.json({err}));
    },
    show_game: (req, res) => {
        Game.find({number: req.params.number})
            .then(game => {res.json(game)})
            .catch(err => {res.json({err})});
    },
    update_game: (req, res) => {
        Game.findOneAndUpdate(
            {number: req.params.game_number, 'players._id': req.params.player_id},
            {$set: {
                'players.$.status': req.params.status
            }},
            {new: true}
        )
            .then(game => {res.json(game)})
            .catch(err => {res.json({err})});
    },
    angular: (req, res) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    }
};