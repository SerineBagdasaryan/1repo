function Bird(n){
    this.name = n;
    this.whatIsYourName = function () {
      console.log(`My name is ${this.name}`);
    };
}


var tony = new Bird("Tony");
var carlito = new Bird("Carlito");

tony.whatIsYourName();
carlito.whatIsYourName();