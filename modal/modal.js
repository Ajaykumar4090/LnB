let display=document.querySelector(".container");
let closeu=document.querySelector(".x");
closeu.addEventListener("click",function(){
      display.classList.add("hidden");
      
});
display.addEventListener("click",function(){
    closeu.style.color="red";
});
 