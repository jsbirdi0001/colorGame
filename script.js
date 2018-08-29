var num1= Math.floor(Math.random()*256);
var num2=Math.floor(Math.random()*256);
var num3=Math.floor(Math.random()*256);
var rgb= "("+num1 + ", " + num2 + ", " + num3 + ")" ;
var playAgain = document.querySelector("#playAgain");


$("#jumbotron").css({"background-color":"rgba(50, 150, 255, 0.5)","color":"#0a0a0a"})
$("#rgb").text(rgb)

for(var i =1;i<7;i++){
	var clr1 = "#clr"+i;
	var color1= Math.floor(Math.random()*256);
	var color2=Math.floor(Math.random()*256);
	var color3=Math.floor(Math.random()*256);
	var color= "rgb("+color1 + ", " + color2 + ", " + color3 + ")" ;
	$(clr1).css("background-color",color);
}

var random = Math.floor(Math.random()*7);
var rand = "#clr"+random
document.querySelector(rand).style.backgroundColor = "rgb"+rgb;

for(var j=1;j<7;j++){
	var event = "#clr"+j;
	document.querySelector(event).addEventListener("click",function(){
		if(this.style.backgroundColor !== "rgb"+rgb){
			this.style.display = "none";

		}
		else {
			for(var i =1;i<7;i++){
				var l = "#clr"+i;
				var m = "rgb"+rgb;
				$(l).css({"background-color":m, "display":"inline-block"});
				document.querySelector(".body").style.display="none";
				document.querySelector(".winner").style.display="block";

			}
		}
	})
}

playAgain.addEventListener("click",function(){
	document.querySelector(".body").style.display="block";
	document.querySelector(".winner").style.display="none";
	window.location.reload();
})

var icon = document.querySelector("#icon");
var sound = document.querySelector("#sound");
var even = 0;
icon.addEventListener("click",function(){
	if(even%2 === 0){
		sound.play();
	}
	else{
		sound.pause();
	}
	even++;
})