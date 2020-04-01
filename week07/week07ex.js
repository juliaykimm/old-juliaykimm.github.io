let myFirt= "julia"
let myLast= "kim"

let quantity = 13;
let price = 5;

myCalculator(){
    function myCalculator(quantity, price)
//    console.log(quantity * price);
    return quantity * price;
}

const theButton = document.querySelector("#firstButton");
theButton.addEventListener('click', clickButton)

function clickButton(){ // when button is clicked
    console.log("clicked"); // syas clicked if clicked
    theBody.style.backgroundColor = "blue" // changes background color when clicked
    theText.textContent = "pressed"
}

const theBody = document.querySelector('body');
console.log(theBody.style)

let theText = document.querySelector('p');

document.addEventListener('keydown', theEvent => {
    if (theEvent.keycode == 32){
        console.log("key 32")
        theText.textContent = "pressed space"
    }
}

