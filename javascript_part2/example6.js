var biograpy = {
    name: "David",
    infoName: function () {
        console.log(`His name is ${this.name}`)
    },
    setAge: function (age) {
        this.userAge = age;
    },
    howOldAreYou: function () {
        console.log(`I am ${this.userAge}, age`);
    }
};


biograpy.infoName();
biograpy.setAge(25);
biograpy.howOldAreYou();


console.log(biograpy);