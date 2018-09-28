
function rectangle(width, height, color) {
  
  var str = `<div style="width:${width}px; height:${height}px; background:${color};"></div>`;
   
 document.write(str);
}


rectangle(100,100,'red');