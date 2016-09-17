/**
 * Created by Root on 2016-09-17.
 */
var highscores = "http://projects.saltor.nyc:3030/player/"

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
    return player;
}

console.log(getJSONHighscores("ExRuneSlayer"));

