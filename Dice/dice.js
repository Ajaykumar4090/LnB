let roller = document.querySelector("#buttonRoll");
let i=0,j=0;
roller.addEventListener("click", function(){
    let randomDice = Math.floor((Math.random() * 6 ) + 1);
    let randomDice2 = Math.floor((Math.random() * 6 ) + 1);
    let image1 = document.querySelector(".dice1");
    let image2 = document.querySelector(".dice2");
    let diceLocation = "/Image/"+"dice"+randomDice+".png";
   
    image1.setAttribute("src", diceLocation);

    let diceLocation2 = "/Image/"+"dice"+randomDice2+".png";
    
    image2.setAttribute("src", diceLocation2);

    if(randomDice > randomDice2){
        document.querySelector("h1").innerHTML="🏆 Player 1 win !";
        document.querySelector(".s1").innerText="SCORE :"+ ++i;
      
    }

    else if (randomDice < randomDice2){
        document.querySelector("h1").innerHTML="Player 2 win ! 🏆";
        document.querySelector(".s2").innerText="SCORE :" + ++j;
    }

    else{
        document.querySelector("h1").innerHTML="🏆 Match Draw ! 🏆";
    }
    buttonRoll.innerHTML = "Roll Again !";
   
});
document.querySelector("#buttonagain").addEventListener("click",function(){
    location.reload();
});