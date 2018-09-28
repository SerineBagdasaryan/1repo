function generateColor() {
    return "#" + Math.floor(Math.random() * 16777255).toString(16);
}


function circle() {
    var radius = Math.floor(Math.random() * 100 + 50),
        diam = radius * 2,
        color = generateColor(),
     
   htmlCode = `<div style="border-radius:50%;width:${diam}px;height:${diam}px;background: ${color}"></div>`;

    
document.write(htmlCode);
}

var i = 0;
function showCircle() {
   
 circle();
    if(i < 5){
        i++;
      
  setTimeout(showCircle, 3000);
    }
}

showCircle();