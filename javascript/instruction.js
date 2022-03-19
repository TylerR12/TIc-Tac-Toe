
function open_overlay(){
    var overlay = document.getElementById("overlay");
    var instruction = document.getElementById("info-display");
    overlay.style.display = "block";
    instruction.style.display = "block";
}

function close_overlay(){
    var overlay = document.getElementById("overlay");
    var instruction = document.getElementById("info-display");
    overlay.style.display = "none";
    instruction.style.display = "none";
}