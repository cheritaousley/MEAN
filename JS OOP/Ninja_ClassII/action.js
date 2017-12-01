function Ninja(name) {
    const speed = 3;
    const strength = 3;
    this.health = 100;
    this.name = name;
    this.sayName = function () { //this makes it public , const makes it private and then we would have to call on it sayName()
        console.log("Hello my name is" + this.name);
        // sayName(); //not needed becuase it is a public constructor
    }
    this.showStats = function () {
        console.log(strength + speed + this.health);
    }
    this.drinkSake = function () {
        this.health += 10;
        console.log(this.health);
    }
    this.punch = function () {
        this.health -= 5;
        console.log(this.health);
    }
    // this.kick = function () { //this method should subtract 15 health for each point of strength the calling ninja has
    //         this.health -= 15;
    //         console.log(this.health);

    // }
    this.kick = function (opponent) { //this method validates to only accept instance from ninja class
        if(opponent instanceof Ninja)
            opponent.health -= 15;
        console.log(opponent.health);

    }
}
// const ninja1 = new Ninja("Hyabusa"); //be sure to call on the function outside of the ninja being defined
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
const blueNinja = new Ninja("Goemon");
const redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
blueNinja.kick(redNinja);