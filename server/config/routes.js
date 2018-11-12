const controller = require('../controller/players.js');

module.exports = app=> {
    app.get('/create_game/:number', controller.create_game);
    app.get('/add_player_game/:id', controller.add_player_game);
    app.get('/all_players', controller.all_players);
    app.post('/add_player', controller.add_player);
    app.delete('/delete_player/:id', controller.delete_player);
    app.get('/show_game/:number', controller.show_game);
    app.get('/update_game/:game_number/:player_id/:status', controller.update_game);
    app.all('*', controller.angular);
};