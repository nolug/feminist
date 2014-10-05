$(document).ready(function(){

var start1 = 'How dare you <verb> me you <adjective> <adjective> <noun>';
var start2 = 'If you ever <verb> me again you <adjective> <noun> <noun> I will call the police'
var start3 = "Why don't you just <command> you <adjective> <adjective> <noun>"
var start4 = "How come <noun>s like you think you can just <verb> and <verb> people like me"
var start5 = "Please <command> you <adjective> <noun> and then <command>"
var start6 = "Oh just <command> you <adjective> <noun> before you <verb> any more innocent children"
var start7 = "I'm tired of <adjective> <adjective> <noun>s like you who constantly <verb> and <verb> women like me. Do us all a favor and <command>"
var start8 = "You think you are so cool with your <adjective> <adjective> <adjective> <noun> rhetoric. You aren't."
var start9 = "Every time you <verb> an orphan you make the world a more <adjective> and <adjective> place"
var verb = ['sexify','sexualize','insult','eye-rape', 'misogynize', 'accost', 'patronize','hypersexualize',
'spit heternormative libel in front of', 'interrupt', 'label', 'genderfy', 'stereotypize', 'racify', 'supersexualize','oppress', 'sexile', 'offend', 'objectify'];
var adjective = ['heteronormative', 'misogynistic', 'neckbeard','enabling', 'arrogant', 'homophobic', 'heterophobic',
'ignorant','conservative', 'binary', 'breeder', 'cis-male', 'priveliged','cisnormative', 'fluid-hating','offensive', 'hatred-filled'];
var noun = ['racist', 'misogynist', 'baby-slapper', 'seal-clubber', 'republican', 'woman-hater', 'deviant','predator',
'fascist', 'villian', 'creeper', 'stalker', 'cretin', 'vagina-puncher', 'boob-hater', 'man-whore', 'piece of shit'];
var command = ["go away", "die", "eat slugs", "play in traffic", 'leave me be', 'eat arsenic', 'attend a feminist conference',
'apologize', 'take a walk', 'go to a cultural sensitivity training class', 'eat shit', 'watch your privelige', 'drink acid', 'fly a kite in a rainstorm',
'swim in a puddle of lava', 'jump off of a building']

var map = {'<start1>': start1, '<verb>':verb, '<adjective>':adjective,'<noun>' : noun, '<command>': command};
var initialMap = [start1, start2, start3, start4,start5,start6,start7,start8,start9];


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

$("button").click(function(){
		$('p').fadeOut('medium', function() {$("p").text('"' + stringParser(randomSentence()) + '"');});
		$('p').fadeIn('medium');
		//$("p").text('"' + stringParser(randomSentence()) + '"');
	});


});
