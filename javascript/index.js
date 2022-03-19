const tiles = Array.from(document.querySelectorAll('.tile'));


// var one = document.getElementById("one");



/* 
    [ 0 ]   [ 1 ]   [ 2 ]

    [ 3 ]   [ 4 ]   [ 5 ]

    [ 6 ]   [ 7 ]   [ 8 ]
*/

var board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let active = true;


// document.getElementById("currents").value = "X";




// console.log(tiles)

function changePlayer(){
    var currentChange = document.getElementById("currents");
    currentChange.value = "X";

    if (currentPlayer == 'X'){
        currentPlayer = 'O';
    }
    else if(currentPlayer == 'O'){
        currentPlayer = 'X';

    }
    else{
        currentPlayer = 'X';
    }

    currentChange.value = currentPlayer;
    console.log(currentChange.value);
}

function randomizePlayer(){
    var currentChange = document.getElementById("currents");
    // currentChange.value = "X";
    let rand = Math.floor(Math.random() * 2);

    if (rand == 0){
        currentPlayer = 'X';
    }
    else if (rand == 1){
        currentPlayer = 'O';
    }
    else{
        currentPlayer = 'X';
    }

    currentChange.value = currentPlayer;

}

function waitReset(){
    var currentChange = document.getElementById("currents");
    currentChange.value = "";
    currentPlayer = '';

}

function winner(win){

    var win = 0;


    if(board[0] == board[3] && board[0] == board[6] && board[0] != '' ){
        // console.log("winner 036");
        win = 1;
    }

    else if(board[0] == board[1] && board[0] == board[2] && board[0] != '' ){
        // console.log("winner 012");
        win = 1;
    }

    else if(board[0] == board[4] && board[0] == board[8] && board[0] != '' ){
        // console.log("winner 048");
        win = 1;
    }

    else if(board[1] == board[4] && board[1] == board[7] && board[1] != '' ){
        // console.log("winner 147");
        win = 1;
    }

    else if(board[2] == board[5] && board[2] == board[8] && board[2] != '' ){
        // console.log("winner 258");
        win = 1;
    }

    else if(board[2] == board[4] && board[2] == board[6] && board[2] != '' ){
        // console.log("winner 246");
        win = 1;
    }

    else if(board[3] == board[4] && board[3] == board[5] && board[3] != '' ){
        // console.log("winner 345");
        win = 1;
    }

    else if(board[6] == board[7] && board[6] == board[8] && board[6] != '' ){
        // console.log("winner 678");
        win = 1;
    }

    else if(board[0] !=='' && board[1] != '' && board[2] != '' && board[3] != '' && board[4] != '' && board[5] != '' && board[6] != '' && board[7] != '' && board[8] != ''){
        // console.log("tie");
        win = 2;
    }

    else{
        // console.log("no winner");
        win = 0;
    }

    // console.log("return:" +win);
    return win;

}


function clr(){
    board = ['', '', '', '', '', '', '', '', ''];
    var x = '';
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");
    one.value = x;
    two.value = x;
    three.value = x;
    four.value = x;
    five.value = x;
    six.value = x;
    seven.value = x;
    eight.value = x;
    nine.value = x;

    var annouce = document.getElementById("winner");
    annouce.value = "";
    randomizePlayer();

    console.log(board);

    // var currentChange = document.getElementById("currents");
    // currentChange.value = "X";
}


function announce(){
    var annouce = document.getElementById("winner");
    annouce.value = currentPlayer+" Wins";
    tally();
    waitReset();
}

function announceTie(){
    var annouce = document.getElementById("winner");
    annouce.value = "Tie";
    waitReset();

}


function tally(){

    var playerOne = document.getElementById("playerOne");
    var playerTwo = document.getElementById("playerTwo");

    if(currentPlayer == "X"){
        playerOne.value ++;
    }
    else if(currentPlayer == "O"){
        playerTwo.value ++;
    }
    else{
        console.log("something went wrong");
    }

}



function tileOne(){
    if(board[0] == ""){
        var one = document.getElementById("one");
        var x = currentPlayer;
        // var win = 0;
        // changePlayer();
        console.log(x);
        board[0] = x;
        one.value = x;
        console.log(board);
        var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}

}

function tileTwo(){

    if(board[1] == ""){
        var two = document.getElementById("two");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[1] = x;
        two.value = x;
        console.log(board);
        var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}


}

function tileThree(){
    if(board[2] == ""){
        var three = document.getElementById("three");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[2] = x;
        three.value = x;
        console.log(board);
        var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}

}

function tileFour(){
    if(board[3] == ""){
    var four = document.getElementById("four");
    var win;
    var x = currentPlayer;
    // changePlayer();
    console.log(x);
    board[3] = x;
    four.value = x;
    console.log(board);
        var wins = winner();

    console.log("win value:" +wins);

    if(wins == 1){
        console.log("Winning move");
        announce();
    }
    else if(wins > 1){
        console.log("Tie");
        announceTie();
    }
    else{
        // console.log("not winnning move");
        changePlayer();
    }
    }
    else{}


}

function tileFive(){
    if(board[4] == ""){
        var five = document.getElementById("five");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[4] = x;
        five.value = x;
        console.log(board);
            var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}

}

function tileSix(){
    if(board[5] == ""){
        var six = document.getElementById("six");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[5] = x;
        six.value = x;
        console.log(board);
            var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}

}

function tileSeven(){
    if(board[6] == ""){
        var seven = document.getElementById("seven");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[6] = x;
        seven.value = x;
        console.log(board);
            var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}

}

function tileEight(){
    if(board[7] == ""){
        var eight = document.getElementById("eight");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[7] = x;
        eight.value = x;
        console.log(board);
            var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}



}

function tileNine(){
    if(board[8] == ""){
        var nine = document.getElementById("nine");
        var x = currentPlayer;
        var win;
        // changePlayer();
        console.log(x);
        board[8] = x;
        nine.value = x;
        console.log(board);
            var wins = winner();
    
        console.log("win value:" +wins);
    
        if(wins == 1){
            console.log("Winning move");
            announce();
        }
        else if(wins > 1){
            console.log("Tie");
            announceTie();
        }
        else{
            // console.log("not winnning move");
            changePlayer();
        }
    }
    else{}

}
