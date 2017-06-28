var net = require('net');

var server = net.createServer(function(socket) {
	socket.write('Technorip Echo server\r\n');
	socket.pipe(socket);
    });

server.listen(8010, '0.0');