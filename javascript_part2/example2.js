﻿// Math.floor --- tiv@ tarcnume klor

// Math,random -- amen ankam random generacnume nor tiv

// toString()


function Hello() {
    document.write("<h1>Hello world</h1>");
}


// var toString = Object.prototype.toString;

//
// toString.call(new Date);   
 // [object Date]
// toString.call(new String); 
 // [object String]
// toString.call(Math);      
  // [object Math]
//
// // Начиная с JavaScript 1.8.5

// toString.call(undefined);   // [object Undefined]

// toString.call(null);        // [object Null]

// orinak (100).toString() k veradarcne String

// (100).toString(16) k veradarcne 16 erord akan tiv@

/**
 * Genaret random color function
 * @returns {string}
 */

// comentneri hamar partadir asel;
function generateColor() {
    return "#" + Math.floor(Math.random() * 16777255).toString(16);
}



// functiayi declaration
function circle() {
    var radius = Math.floor(Math.random() * 100 + 50),
        diam = radius * 2,
        color = generateColor(),
      
  htmlCode = `<div style="border-radius:50%;width:${diam}px;height:${diam}px;background: ${color}"></div>`;


    document.write(htmlCode);
    setTimeout(circle, 1000);
}




setTimeout(circle, 3000);
setTimeout(function () {
   Hello();
}, 5000);




