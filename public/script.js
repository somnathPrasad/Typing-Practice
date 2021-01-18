var typedLetter="";
var count = 0;
var letters = [];
document.addEventListener("keydown",function(event){

    if(event.key === typedLetter){

        if(typedLetter === letters[count].innerHTML){
        letters[count].classList.add("active")//changes typedLetter to next letter on correct typing
    }
        moveCar();
        count++;
        typedLetter = letters[count].innerHTML;
    }
});

function moveCar(){
    var element = document.getElementById("car");
    element.style.left = parseInt(element.style.left) + 9 + 'px';
  }

window.addEventListener("load",function(){
 letters = document.getElementsByClassName("letter");


typedLetter = letters[count].innerHTML;//sets first letter of parah to active on load of website
})