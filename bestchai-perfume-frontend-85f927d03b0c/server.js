var http = require('http');

//create a server object:
http.createServer(function (req, res) {
	// Set CORS headers
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
  	res.write('Hello World!'); //write a response to the client
  	res.end(); //end the response
}).listen(12345); //the server object listens on port 8080