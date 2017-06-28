var net = require('net');

var server = net.createServer(function(socket) {
	//listening event is not working
	socket.on('listening',() => {
		console.log('listening for connections');
	    });
	console.log("client connected"); //message on new connection
	console.log(socket.address()); //This will display the client address
	socket.write('Technorip Echo server\r\n'); //imediate message to client
	//tring to read the data
	socket.on('data',(data) => {
		var chunck ;
		chunck = data;
		console.log("Data chunck:");
		console.log(chunck);
		console.log("Data length:");
		console.log(chunck.length);
		console.log("Data in ascii");
		console.log(chunck.toString('ascii'));
		console.log("Data in utf8");
		console.log(chunck.toString('utf8'));
		console.log("Data in utf16le");
		console.log(chunck.toString('utf16le'));
		console.log("Data in binary");
		console.log(chunck.toString('binary'));
		console.log("Data in hex");
		console.log(chunck.toString('hex'));
		console.log(data.length);
		console.log(data);
	    });

	//socket.pipe(socket);	

	//message on disconnecting client
	socket.on('end', () => {
		console.log('client disconnected');
	    });
    });

server.listen(8010, '0.0');