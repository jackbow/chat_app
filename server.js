// Imports
// =======
let express = require('express');
let path = require("path");
let ExpressPeerServer = require('peer').ExpressPeerServer;

// Setup express
// =======
const port = 9000
let app = express();
app.set('port', port);
app.use(express.static(path.join(__dirname, 'client/build')));
let server = app.listen(port);
// set frontend directory
app.get('/public', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/public/index.html'));
})

// Setup peer.js
// =======
let peerserver = ExpressPeerServer(server);
app.use('/peer', peerserver);

// Setup socket.io
// =======
let io = require('socket.io').listen(server);
io.set('origins', 'http://localhost:*')
// io.set('origins', 'http://chat.jack.town:*')
io.on('connection', function (socket) {
    console.log('peer connected')
    // send peerID to all peers
    // they'll connect to the new peer
    socket.on('peerID', function (peerID) {
        socket.broadcast.emit('peerID', peerID)
    });
});
