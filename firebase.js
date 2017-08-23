var firebase = require("firebase");


// Import Admin SDK


var admin = require("firebase-admin");

var net = require('net');


console.log("code starts here")


var config = {
    apiKey: "AIzaSyAwK0m6wH9vRsnfK4A1CMUHCtrGtc3197I",
    authDomain: "kranioz-1488115384881.firebaseapp.com",
    databaseURL: "https://kranioz-1488115384881.firebaseio.com",
    projectId: "kranioz-1488115384881",
    storageBucket: "kranioz-1488115384881.appspot.com",
    messagingSenderId: "1031982103126"
  };




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
		console.log("Data Recieved:");
		console.log(data);
		console.log("Data length:");
		console.log(data.length);
		console.log("Data in ascii");
		var dataString = data.toString('ascii');
		console.log(dataString);

		//returning acknowledge

		var flag; 
		flag = socket.write(dataString) ;
		console.log(flag);

		firebase.database().ref('device/' + 999+'/log').push({
    	data: dataString,
  		});
		
	    });
	socket.on('error',(err) => {
		console.log("Error occured");
		console.log(err);
	    });

	//socket.pipe(socket);	

	//message on disconnecting client
	socket.on('end', () => {
		console.log('client disconnected');
	    });
    });

server.listen(8010, '0.0');

  firebase.initializeApp(config);

   // Get a reference to the database service
  var database = firebase.database();


var myEmail = "tom@bfz.in"
var myPassword = "password"

firebase.auth().signInWithEmailAndPassword(myEmail, myPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});


//   function writeData(imei, msg) {
// firebase.database().ref('device/' + imei).set({
//     data: msg,
//   });
// }
