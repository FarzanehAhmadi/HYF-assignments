const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here

function removeName(arr,name){
  const index = arr.indexOf(name);
  arr.splice(index,1);
  return arr;
  }
  removeName(names,"Ahmad")
  
// Code done


console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']