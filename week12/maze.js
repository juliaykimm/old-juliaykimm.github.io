var end = $("#end");
var maze = $("#maze");
var stat = $("#status");
var boundary = $(".boundary");
var body = $(".body");
var gameStart = false;
var start =  $("#start").click(function(){
    gameStart = true;
    boundary.css("background-color", "black")
    if(boundary.hasClass('lost')){
        boundary.removeClass('lost');
    }
    boundary.mouseover(function(){lost();})
    maze.mouseleave(function(){lost();})
    end.mouseover(function(){won();})
 })


function lost(){
    if(gameStart == true){
        gameStart = false
        console.log("hi");
        body.css("background-color", "red");
        stat.text('you lost!');
    }
}

function won(){
    if(gameStart == true){
        stat.text('you won!');
        body.css("background-color", "green");
    }
}
