console.log("the message!");

// before trigger function, you have to make variable
// # is for if there is an id or class
var theButton = document.querySelector("#firstButton");
let theText = document.querySelector('h2');
let theBody = document.querySelector('body');
let theImages = document.querySelector("#animals");

theButton.addEventListener('click', isClicked);

function isClicked() {
    console.log("clicked!");
    theText.textContent = "u found us!";
    theBody.style.backgroundColor = "lightblue";
    theButton.style.backgroundImage = "URL('pika.png')";
} 

