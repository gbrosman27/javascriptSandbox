// Double all nums in array. Create and push to new array.
const array = [1, 2, 3, 6, 8, 9];

const doubled = []

const newArray = array.forEach((num) => {doubled.push(num * 2);})

console.log('forEach', doubled)

// Map -- Loop over each number and return array.
const mapArray = array.map((num) => {
    return num * 2;
});

console.log('Map', mapArray)