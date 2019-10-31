var socket_io = require('socket.io');
var io = socket_io();
var socketApi = {};
const tweets = require('./routes/tweets');

socketApi.io = io;

io.of('/tweets').on('connection', function(socket) {
    socket.emit('tweets', {tweets: 'eventually a bunch of tweets!'});
    tweets.socketConnection = socket;
    tweets.startTwitterStream();
})

module.exports = socketApi;