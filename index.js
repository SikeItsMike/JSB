// CHALLENGE 1 - ADD CODE BELOW 
//You have a list of songs you want to play in an array “songs”. Define a function **musicPlayer** that takes one argument, an array of objects, where each object is a song. **musicPlayer** will iterate/loop through the array and print all the songs and artists to the console in the following format: 'Now playing: <Song> by <Artist>'.

function musicPlayer(arr){
  for (let i = 0; i < arr.length; i++){
    let song = arr [i] ['songName'];
    let artist = arr [i] ['artistName'];
    console.log (`Now playing: ${song} by ${artist}`);
}
}




// UNCOMMENT THE CODE BELOW TO CHECK YOUR WORK
// You'll know you're right if the console output logs all of the songs listed below, in order. 

const songs = [
  {songName: "Toxic", artistName: "Britney Spears"},
  {songName: "Sun is Sunshine", artistName: "Bob Marley"},
  {songName: "Easy On Me", artistName: "Adele"},
  {songName: "DNA", artistName: "BTS"},
];


musicPlayer(songs); // => should log:
//   // Now playing: "Toxic" by Britney Spears
//   // Now playing: "Sun is Sunshine" by Bob Marley
//   // Now playing: "Easy On Me" by Adele
//   // Now playing: "DNA" by BTS
  


// CHALLENGE 2 - ADD CODE BELOW
//Create a function called **findOddNumbers** that takes one argument called “numArray", which is an array of numbers. When **findOddNumbers** is invoked it will return a new array with all of the numbers that are odd.
  function findOddNumbers (numArray) {
    const oddNumbers = [];
    numArray.forEach (number => {
      if (number % 2 !== 0){
        oddNumbers.push(number);
      }
    })
    console.log(oddNumbers);
    
  }


// // UNCOMMENT THESE LINES TO CHECK YOUR WORK
findOddNumbers([90013, 11801, 10012, 10006, 67001]); // => should return [90013, 11801, 67001]



// CHALLENGE 3 - ADD CODE BELOW
// Our design team wants to get more attraction to our page and decided to experiment with the title of our page. We want to capitalized the first three character of each title.

// Create a function **capitalizeThreeLetters** that takes in one parameter, a string representation of a word, and outputs the same string with the first three characters capitalized. 

//Start off with making a function with the parameters for string

//DISREGARD
// function capitalizeThreeLetters (str){
//   const caps = str.charAt(0).toUpperCase() + str.charAt(1).toUpperCase() + str.charAt(2).toUpperCase() + str.slice(3);
//   console.log(caps)
// }

function capitalizeThreeLetters (str){
  let newStr = '';
  for (let i = 0; i < 3; i ++){
    newStr += str.charAt(i).toUpperCase();
  }
  return (newStr + str.slice(3));
}


// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(capitalizeThreeLetters('welcome')); // => should return 'WELcome'
console.log(capitalizeThreeLetters('codesmith')); // => should return 'CODesmith'


// CS PREP ADMISSIONS CHALLENGE - ADD CODE BELOW
// If you are interested in attending CS Prep after this course and have not already been accepted, you will need to complete and pass the following challenge in order to receive a fast-track code granting you automatic acceptance into CS Prep. Once your assessment has been graded, if you have passed, the Prep Program Coordinator will send you the fast-track code to use for your application. If you have already applied to CS Prep but have not yet been accepted, you can complete the following challenge to expedite your enrollment.


// Create a function **applyAll** that takes an array and a callback as arguments. **applyAll** will return a new array where each element from the original array will have had the callback applied to it.

//CSX challenge:map is good to look up for this problem. 
function applyAll (array, instructions){
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push (instructions(array[i]));
  }
  return output;
}



// UNCOMMENT THESE LINES TO CHECK YOUR WORK
console.log(applyAll(['mai', 'brian', 'jeho', 'han'], capitalizeThreeLetters)); // => should return ['MAI', 'BRIan', 'JEHo', 'HAN']























