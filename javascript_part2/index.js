function RGB() {
    return "rgb("+parseInt(Math.random() * 255) + ", "+parseInt(Math.random() * 255)+","+parseInt(Math.random() * 255)+")";
}

function cirkle(r){
    var str = "<div style=\"width:" + r +"px; height:" + r +"px; border-radius: 50%;  background:"+RGB()+"\"></div>";
    document.write(str);
}

for(var i = 0; i < 200; i++){
    cirkle(i);
}








