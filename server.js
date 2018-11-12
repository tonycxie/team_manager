const express = require('express'),
    app = express(),
    path = require('path'),
    bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './public/dist/public')));

require('./server/config/routes.js')(app);

app.listen(8000, ()=> {
    console.log('listening on port 8000');
});