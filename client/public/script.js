var typedLetter="";
var count = 0;
var letters = [];


document.addEventListener("keydown",function(event){
    console.log(letters[count].classList[0])
    if(event.key === typedLetter){
        letters[count].classList.remove("typing")
        if(typedLetter === letters[count].innerHTML){
        letters[count].classList.add("done")//changes typedLetter to next letter on correct typing
    }
        moveCar();
        count++;
        typedLetter = letters[count].innerHTML;
    }else if(event.shiftKey === false && event.ctrlKey === false && event.altKey === false) {
        letters[count].classList.add("wrong")
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



//interval is for showing cursor in every second, this is done by adding a class "typing" that sets the background color of the letter to be typed in white
setInterval(() => {
    letters[count].classList.add("typing");
    setTimeout(() => {
        letters[count].classList.remove("typing")
    }, 500);
}, 1000);