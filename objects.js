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


// Objects 1, 2, 3 all point to the same reference. 
// Object4 is a new object in memory and therefore does not change the previous objects.
// Editing object2 later changes the value of the reference for the other objects pointing to it.
object1 = { a: 5 }; // 5
object2 = object1; // 5
object3 = object2; // 5
object4 = { a: 6 }; // 6
console.log(object2.a)
console.log(object4.a)
object2.a = 4;
console.log(object1.a) // 4
console.log(object3.a) // 4