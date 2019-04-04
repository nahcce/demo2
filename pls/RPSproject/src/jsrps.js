var choices = ["rock", "paper", "scissors"];
var i = Math.floor(Math.random() * 3)
var computerChoice = choices[i]
var up = 0;
var cp = 0;



function during(option1, option2) {
    if (option1 === "rock") {
        if (option2 === "paper") {
            return "you win"
        } else {
            return "you lose"
        }
    }
    if (option1 === "rock") {
        if (option2 === "scissors") {
            return "rock wins"
        } else {
            return "you lose"
        }
    }
    if (option1 === "paper") {
        if (option2 === "scissors") {
            return "scissors wins"
        } else {
            return "you lose"
        }
    }
    if (option1 === option2) {
        return "Tie"
    }
}
function setScore(){
    var score_div = document.getElementById("score").innerHTML = userScore + "  " + compScore
}

function game(userch){
    var box = document.getElementById("ch");
    box.style.display = "inline-flex";
    var userDiv = document.getElementById("obj");
    userDiv.innerHTML = userch;
}

const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

rock_div.addEventListener('click', function(){
    console.log("rock")
})

paper_div.addEventListener('click', function(){
    console.log("paper")
})

scissors_div.addEventListener('click', function(){
    console.log("scissors")
})

function continueG(){
    i = Math.floor(Math.random() * 3);
    computerChoice = choices[i];
    box.style.display = "none";
}

setInterval(setScore, 40);
function convert(word){
    if(word === "paper") return '<div id="ainput"></div>';
    if(word === "scissors") return '<div id="binput"></div>';
}

function win(choice){
    up++;
    up_span.innerHTML = up;
    cp_span.innerHTML = pc;
    document.getElementById(uc).classList.add('green-border');
}

function draw(){

}

function lose(uc, pc) {
    cp++;
    up_span.innerHTML = up;
    cp_span.innerHTML = cp;
    document.getElementById(pc).classList.add('red-border');
}