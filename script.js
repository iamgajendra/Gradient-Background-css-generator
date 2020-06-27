var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.getElementById("rand")


function setRandomColor(){
	var randomColor1 = Math.floor(Math.random()*16777215).toString(16);
    var randomColor2 = Math.floor(Math.random()*16777215).toString(16);

    color1.value = "#"+randomColor1;
    color2.value = "#"+randomColor2;
    body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";
    css.textContent = body.style.background + ";";
}

color1.value = "#ff0000";
color2.value = "#ffff00";
css.textContent = "linear-gradient(to right, " + color1.value + "," + color2.value + ");";

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + "," + color2.value + ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click",setRandomColor);

//we can do this without using EventListener 
//we can set the onclick attribute in input tag to 
// eg.  onclick="setGradient()"