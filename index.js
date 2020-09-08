/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 18;
if (votingAge >= 18) {
  console.log(true);
} else {
  console.log(false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let var1 = 10;
let var2 = 20;

if (var2 > 10) {
  var1 = 15;
}
console.log(var1);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

console.log(parseInt('1999'));

//Task d: Write a function to multiply a*b

const multiply = (a, b) => a * b;
console.log(multiply(3, 10));

/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

const dogYears = humanYears => humanYears * 7;
console.log(dogYears(10));

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

const dogFeeder = (weight, age) => {
  if (age >= 1) {
    // ages 1 year or older
    if (weight <= 5) {
      return weight * 0.05;
    } else if (weight <= 10) {
      return weight * 0.04;
    } else if (weight <= 15) {
      return weight * 0.03;
    } else {
      return weight * 0.02;
    }
  } else if (age > 0.58) {
    // 7-12 months
    return weight * 0.04;
  } else if (age > 0.33) {
    // 4-7 months
    return weight * 0.05;
  } else if (age > 0.16) {
    // 2-4 months
    return weight * 0.1;
  } else {
    // under 2 months
    return 'Too Young';
  }
};
console.log(dogFeeder(15, 1));

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

const rockPaperSissors = guess => {
  let guessNum = 0;
  let cpuNum = Math.floor(Math.random() * 3 + 1); // generates a random number between 1 and 3
  console.log(cpuNum);
  if (guess === 'rock') {
    guessNum = 1; // 1 = rock
  } else if (guess === 'paper') {
    guessNum = 2; // 2 = paper
  } else if (guess === 'sissors') {
    guessNum = 3; // 3 = sissors
  } else {
    return 'Not a valid input'; // return this is something other then rock, paper, or sissors in the input
  }
  if (
    (guessNum === 1 && cpuNum === 3) ||
    (guessNum === 2 && cpuNum === 1) ||
    (guessNum === 3 && cpuNum === 2)
  ) {
    return 'You Won';
  } else if (
    (guessNum === 1 && cpuNum === 2) ||
    (guessNum === 2 && cpuNum === 3) ||
    (guessNum === 3 && cpuNum === 1)
  ) {
    return 'You Lost';
  } else {
    return 'You Tied';
  }
};

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

const toMiles = kilometers => kilometers * 0.62;

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

const toCm = feet => feet * 30.48;

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

const annoyingSong = start => {
  for (let i = start; i > 0; i--) {
    console.log(
      i +
        ' bottles of soda on the wall, ' +
        i +
        ' bottles of soda, take one down pass it around ' +
        (i - 1) +
        ' bottles of soda on the wall!'
    );
  }
};
console.log(annoyingSong(4));

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

const gradeCalculator = grade => {
  if (grade >= 90) {
    return 'A';
  } else if (grade >= 80) {
    return 'B';
  } else if (grade >= 70) {
    return 'C';
  } else if (grade >= 60) {
    return 'D';
  } else {
    return 'F';
  }
};

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

const numberOfVowels = string => {
  let vowels = 'aeiouAEIOU';
  let vowelCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) !== -1) {
      vowelCount++;
    }
  }
  return vowelCount;
};
console.log(numberOfVowels('How man vowels are in this string?'));

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

const rockPaperSissors2 = () => {
  let userInput = prompt('Enter rock, paper, or sissors: ');
  return rockPaperSissors(userInput);
};
console.log(rockPaperSissors2());
