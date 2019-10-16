// This is what heroku will look at to start running the app
// No need to edit this MANUEL AND MARCOS

// Creates constants
const express = require('express');
const http = require('http');
const path = require('path');

// Starts express
var app = express();

// Creates app and starts the app on either local(8080) or online
// and is determined by heroku at runtime
app.use(express.static(path.join(__dirname, 'build')));

const port = process.env.PORT || '8080';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`Running on localhost:${port}`));
