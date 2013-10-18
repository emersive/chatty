var express = require('express');
var app = express();

var port = 8001; 
var messages = ['testArray1','testing'];	


app.configure(function(){
	app.use(express.bodyParser());
	app.use(function(response, request, next){
		response.header('Access-Control-Allow-Origin', '*');
		response.header('Access-Control-Allow-Methods','Options');
		response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
		next();
	});
});

console.log("this far");

	app.get('/hi',function(request,response){
		response.send(JSON.stringify(messages));
	});

	console.log("this far2");

	app.post('/newchat',function(request,response){
		response.send("test");
		messages.push(request.body);
		console.log(request.body);
	});

app.listen(port);
console.log('Server running at ' + port);

