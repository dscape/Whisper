var express = require('express'),
	http = require('http'),
	app = express(),
	port = 80,
	server = app.listen(port),
	io = require('socket.io').listen(server),
	cardboardbox = 'share briefly', //Default Whisper.
	sanitize = require('validator').sanitize;
app.use(express.static(__dirname + '/html')); //Serves static files from the HTML folder
console.log('');
console.log('Server listening to port ' + port);
console.log('Press "Ctrl + C" to terminate the server.');

io.on('connection', function(client){
	setTimeout(function(){
			client.send(cardboardbox);
		}
	,1000); //Branding!
	client.on('message', function(dirtywhisper){
		var whisper=sanitize(dirtywhisper).entityEncode(); //Squeaky clean!
		cardboardbox = whisper;
		client.send(whisper);
		client.broadcast.send(whisper);
	});
});