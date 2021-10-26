/*
Skapa ett enkelt nummer-gissningsspel. Det ska välja ett slumpmässigt tal mellan 1 och 100, sedan utmana spelaren att gissa
 antalet med max 10 gissningar. Efter varje tur ska spelaren få veta om den har rätt eller fel, och om de har fel, om 
 gissningen var för låg eller för hög. Det ska också tala om för spelaren vilka nummer de tidigare gissat. Spelet ska 
 avslutas när spelaren gissar rätt, eller när de får slut på gissningar. När spelet slutar ska spelaren ges möjlighet 
 att spela igen.
*/


/*
 get rndNr, ask user for guess between 1 and 100 (error if outside of range), compare guess to rndNr, 
 if equal return 'you win' and number of guesses
 if guess < rndNr return 'you guessed too low' and number of guesses
 if guess > rndNr return 'you guessed too high' and number of guesses

 if guesses > 10 || guess = rndNr, game ends
 else return previous guesses
 */

const returnsRandomInt = () => {
    return Math.floor((Math.random() * 100) + 1); // floor and +1 because Math.random returns float between 0 and <1 (excluding 1, including 0) 
}

//console.log(returnsRandomInt());


//let userGuess = window. prompt("Enter your guess between 1 and 100, including 1 and 100: ");
let userGuess;
let rndNumber = returnsRandomInt();
//console.log(userGuess, returnsRandomInt());
//const attempts = 10;
//const guesses = [];
//guesses.push(userGuess);

//console.log(guesses);

const repliesCorrect = () => {
    console.log(`Correct! you guessed ${rndNumber}, Congrats!`);
}

const repliesFalse = () => {
    userGuess > rndNumber ?
        console.log(`Wrong!!! ${userGuess} is too high`) : console.log(`Wrong!!! ${userGuess} is too low`);
}

//Number.isInteger(userGuess)
//for (let i = 0; i < attempts; i++) {

const playGame = () => {
    //let userGuess;
    const attempts = 10;
    const guesses = [];
    //const rndNumber = returnsRandomInt();
let i = 0;

do {
    //console.log("Hi there");
    userGuess = window.prompt("Enter your guess between 1 and 100, including 1 and 100: ");
    if (userGuess >= 1 && userGuess <= 100) {
        console.log(`${userGuess} is between 1 and 100`);
        userGuess == rndNumber ? repliesCorrect() : repliesFalse(); // has to be == not === (which would be tru if they were the same object?)
        console.log(`hint...${rndNumber}`); 

        guesses.push(userGuess);
        console.log(`numbers guessed: ${guesses}`);
        guesses.length == 10;

    } else {
        console.log("Seriously, enter an integer in range 1-100");
    };

    i++
} while (i < attempts && userGuess != rndNumber);
};

console.log("Let's play !!!");
setTimeout(playGame(), 1000);
let newGame;

do {
newGame = window.prompt("Wanna play again?? Enter Yes or No");
newGame = newGame.toLowerCase();
newGame == "yes" ? playGame() : alert("Okay");
}while(newGame == "yes");


 //userGuess === rndNumber ? console.log(`Correct! you guessed ${rndNumber}, Congrats!`) : console.log(`Wrong!!! you guessed ${userGuess}, try again`);
 //userGuess === rndNumber ? console.log(`Correct! you guessed ${rndNumber}, Congrats!`) : repliesCorrect()  : repliesFalse();
