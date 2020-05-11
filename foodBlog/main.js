function typeText(word1,word2,speed){
	var text=word1.text();
	var content=text.split("");
	var i=0;
	function show(){
		if(i<content.length){		
			word2.append(content[i]);
			i=i+1;
		};
	};
	var timer=setInterval(show,speed);	
};

$(document).ready(function(){
	typeText($("#juliaBlog"),$("#titles2"), 155); 
	clearInterval(timer);
});

