var http = require('http'); 
var port = 8001; 

var messages = ['testArray1','testing'];	


function messageCallback(request, response){


	response.writeHead(200, {
		'Content-Type': 'application/json', 
		'Access-Control-Allow-Origin' : "*"
	});

	if (request.method == 'GET') {
		response.write(JSON.stringify(messages));
	}

	if (request.method == 'POST') {
		var postData = '';

		request.on('data', function(chunk) {
			postData += chunk.toString();
		});

		request.on('end', function() {
		messages.push(JSON.parse(postData));
		});

if (request.method == 'OPTIONS') {
	response.writeHead(200, {
		'Content-Type': 'application/s', 
		'Access-Control-Allow-Origin' : "*",
		'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
	});	
}


}
	response.end();
}


	// if(methodType == 'GET') {
	// 	var jsonText = JSON.stringify(messages[0]);
	// 	response.end(messages[0]); 
	// }

	// if(methodType == 'POST') {
	// 	var jsonText = JSON.stringify(messages[1]);
	// 	response.end(messages[1]); 
	// }

http.createServer(messageCallback).listen(port);

console.log('Server running at ' + port);

