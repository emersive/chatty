var http = require('http'); 
var port = 80001; 

http.createServer(function (request, response){ 
	response.writeHead(200, {'Content-Type': 'text/json'});
	response.write('Hello World!');
	response.end(); 
	
}).listen(port);

console.log('Server running at ' + port);