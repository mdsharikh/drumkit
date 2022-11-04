var numberOfDrumButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
     makeSound(buttonInnerHTML);
    });
}
document.addEventListener("keypress", function(event) {
   makeSound(event.key);
});
function makeSound(key) {
    switch (key) {
        case "a":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
        break;
        case "b":
            var some = new Audio("sounds/some.mp3");
             some.play();
        break;    
        case "c":
            var snare = new Audio("sounds/snare.mp3");
             snare.play();
        break;   
        case "d":
            var tom1 = new Audio("sounds/tom-1.mp3");
             tom1.play();
        break;   
        case "e":
            var tom2 = new Audio("sounds/tom-2.mp3");
             tom2.play();
        break;   
        case "f":
            var tom3 = new Audio("sounds/tom-3.mp3");
             tom3.play();
        break;   
        case "g":
            var tom4 = new Audio("sounds/tom-4.mp3");
             tom4.play();
        break;   
                default:console.log(buttonInnerHTML);
            break;
       }
}







