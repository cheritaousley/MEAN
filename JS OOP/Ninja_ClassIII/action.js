class Ninja{ //this is the ES6 way--saying Class
    constructor(name){
    const speed = 10;
    const strength = 10;
    this.health = 200;
    this.name = name;
    }
    sayName() { 
        console.log(`Hello my name is + ${this.name}`);
    }
    drinkSake() {
        this.health += 10;
        console.log(this.health);
    }
}
class Sensei extends Ninja {
    constructor(name){
        super(name);
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake(); //must use 'this' just like when haivng the ninja drink sake
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
}

// const ninja1 = new Ninja("Hyabusa"); //be sure to call on the function outside of the ninja being defined
// ninja1.sayName();
// ninja1.showStats();
// ninja1.drinkSake();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// superSensei.showStats();
