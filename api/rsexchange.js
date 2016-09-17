/**
 * Created by Root on 2016-09-17.
 */
var osexchange = "http://api.rsbuddy.com/grandExchange?a=guidePrice&i=";
var osgrandexchange =  "http://services.runescape.com/m=itemdb_oldschool/api/catalogue/detail.json?item=";
var itemlist = "https://api.myjson.com/bins/48mdq";

/*
@name - Insert the name of the item to get the id for it.

DEV:Check if async is too fast on return id; throw in callback if so.
 */
function getItem(name){
    var itemData = JSON.parse(getJSON(itemlist));
    var id;
    $.each(itemData, function(index, value){
        if(name == value.name){
            id = JSON.stringify(value.id);
        }
    });
    return id;
}

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
@item - Insert either the item name or id to receive JSON data from RSBuddy.
 */
function getRSBJSON(item){
    if(item%1 === 0){
        osexchange = osexchange + item;
        console.log(getJSON(osexchange));
        return JSON.parse(getJSON(osexchange));
    }else{
        var id = getItem(item);
        osexchange = osexchange + id;
        console.log(getJSON(osexchange));
        return JSON.parse(getJSON(osexchange));
    }
}
/*
@item - Insert either the item name or id to receive JSON data from the GE.
 */
function getGEJSON(item){
    if(item%1 === 0){
        osgrandexchange = osgrandexchange + item;
        console.log(getJSON(osgrandexchange));
        return JSON.parse(getJSON(osgrandexchange));
    }else{
        var id = getItem(item);
        osgrandexchange = osgrandexchange + id;
        console.log(getJSON(osgrandexchange));
        return JSON.parse(getJSON(osgrandexchange));
    }

}
