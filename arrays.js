// Double all nums in array. Create and push to new array.
const array = [1, 2, 3, 6, 8, 9];

const doubled = []

const newArray = array.forEach((num) => {doubled.push(num * 2);})

console.log('forEach', doubled)

// Map -- Loop over each number and return array.
const mapArray = array.map(num => num * 2);

console.log('Map', mapArray)

// Filter -- For nums in array, evaluate expression and add to new array if True.
const filterArray = array.filter(num => num > 5);

console.log('Filter', filterArray)

// Reduce -- Accumulator is second parameter of reduce and is starting number. 
// Ex. 2 + 1 = 3. Then 3 + 2 = 5. Then 5 + 3 = 8. etc.
const reduceArray = array.reduce((acc, num) => {
    return acc + num;}, 2);

console.log('Reduce', reduceArray)

// Practice
const teamArray = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
  
  ];

  // Add exclamation point to all names in the given array using forEach.
  const teamMembers = []
  const emphNames = teamArray.forEach(({username}) => {teamMembers.push(username + "!");})
  console.log("Team forEach", teamMembers)

  // Same as above except using Map and adding "?".
  const questionNames = teamArray.map(({username}) => username + "?");
  console.log("Team Map", questionNames)

  // Filter to only include users on team Red.
  const filterTeam = teamArray.filter(({team}) => team === "red");
  console.log("Team Filter", filterTeam)

  // Use reduce to find total score of all users. Remember to specifiy return.
  const reduceScores = teamArray.reduce((acc, {score}) => { return acc + score;}, 0);
  console.log("Total of Scores: ", reduceScores)