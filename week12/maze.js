var end = $("#end");
var maze = $("#maze");
var stat = $("#status");
var stat2 = $("#status2");
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
    stat2.text('go!')
 })

function lost(){
    if(gameStart == true){
        gameStart = false;
        console.log("hi");
        body.css("background-color", "red");
        stat.text('YOU LOST!');
        stat2.text('tap yellow bar to restart')
    }
}

function won(){
    if(gameStart == true){
        gameStart = false;
        stat.text('YOU WON!');
        body.css("background-color", "green");
        stat2.text('tap yellow bar to restart')
    }
}