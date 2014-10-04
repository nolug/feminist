$(document).ready(function(){

var start1 = '"How dare you <verb> me you <adjective> <adjective> <noun>"';
var start2 = '"If you ever <verb> me again you <noun> you will be even more of <noun>"'
var verb = ['sexify','sexualize','insult','eye-rape', 'misogynize', 'decimate'];
var adjective = ['heteronormative', 'misogynistic', 'neckbeard','enabling'];
var noun = ['racist', 'misogynist', 'baby-slapper', 'seal-clubber'];
var command = ["go away", "die", "eat slugs", "play in traffic"]

var map = {'<start1>': start1, '<verb>':verb, '<adjective>':adjective,'<noun>' : noun, '<command>': command};
var initialMap = [start1, start2];


function stringParser(s) {
	while(s.indexOf('<')>0){
	for(var key in map){
		if(s.indexOf(key) > 0 ){
			var word = map[key][(Math.floor(Math.random()*(map[key]).length))];
			if(s.indexOf(word) < 0){
			s = s.replace(key, word);
	}
		}
	}
}
	return s;
}

function insertWord(s){
	return randomWord(map[s]);
}

function randomSentence(){
	var i = Math.floor(initialMap.length*Math.random());
	return initialMap[i];
}

$("h1").click(function(){


		$("p").text(stringParser(randomSentence()));
	});


});
