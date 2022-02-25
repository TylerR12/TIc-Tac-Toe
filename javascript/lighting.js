var current_mode = "dark";

function mode(){

    document.body.classList.contains("dark-theme") ? light() : dark(); 

    if(current_mode == "dark"){
        current_mode = "light";
        console.log(current_mode);
        light();
    }

    else if(current_mode == "light"){
        current_mode = "dark";
        console.log(current_mode);
        dark();
    }


}

function light(){

    var board_background = document.getElementById("board");
    document.body.style.background = "rgb(223,233,233)";
    board_background.style.background = "rgb(223,233,233)";
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");

}

function dark(){
    var board_background = document.getElementById("board");

    document.body.style.background = "#202124";
    board_background.style.background = "#202124";
    document.body.classList.add("dark-theme");
    document.body.classList.remove("light-theme");

}