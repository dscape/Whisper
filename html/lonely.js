//LET'S CUSTOMIZE!
var fadeSpeed=300; //Must also be changed in pretty.css

//SOCKET.IO
var socket = io.connect();

//THE EARS-->
socket.on('message', function(whisper){
	receive(whisper);
	if (bug.state==true){//Avast! pirate spies be here!
		console.log("WHISPER: " + whisper);
	}
});

//THE MOUTH-->
function send(whisper){
	socket.send(whisper);
}

//THE ATTRACTIVE BODY-->
function receive(whisper) {
	document.getElementById('whispBox').style.opacity=0;
	setTimeout(function(){
			document.getElementById('whisper').innerHTML=whisper;
			document.getElementById('whispBox').style.opacity=1;
		}
	,fadeSpeed);//For finesse!
}

//CONSOLE OBJECT (for cheaters and scoundrals.)
//[/!\]It's advised this be removed for plotting of secret missions.[/!\]
var bug=new Object();
	bug.state=false;
	bug.on=function(){
		bug.state=true;
		console.log('THE BUG YAWNS AND STRETCHES AWAKE.');//hehe cute.
	}
	bug.off=function(){
		bug.state=false;
		console.log('THE BUG CRAWLS INTO BED.');//sweepy bug dude.
	}

//ON LOAD
function onLoad(){
	document.getElementById('whisPut').focus();
	document.getElementById('whisper').innerHTML='WHISPER';
}