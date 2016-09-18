/**
 * Created by aless on 2016-09-17.
 */

var flaxPrice = getRSBPrice("Flax") * 1000 / 1000;
var cannonPrice = ((getRSBPrice("Cannonball") * 2160) - (getRSBPrice("Steel bar") * 540)) / 1000;
var bakePotato = ((getRSBPrice("Baked potato") * 1300) - (getRSBPrice("Potato") * 1300)) / 1000;



var skillReq = {
    "Flax": {
        "name": "Flax",
        "id": null,
        "skill": null,
        "level": null
    },
    "Cannonball": {
        "name": "Cannonball",
        "id": 14,
        "skill": "smithing",
        "level": 35
    },
    "BakePotato":{
        "name": "Potato",
        "id": 8,
        "skill": "cooking",
        "level": 7
    },
    "Superglass":{
        "name": ""
    }

};
//setTimeout(cannonPrice)

function getProfit(price, cost, priceamount, costamount) {
    if (cost === 0) {
        return (price * priceamount / 1000);
    } else {
        return ((price * costamount) - (cost - costamount)) / 1000;
    }
}

function insertData(name, skill, level, quest, profit) {
    var table = document.getElementById("tablebody");
    var row = table.insertRow(0);
    row.insertCell(0).innerHTML = name;
    if (skill == null && level === null) {
        row.insertCell(1).innerHTML = "";
    } else {
        row.insertCell(1).innerHTML = skill.toUpperCase() + ":" + level;
    }
    row.insertCell(2).innerHTML = quest;
    row.insertCell(3).innerHTML = profit;
}


function checkInsertedData(name, skill, level, quest, profit, id) {
    if(skill == null && level == null){
        insertData(name, skill, level, quest, profit);
    }else{
        $.each(playerData, function(index, value){
            //console.log(index + " " + value);
            if (index === id && JSON.stringify(value.level) >= level) {
                insertData(name, skill, level, quest, profit);
                console.log("USER LEVEL: " + value.level);
            }
        });
    }
}


setTimeout(function () {
    checkInsertedData("Flax", null, null, null, flaxPrice + "k/h");
    checkInsertedData(skillReq.Cannonball.name, "smithing", skillReq.Cannonball.level, "Quest: Dwarf Cannon", cannonPrice + "k/h", 14);
    checkInsertedData(skillReq.BakePotato.name, "cooking", skillReq.BakePotato.level, null, bakePotato+"k/h", 8);
}, 500);


