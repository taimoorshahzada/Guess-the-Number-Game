let correctNumber = randomNumber();
let guesses = [];

window.onload = function(){
    document.getElementById("check_me").addEventListener("click",playGame);
    document.getElementById("restart_game").addEventListener("click",initGame);
 
}

function playGame(){
    var value = document.getElementById("number_guess").value;
    showResults(value);
    saveGuess(value);
    showHistory();
}

function saveGuess(guess){
    guesses.push(guess);
    console.log(guesses);
}

function showHistory(){
    let index = guesses.length - 1;
    let list = "<ul id='ul'>";
    while(index >= 0){
        list += "<li class='li'>" + "You guessed " + guesses[index] + "</li>";
        index -= 1;
    }
    list += '</ul>';
    document.getElementById("history").innerHTML = list;
}

function showResults(value){
    
let totalguesses = guesses.length+1;
    if(value < correctNumber){
        
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.border = "2px solid #ff9800";
        document.getElementById("result").innerHTML = "Your guess is too low"; 
        document.getElementById("result").style.color = "#ff9800";
     }
    else if(value > correctNumber){
        
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.border = "2px solid #ff9800";
        document.getElementById("result").innerHTML = "Your guess is too high"; 
        document.getElementById("result").style.color = "#ff9800";
    
    }
    else if(value == correctNumber){
        document.getElementById("result").style.display = "block";
        document.getElementById("result").style.border = "2px solid green";
        document.getElementById("result").innerHTML = "Awesome, You got it! You guessed a number in "+ totalguesses + " guesses."; 
        document.getElementById("result").style.color = "green";
    }
}

function initGame(){
    correctNumber = randomNumber();
    document.getElementById("result").style.display = "none";
    guesses = [];
    showHistory();
    document.getElementById("number_guess").value = "";

}


function randomNumber(){ 
    let r = Math.random();
    let random = Math.floor(r * 100);
    return random;
}