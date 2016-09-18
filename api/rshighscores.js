/**
 * Created by Root on 2016-09-17.
 */
var highscores = "http://projects.saltor.nyc:3030/player/";

/*
 @link - Insert the link of the address to receive JSON data.
 */
function getJSON(link){
    var request = new XMLHttpRequest();
    request.open("GET",link,false);
    request.send(null);
    return request.responseText;
}
/*
@name - Grabs highscores data of the player.
 */
function getJSONHighscores(name){
    highscores = highscores + name;
    var player = getJSON(highscores);
    var playerObj = JSON.parse(player);
    return playerObj;
}

var playerData = getJSONHighscores("ExRuneSlayer");
//setTimeout(function(){
//    console.log(playerData);
//},500);
//$.each(playerData, function(index, value){
//    console.log(index + " " + JSON.stringify(value.skill) + ":" + JSON.stringify(value.level));
//});

