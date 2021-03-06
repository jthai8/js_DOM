//hiLo on a webpage
//random generates a random number
var random = Math.floor(Math.random()*100)+1;
//random gets printed to the console
console.log (random);
//count maintains the number of guesses
var count = 0;

function hiLo() {
  //name sets whatever we enter in the name field to store the name.
  var name = document.getElementById('name').value;
  //guess sets whatever we enter in the guess field to store the guess.
  var guess = parseInt(document.getElementById('num_guessed').value);

  //Number.isNaN tests if the value is not a numeric entry
  if (Number.isNaN(guess)) {
    //Prints to h2 if our guess is not a number.
    document.getElementById('response').innerHTML="Please enter a numeric value, guess again.";
    count++;
    //Prints to h2 if our guess is too low.
  } else if (random > guess){
    document.getElementById('response').innerHTML = "Number is too low";
    count++;
    //Prints to h2 if our guess is too high.
  } else if (random < guess){
    document.getElementById('response').innerHTML = "Number is too high";
    count++;
    //Prints to h2 if we have exceeded the number of guesses.
  } else if (count === 7) {
    document.getElementById('response').innerHTML = "Too many guesses, you lose."
    //Prints to h2 if our guess is the number generated by variable random.
  } else {
    document.getElementById('response').innerHTML = "You won "+ name + "!"
  }
}

//What we adapted our webpage hiLo from.
// //hiLo
// function hiLo() {
//   var random = Math.floor(Math.random()*100)+1;
//   var name = prompt("Please enter your first name.");
//   var guess = parseInt(prompt ("Guess a number between 1-100"));
//   var count = 0;
//   while (random != guess && count < 7) {
//     guess;
//     console.log (random);
//     //below tests if the value is not a numeric entry
//     if (Number.isNaN(guess)) {
//       alert("Please enter a numeric value.");
//       guess = parseInt(prompt("Guess again"));
//     } else if (random > guess){
//       alert ("Number is too low");
//       count = count + 1;
//       guess = parseInt(prompt("Guess again"));
//     } else if (random < guess){
//       alert ("Number is too high");
//       count = count + 1;
//       guess = parseInt(prompt("Guess again"));
//     }
//   }
//   if (count === 7) {
//     alert("Too many guesses. You lose.");
//   } else {
//     alert ("You won "+ name + "!");
//   }
// }
