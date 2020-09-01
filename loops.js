const dogToys = ["kong", "ball", "rubber chicken", "football", "bone"]

const shoppingList = {
    apples: 5, 
    oranges: 10,
    cherries: 30,
    grapes: 100
}

// for loop
for ( let i = 0; i < dogToys.length; i++){
    console.log(dogToys[i]);
}

// foreach loop
dogToys.forEach(toy => {
    console.log(toy)
});

// for of
// iterating over arrays and strings
for (item of dogToys){
    console.log(item);
}

// for in
// enumerating over an object
for (item in shoppingList){
    console.log(item);
}