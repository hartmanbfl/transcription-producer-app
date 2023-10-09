const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);

// Serve the Web app
app.use(express.static("public/"));
app.get('/', (req, res) => {
    res.sendFile(__dirname, + '/public/index.html');
});

server.listen(3001, () => {
    console.log('listening on *:3001');
});