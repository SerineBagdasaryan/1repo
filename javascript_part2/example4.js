//Anonimniye Functicii

(function () {
    console.log('Hello We in the anounim function');
})();


(function (name) {
    console.log(`Hello, ${name}`)
})("Artyom");

setTimeout(function () {
   console.log('Hello setTimeout')
}, 2000);

// funcionalnoye virojeniye
var a = function () {
    console.log("Hello World");
};

a();