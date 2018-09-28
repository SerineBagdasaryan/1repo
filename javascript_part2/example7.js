// window global object in Javascript  Super Global object

console.log(window);

var a = 5;

console.log(window.a); //

console.log(window.a == a); //aysinqn k nashnake or Мы создаем свойство а в глобальном Объекте window


var a = 'Funny';

function abc() {
    window.a = 'Shy';

}
abc();
console.log(window.a);





(function () {
    var i = 'Nitendo';
    console.log(i);
})();


+function () {

}();

-function () {

}();