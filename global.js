var menuSelect = new Audio("audio/misc/menu_select.mp3");
var fitnessSelect = new Audio("audio/misc/fitness_selected.mp3");
var historySelect = new Audio("audio/misc/history_selected.mp3");
var floraSelect = new Audio("audio/misc/floraandfauna_selected.mp3");

setInterval(function() { 
    
    if (localStorage.getItem("playSelect") == "true") {
        menuSelect.play();
        localStorage.setItem("playSelect", "false");
    }

    if (localStorage.getItem("playTrail") == "true") {
        var trail = localStorage.getItem("trail");
        if (trail == "history") {
            historySelect.play();
        } 
        else if (trail == "flora") {
            floraSelect.play();
        }
        else if (trail == "fitness") {
            fitnessSelect.play();
        }
        localStorage.setItem("playTrail", "false");
    }

}, 50);