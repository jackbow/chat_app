// Imports
// =======
let express = require('express');
let path = require("path");
let mongoose = require('mongoose');
let MsgDB = require('./data.js'); 

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

// Setup socket.io
// =======
let io = require('socket.io').listen(server);
io.set('origins', 'https://chat.jack.town:*')

// Setup mongoose
// =======
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, function (error) {
    if (error) {
        console.log(error)
        console.log('connection error')
    }
    else {
        console.log("connection successful");
    }
});

// Set socket.io interactions
// =======
io.on('connection', function (socket) {
    //console.log('user connected')
    socket.on('fetch', idx => {
        const msgs = (idx === -1) ? 
            MsgDB.find().sort({ _id: -1 }).limit(10) :
            MsgDB.find({})
                .where('idx')
                .gte(idx - 10 < 0 ? 0 : idx-10)
                .lt(idx)
        msgs
            .exec((err, msgsObj) => {
                msgsObj = (idx === -1) ? msgsObj.reverse() : msgsObj
                socket.emit('msgs', msgsObj)
        })
    })
    socket.on('msg', msg => {
        // console.log(msg.member.name + ': ' + msg.text) // debug
        MsgDB.create(msg)
        socket.broadcast.emit('msg', msg)
    });
    //socket.on('disconnect', console.log('user disconnected')
});
