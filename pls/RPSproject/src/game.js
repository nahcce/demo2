var choices = ["paper", "rock", "scissor"];
var i = Math.floor(Math.random()*3);
var ComputerChoice = choices[i];
var UserPoints = 0;
var ComputerPoints = 0;

var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");
var rock = document.getElementById("rock");


// function score(){
//     var score_div = document.getElementById("result").innerHTML = UserPoints + " - " + ComputerPoints;
// }

setInterval(score, 50);

function convert(word){
    var paper = document.getElementById("paper");
    var scissor = document.getElementById("scissor");
    if(word === "paper") return paper;
    if(word === "scissor") return scissor;
    return scissor;
}

function game(UserChoice){
    var box = document.getElementById("conflict");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("ainput");
    userDiv.innerHTML = convert (UserChoice);
    var comDiv = document.getElementById("binput");
    comDiv.innerHTML = convert (ComputerChoice);
    if(UserChoice === "paper" && ComputerChoice === "rock" || UserChoice === "rock" && ComputerChoice === "scissor" || UserChoice === "scissor" && ComputerChoice === "paper"){
        win();
    }
    else if(UserChoice === ComputerChoice){
        draw();
    }
    else{
        lose();
    }
}

function win(){
    alert("Victory!");
}

function lose(){
    alert("Defeat!");
}

function draw(){
    alert("Tied!");
}

function computerchoices() {
    const choices = ["rock", "paper", "scissors"];
    const randomnum = Math.floor(Math.random() * 3);
    return choices[randomnum];
}

// //
//
// const rock_div = document.getElementById("rock")
// const paper_div = document.getElementById("paper")
// const scissors_div = document.getElementById("scissors")
//
// rock_div.addEventListener('click', function(){
//     console.log("rock")
// })
//
// paper_div.addEventListener('click', function(){
//     console.log("paper")
// })
//
// scissors_div.addEventListener('click', function(){
//     console.log("scissors")
// })
//
// function continueG(){
//     i = Math.floor(Math.random() * 3);
//     computerChoice = choices[i];
//     box.style.display = "none";
// }
//
// setInterval(setScore, 40);
// function convert(word){
//     if(word === "paper") return '<div id="ainput"></div>';
//     if(word === "scissors") return '<div id="binput"></div>';
// }
//
// function win(choice){
//     UserPoints+1;
//     document.getElementById(choice).classList.add("green-border")
// }
//
// function draw(){
//
// }
//
// function lose(choice) {
//     ComputerPoints+1;
//     document.getElementById(choice).classList.add('red-border');
//}