var net = require('net');

var server = net.createServer(function(socket) {
	socket.on('listening',() => {
		console.log('listening for connections');
	    });
	console.log("client connected"); //message on new connection
	console.log(socket.address());
	socket.write('Technorip Echo server\r\n'); //imediate message to client

	socket.pipe(socket);	

	//message on disconnecting client
	socket.on('end', () => {
		console.log('client disconnected');
	    });
    });

server.listen(8010, '0.0');