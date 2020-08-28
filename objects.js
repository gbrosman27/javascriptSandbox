// The Animal class that all classes will inherit from.
class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi! my name is ${this.name}. I am a ${this.type}.`);
    }
}

// The Dog class which inherits from the Animal class.
class Dog extends Animal{
    constructor(name, type){
        super(name, type)
    }

    bark(){
        console.log("Woof!");
    }
}

// The Bird class which inherits from the Animal class.
class Bird extends Animal{
    constructor(name, type){
        super(name, type)
    }

    tweet(){
        console.log("tweet, tweet");
    }
}

// Instantiate new Dog and Bird objects.
const kobeTheDog = new Dog("Kobe", "Rottweiler");
const twitchTheBird = new Bird("Twitch", "Sparrow");

console.log(kobeTheDog)
console.log(twitchTheBird)
console.log(kobeTheDog.introduce())
console.log(kobeTheDog.bark())
console.log(twitchTheBird.introduce())
console.log(twitchTheBird.tweet())