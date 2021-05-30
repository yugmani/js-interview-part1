//1. Return the words with more than 6 letters
const words = ['react', 'script', 'interview', 'style', 'javascript'];

// using higher order function
const ans = words.filter(word => word.length > 6);

console.log(ans); //Expected ['interview', 'javascript']

//using for.. loop
const newArray = [];
for (let i = 0; i < words.length; i++) {
  if (words[i].length > 6) {
    newArray.push(words[i]);
  }
}

console.log(newArray);
