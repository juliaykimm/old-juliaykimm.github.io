var theButtonOne = document.querySelector("#firstButton");
var theButtonTwo = document.querySelector("#secondButton");
var theButtonThree = document.querySelector("#thirdButton");
var text = document.querySelector("#theReponse");



theButtonOne.addEventListener('click', oneIsClicked);
theButtonTwo.addEventListener('click', twoIsClicked);
theButtonThree.addEventListener('click', threeIsClicked);
text.addEventListener('click', threeIsClicked);

function oneIsClicked() {
    theButtonOne.style.backgroundColor = "black";
    text.style.color = "#b58ff2";
} 

function twoIsClicked() {
    theButtonTwo.style.backgroundColor = "black";
} 

function threeIsClicked() {
    theButtonThree.style.backgroundColor = "black";
} 