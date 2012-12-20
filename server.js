var express = require('express'),
	http = require('http'),
	app = express(),
	port = 80,
	server = app.listen(port),
	io = require('socket.io').listen(server),
	cardboardbox = 'share briefly';
	
app.use(express.static(__dirname + '/html'));
console.log('Server listening to port ' + port);
console.log('');
console.log('Press "Ctrl + C" to terminate the server.');

io.on('connection', function(client){
	setTimeout(function(){
			client.send(cardboardbox);
		}
	,1000);
	client.on('message', function(whisper){
		cardboardbox = whisper;
		client.send(whisper);
		client.broadcast.send(whisper);
	});
});