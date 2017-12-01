function Ninja(name){ //name of object must be uppercase and singular 
    const speed = 3; //private variable
    const strength = 3;
    this.health = 100;
    this.name = name;
    this.sayName = function(){ //this makes it public , const makes it private and then we would have to call on it sayName()
        console.log("Hello my name is" + this.name);
        // sayName(); //not needed becuase it is a public constructor
    }
    this.showStats = function(){
        console.log(strength + speed + this.health);
    }
    this.drinkSake = function(){
        this.health += 10;
        console.log(this.health);
    }
}
const ninja1 = new Ninja("Hyabusa"); //be sure to call on the function outside of the ninja being defined
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();