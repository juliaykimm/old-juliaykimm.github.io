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
        gameStart = false;
        console.log("hi");
        body.css("background-color", "red");
        stat.text('you LOST! click yellow button to try again');
    }
}

function won(){
    if(gameStart == true){
        gameStart = false;
        stat.text('you WON! click yellow button to restart');
        body.css("background-color", "green");
    }
}
