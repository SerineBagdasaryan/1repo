//Array

var cities = ['Moscow', "Austria", "Vietnam"];

console.log(cities.length);
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);

// Avelacnumenq nor element mer masivi mej
cities.push("USA");

console.log(cities);

for(var i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

var mass = [];

for(var i = 50; i <= 150; i++){
    if(i % 2 != 0){
        mass.push(i);
    }
}
console.log(mass);

// "String".split("");
// "String".reverse();
// "String".join("");
// filter() makrume bolor avelnord tver@


function isPalamidrom(num) {
    return true;
}

var palindNums = [];
for(var i = 0; i < 1000; i++){
    if(isPalamidrom(i)){
        palindNums.push(i)
    }
}


// var number = ['one', 'two', 'three', 'foure'];

// number.map(function (tuzik) {
//    console.log(tuzik);
// });
//
// number.map((number) => {
//     console.log(number);
// });


function isOdd(num) {
    if(num % 2 != 0){
        return true;
    }
    return false;
}

var number2 = [1,2,3,4,5,6,7];
var number3 = number2.map(x => x * x);
var number4 = number2.filter(isOdd);

console.log(number2);
console.log(number3);
console.log(number4);


function range(count) {
    var arr = [];

    for(var i = 0; i < count; i++){
        arr.push(i);
    }
    return arr;
}

console.log(range(100).filter(isOdd));