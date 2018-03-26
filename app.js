var express     = require('express');
var socket      = require('socket.io');
var app         = express();
var server      = require('http').createServer(app);  
var io          = require('socket.io')(server);

server.listen(3000);
app.get('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

// Sockets
io.on('connection', function(socket){
    
    socket.on('led', function(data){
        io.emit('led', data);
    });

});