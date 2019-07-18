var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
    fs.readFile('./index.html', function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data, 'utf-8');
    })
}).listen(666, '127.0.0.1');
console.log('process.pid',process.pid)
console.log('Server running at http://127.0.0.1:666');

var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('user connected');
    socket.on('disconnect', function(){
        console.log('User disconnected');
    })
});