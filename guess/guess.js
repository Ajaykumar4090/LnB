"use strict";
let randomNumber = Math.trunc(Math.random() * 20 + 1);
let chances = 5;

document.querySelector(".number").textContent = randomNumber;
const messages = function(message){
    document.querySelector(".message").textContent = message;
};

const match_value = document.querySelector("#match_value");
match_value.addEventListener("click",function(){
    const userNumber = Number(document.querySelector(".guess").value);
    if(!userNumber){
        messages("No value !");
    }
    else if(randomNumber === userNumber){
        messages("You are Right !!");
        chances--;
        document.querySelector(".score").textContent = chances;
        document.querySelector('#again').classList.toggle("hidden");
        document.querySelector('#match_value').classList.add("hidden");
    }
    else if(randomNumber !== userNumber){
        if(chances > 1){
            messages(randomNumber > userNumber ? "Guess Higher !!" : "Guess Lower !!");
            chances--;
            document.querySelector(".score").textContent = chances;
        }
        else{
            messages("You Lost !!");
            document.querySelector(".score").textContent = 0;
            document.querySelector("#again").classList.toggle("hidden");
            document.querySelector("#match_value").classList.toggle("hidden");
        }
    }
});

document.querySelector("#again").addEventListener("click", function(){
    chances = 5;
    randomNumber = Math.trunc(Math.random() * 20 + 1);
    messages("Let's Start !!");
    document.querySelector(".score").textContent = chances;
    document.querySelector(".number").textContent = "??";
    document.querySelector(".guess").value = "";
    document.querySelector("#again").classList.toggle("hidden");
    document.querySelector("#match_value").classList.remove("hidden");

});