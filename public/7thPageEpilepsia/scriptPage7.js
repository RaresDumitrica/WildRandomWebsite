var madnessStarter = setInterval(generateColors, 500);
var myBody = document.body

function generateColors() {
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    myBody.style.backgroundColor = "#"+randomColor 
}


function stopMadness() {
    clearInterval(madnessStarter);
  }

