

// main function for call other functiion mouse click button
function btnclick(){

  this.style.color="white";
  var key=this.innerHTML;
  makeSound(key);
  animation(key);

}
//function for animation
function animation(currentkey){
  var btndd = document.querySelector("."+currentkey);
  btndd.classList.add("pressed");
  setTimeout(function(){
    btndd.classList.remove("pressed");
  },100)
}
// keybord button detect
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  animation(event.key);
});

//function for sound

function makeSound(key){
  switch (key) {
    case "w":var audio=new Audio("sounds/tom-1.mp3");
    audio.play();
      break;
    case "a":var audio=new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":var audio=new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":var audio=new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":var audio=new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "k":var audio=new Audio("sounds/snare.mp3");
      audio.play();
        break;
    case "l":var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;
    default:

  }
}
  //to detect all buttons in documnet
for(var n=0;n<document.querySelectorAll(".drum").length;n++){
    document.querySelectorAll(".drum")[n].addEventListener("click",btnclick);

}
